import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Address() {

  const [localisation, setLocalisation] = useState({
    county: "",
    city: "",
    street: "",
    number: "",
    postalCode:'',
    adressType:'Home'
  });

  const navigare = useNavigate()

  const changeValue = e =>{
    setLocalisation({
      ...localisation, 
      [e.target.name]:e.target.value
    }
    )
  }

  function addAdress(){
    const userID = localStorage.getItem('userID')
    axios.post(
      'http://localhost:5000/api/address',{
        Judet:localisation.county,
        Oras:localisation.city,
        Strada:localisation.street,
        Nr:localisation.number,
        Cod_postal:localisation.postalCode,
        Tip_adresa:localisation.adressType,
        Utilizator_ID:userID
      }).then((response)=>{
        if(response.status==201){
          navigare('/medicament')
        }
      })
  }
  
  return (
    <div className="mainAdress">
      <div class="container d-flex align-items-center justify-content-center  pt-5">
        <form>
          <div class="row">
            <h1 class="text-center mt-2 mb-4">Address Information</h1>
            <div class="col-sm-6 ">
              <div class="mb-3 mt-3">
                <label for="countyAdress" class="form-label">
                  County:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="countyAdress"
                  placeholder="Enter county"
                  name="county"
                  value={localisation.county}
                  onChange={changeValue}
                />
              </div>
              <div class="mb-3 mt-3">
                <label for="cityAdress" class="form-label">
                  City:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cityAdress"
                  placeholder="Enter city"
                  name="city"
                  value={localisation.city}
                  onChange={changeValue}
                />
              </div>
              <div class="mb-4 ">
                <label for="streetAdress" class="form-label">
                  Street:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="streetAdress"
                  placeholder="Enter street"
                  name="street"
                  value={localisation.street}
                  onChange={changeValue}
                />
              </div>
            </div>
            <div class="col-sm-6 ">
              <div class="mb-3 mt-3">
                <label for="numberAdress" class="form-label">
                  Number:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="numberAdress"
                  placeholder="Enter number"
                  name="number"
                  value={localisation.number}
                  onChange={changeValue}
                />
              </div>
              <div class="mb-3 mt-3">
                <label for="postalCodeAdress" class="form-label">
                  Postal code:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="postalCodeAdress"
                  placeholder="Enter postal code"
                  name="postalCode"
                  value={localisation.postalCode}
                  onChange={changeValue}
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="adressTypeName" class="form-label">
                Adress type
              </label>
              <select
                id="adressType"
                name="adressTypeName"
                class="form-select"
                value={localisation.adressType}
                onChange={changeValue}
              >
                <option>Work</option>
                <option>Home</option>
              </select>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-dark mb-3 "
                id="btnEditAdress"
                onClick={addAdress}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Address;
