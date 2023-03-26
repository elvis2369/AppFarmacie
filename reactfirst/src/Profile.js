import "./Register.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [credentials, setCredentials] = useState({
    firstName: "",
    email: "",
    pswd: "",
    lastName: "",
    phone: "",
    CNP: "",
    userType: "Pacient",
  });
  const [addresses, setAddresses] = useState([]);

  function getAddresses() {
    const email = localStorage.getItem("userEmail");
    axios
      .get("http://localhost:5000/api/addresses/" + email)
      .then((response) => {
        console.log(response);
        setAddresses(response.data);
      });
  }

  function getUserDetails() {
    const email = localStorage.getItem("userEmail");
    axios.get("http://localhost:5000/api/users/" + email).then((response) => {
      console.log(response.data);
      setCredentials(response.data[0]);
    });
  }
  useEffect(() => {
    getUserDetails();
    getAddresses();
  }, []);

  return (
    <div className="mainProfile">
      <div className="container d-flex align-items-center justify-content-center  pt-5">
        <form>
          <div className="row">
            <h1 className="text-center mt-2 mb-4">Profile</h1>
            <h3>Personal Information</h3>
            <div className="col-sm-6 ">
              <div className="mb-3 mt-3">
                <label htmlFor="Prenume" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstNameProfile"
                  placeholder="Enter first name"
                  name="Prenume"
                  defaultValue={credentials.Prenume}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="Email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmailProfile"
                  placeholder="Enter email"
                  name="Email"
                  defaultValue={credentials.Email}
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="Parola" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="userPassProfile"
                  placeholder="Enter password"
                  name="Parola"
                  defaultValue={credentials.Parola}
                />
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="mb-3 mt-3">
                <label htmlFor="Nume" className="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastNameProfile"
                  placeholder="Enter last name"
                  name="Nume"
                  defaultValue={credentials.Nume}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="Telefon" className="form-label">
                  Phone:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneProfile"
                  placeholder="Enter phone"
                  name="Telefon"
                  defaultValue={credentials.Telefon}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="cnp" className="form-label">
                  CNP:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cnpProfile"
                  placeholder="Enter CNP"
                  name="CNP"
                  defaultValue={credentials.CNP}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="userType" className="form-label">
                User type
              </label>
              <select
                id="userTypeProfile"
                name="userType"
                className="form-select"
                defaultValue={credentials.userType}
              >
                <option>Pacient</option>
                <option>Farmacist</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark mb-3 " id="btnEdit">
                Submit
              </button>
            </div>
            <h3>Adresses</h3>
            {addresses.length === 0 ? (
              <h5>No adresses available</h5>
            ) : (
              <table class="table">
                <thead>
                  <tr>
                    <th>Address Type</th>
                    <th>County</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  {addresses?.map((address) => {
                    return (
                      <tr>
                        <td>{address.Tip_adresa}</td>
                        <td>{address.Judet}</td>
                        <td>{address.Oras}</td>
                        <td>{address.Strada}</td>
                        <td>{address.Nr}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
