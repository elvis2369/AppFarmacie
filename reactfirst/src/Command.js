import axios from "axios";
import { useState, useEffect } from "react";

function Command() {
  const [addresses, setAddresses] = useState([]);
  const [orderMed, setOrderMed] = useState({
    nume:'',
    address:'',
    med1: "",
    quantity1: 0,
    med2: "",
    quantity2: 0,
    med3: "",
    quantity3: 0
  });
  const [med, setMed] = useState([]);

  const changeInput = e =>{
    setOrderMed({
        ...orderMed,[e.target.name]:e.target.value
    })
}
  function getAddresses() {
    const email = localStorage.getItem("userEmail");
    axios
      .get("http://localhost:5000/api/addresses/" + email)
      .then((response) => {
        console.log(response);
        setAddresses(response.data);
      });
  }
  function getMeds() {
    axios.get("http://localhost:5000/api/medicaments").then((response) => {
      console.log(response);
      setMed(response.data);
    });
  }
  console.log(orderMed)
  useEffect(() => {
    getAddresses();
    getMeds();
  }, []);

  return (
    <div>
      <div className="mainAddMedicament">
        <div className="container d-flex align-items-center justify-content-center  pt-5">
          <form>
            <div className="row">
              <h1 className="text-center mt-2 mb-4">Order Information</h1>
              <div className="col-sm-6 mb-3 mt-3">
                <div className="">
                  <label htmlFor="nume" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nume"
                    placeholder="Enter name"
                    name="nume"
                    defaultValue={orderMed.nume}
                    onChange={changeInput}
                  />
                </div>
              </div>
              <div className="col-sm-6 ">
                <div className="mb-3 mt-3">
                  <label htmlFor="address" className="form-label">
                    Address:
                  </label>
                  <select className="form-select" name="address" defaultValue={orderMed.address} onChange={changeInput}>
                    {addresses?.map((address, index) => {
                      return (
                        <option key={index}>
                          {address.Tip_adresa}, {address.Oras},{address.Judet},
                          {address.Nr},{address.Cod_postal}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="med1" class="form-label">
                    Medicament:
                  </label>
                  <select class="form-select" id='med1' onChange={changeInput} name='med1'>
                    {med?.map((medElem) => {
                      return <option>{medElem.Nume}</option>;
                    })}
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="quantity1" class="form-label">
                    Quantity:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="quantity1"
                    placeholder="Enter quantity"
                    name="quantity1"
                    defaultValue={orderMed.quantity1}
                    onChange={changeInput}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="med2" class="form-label" >
                    Medicament:
                  </label>
                  <select class="form-select" id='med2' name='med2' onChange={changeInput}>
                    {med?.map((medElem) => {
                      return <option>{medElem.Nume}</option>;
                    })}
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="quantity2" class="form-label">
                    Quantity:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="quantity2"
                    placeholder="Enter quantity"
                    name="quantity2"
                    defaultValue={orderMed.quantity2}
                    onChange={changeInput}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="med3" class="form-label" >
                    Medicament:
                  </label>
                  <select class="form-select" id='med3' onChange={changeInput} name='med3'>
                    {med?.map((medElem) => {
                      return <option>{medElem.Nume}</option>;
                    })}
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="quantity3" class="form-label">
                    Quantity:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="quantity3"
                    placeholder="Enter quantity"
                    name="quantity3"
                    defaultValue={orderMed.quantity3}
                    onChange={changeInput}
                  />
                </div>
              </div>
              <div>
                <button type="button" className="mb-3 mt-2 btn btn-success">
                  Order Recipe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Command;
