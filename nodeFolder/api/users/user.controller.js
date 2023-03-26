const { request } = require("express");
var mysql = require("mysql");
// var sql = "INSERT INTO `farmacie`.`utilizator` (`Utilizator_ID`, `Nume`, `Prenume`, `CNP`, `Telefon`, `Tip_user`, `Email`, `Parola`) VALUES ('3', 'Popel', 'Eugeniu', '1502574859561', '0745592281', '1', 'popel@yahoo.com', 'pas')";
// var sqlMed = "INSERT INTO `farmacie`.`medicament` (`Medicament_ID`, `Nume`, `Gramaj`, `Stoc`, `Forma_pastila`, `Lot`, `Data_expirare`) VALUES ('3', 'Paracetamol', '50', '10', 'Capsula', '100', '2030-01-02');"
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});
function getUsers(req, res) {
  con.query("SELECT * FROM farmacie.utilizator", (err, result) => {
    res.send(result);
  });
}

function createUser(req, res) {
  const nume = req.body.Nume;
  const prenume = req.body.Prenume;
  const cnp = req.body.CNP;
  const telefon = req.body.Telefon;
  const userType = req.body.Tip_user;
  const email = req.body.Email;
  const parola = req.body.Parola;
  con.query(
    "INSERT INTO `farmacie`.`utilizator` (`Nume`, `Prenume`, `CNP`, `Telefon`, `Tip_user`, `Email`, `Parola`) VALUES(?,?,?,?,?,?,?) ",
    [nume, prenume, cnp, telefon, userType, email, parola],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send({ message: "Adaugat cu succes!" });
      }
    }
  );
}

function deleteUser(req, res) {
  const email = req.body.Email;
  console.log(
    "DELETE FROM `farmacie`.`utilizator` WHERE  Email = '" + email + "'"
  );
  con.query(
    "DELETE FROM `farmacie`.`utilizator` WHERE  Email = '" + email + "'",
    (err, result) => {
      if (!err && result.affectedRows !== 0) {
        res.send({ message: "Utilizator sters cu succes!" });
      } else {
        res.status(400).send({ message: "Utilizatorul nu exista!" });
      }
    }
  );
}

function loginUser(req, res) {
  const email = req.body.email;
  const parola = req.body.password;
  con.query(
    "SELECT * FROM farmacie.utilizator WHERE email = '" +
      email +
      "'AND parola = '" +
      parola +
      "'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length == 0) {
          res.status(404).send({ message: "Nu exista" });
        } else {
          res.status(200).send({ message: "Logare cu succes" });
        }
      }
    }
  );
}

function listUsers(req, res) {
  const nume = req.body.Nume;
  const prenume = req.body.Prenume;
  const cnp = req.body.CNP;
  const email = req.body.Email;
  con.query(
    "SELECT Nume, Prenume, CNP, Email FROM farmacie.utilizator",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send({ result });
        console.log(result);
      }
    }
  );
}

function getMedicament(req, res) {
  con.query("SELECT * FROM farmacie.medicament", (err, result) => {
    res.send(result);
  });
}

function deleteMed(req, res) {
  const name = req.body.Nume;
  console.log(name);
  console.log(
    "DELETE FROM `farmacie`.`medicament` WHERE  Nume = '" + name + "'"
  );
  con.query(
    "DELETE FROM `farmacie`.`medicament` WHERE  Nume = '" + name + "'",
    (err, result) => {
      if (!err && result.affectedRows !== 0) {
        res.send({ message: "Medicament sters cu succes!" });
      } else {
        res.status(400).send({ message: "Medicamentul nu exista!" });
      }
    }
  );
}

function createMed(req, res) {
  const nume = req.body.Nume;
  const weight = req.body.Gramaj;
  const stock = req.body.Stoc;
  const pillForm = req.body.Forma_pastila;
  const description = req.body.Descriere;
  const lot = req.body.Lot;
  const expDate = req.body.Data_expirare;
  con.query(
    "SELECT count(Nume) AS numar FROM farmacie.medicament",
    (err, result) => {
      var k = result[0].numar;
      k += 1;
      con.query(
        "INSERT INTO `farmacie`.`medicament` (`Medicament_ID`,`Nume`, `Gramaj`, `Stoc`, `Forma_pastila`, `Descriere`, `Lot`, `Data_expirare`) VALUES(?,?,?,?,?,?,?,?) ",
        [k, nume, weight, stock, pillForm, description, lot, expDate],
        (err, result) => {
          if (err) {
            // console.log(err);
            res.status(400).send({ message: "A aparut o eroare!" });
          } else {
            res.status(201).send({ message: "Adaugat cu succes!" });
          }
        }
      );
    }
  );
}

function getUserByEmail(req, res) {
  const email = req.params.email;
  con.query(
    "SELECT * FROM `farmacie`.`utilizator` WHERE Email='" + email + "'",
    (err, result) => {
      res.send(result);
    }
  );
}

function getAddresses(req, res) {
  const email = req.params.email;
  console.log(email);
  con.query(
    "SELECT Adresa_ID, Judet, Oras, Strada, Nr,Cod_postal, Tip_adresa, a.Utilizator_ID FROM `farmacie`.`adresa` a LEFT JOIN  `farmacie`.`utilizator` u ON u.Utilizator_ID = a.Utilizator_ID WHERE Email='" +
      email +
      "'",
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
}

function getOrders(req, res) {
  con.query("SELECT * FROM `farmacie`.`comanda`", (err, result) => {
    res.send(result);
  });
}

function addAddress(req, res) {
  const judet = req.body.Judet;
  const oras = req.body.Oras;
  const strada = req.body.Strada;
  const numar = req.body.Nr;
  const codPostal = req.body.Cod_postal;
  const tipAdresa = req.body.Tip_adresa;
  const utilizator = req.body.Utilizator_ID;
  con.query("SELECT count(Nr) AS numar FROM farmacie.adresa",
  (err,result)=>{
      var k = result[0].numar;
      k += 1;
      con.query(
        "INSERT INTO `farmacie`.`adresa` (`Adresa_ID`,`Judet`, `Oras`, `Strada`, `Nr`, `Cod_postal`, `Tip_adresa`, `Utilizator_ID`) VALUES(?,?,?,?,?,?,?,?) ",
        [k, judet, oras, strada, numar, codPostal, tipAdresa, utilizator],(err, result) => {
          if (err) {
            // console.log(err);
            res.status(400).send({ message: "A aparut o eroare!" });
          } else {
            res.status(201).send({ message: "Adaugat cu succes!" });
          }
        })
  }
  );
}

function searchMed(req,res){
  const name = req.body.Nume;
  console.log(name)
  con.query(
    "SELECT * FROM `farmacie`.`medicament` WHERE Nume ='" + name + "'",
    (err, result) => {
      res.send(result);
    }
  );

  
}

function getMedById(req,res){
  const medID = req.params.id
  console.log(medID)
  console.log("SELECT * FROM `farmacie`.`medicament` WHERE Nume='" + medID + "'")
  con.query(
    "SELECT * FROM `farmacie`.`medicament` WHERE Nume='" + medID + "'",
    (err, result) => {
      res.send(result);
    }
  );
}

function sendOrder(req,res){
  const nume = req.body.nume
  const address = req.body.address
}

module.exports = {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
  listUsers,
  getMedicament,
  deleteMed,
  createMed,
  getUserByEmail,
  getAddresses,
  getOrders,
  addAddress,
  searchMed,
  getMedById,
  sendOrder
};
