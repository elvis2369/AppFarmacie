import Profile from "./Profile";
import Adresses from "./Address";
import AddMedicament from "./AddMedicament";
import Command from "./Command";
import Pacients from "./Pacients";
import { useEffect, useState } from "react";
function Navbar() {

  const [tipUser, setTipUser] = useState(false)
  function findType(){
    const typeUser = localStorage.getItem('userType')
    if(typeUser == 1){
      setTipUser(true)
    }
    else{
      setTipUser(false)
    }
  }
  useEffect(()=>{
    findType();
  },[])
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/address">
                  Address
                </a>
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <li
                    type="button"
                    className="btn btn-dark btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Medicine
                  </li>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/medicament">
                        Medicament
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/addMedicament">
                        Add Medicament
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/command">
                        Order Medicament
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/orderList">
                  OrderList
                </a>
              </li>
              {tipUser && <li className="nav-item">
                <a className="nav-link " href="/pacients">
                  Pacients
                </a>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
