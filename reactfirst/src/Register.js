import "./Register.css";
import { useState,useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const [credentials, setCredentials] = useState({
    firstName: "",
    email: "",
    pswd: "",
    lastName: "",
    phone: "",
    cnp: "",
    userType:"Pacient"
  });
  const [work, setWork] = useState(0);
  const inputUser = useRef(null);
  const navigate = useNavigate();
  const addUser = ((e) =>{
    e.preventDefault();
    const type = inputUser.current.value
    console.log(type)
    if(type =='Farmacist'){
      setWork(1)
    }
    else{
      setWork(0)
    }
    axios
      .post("http://localhost:5000/api/users", {
        Nume: credentials.lastName,
        Prenume: credentials.firstName,
        CNP: credentials.cnp,
        Telefon: credentials.phone,
        Tip_user: work,
        Email: credentials.email,
        Parola: credentials.pswd,
      }).then((response)=>{
        if(response.status==201){
          navigate('/medicament')
        }
      })
      
  })

  const changeInput = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const afisare = (e) => {
    e.preventDefault();
    console.log(credentials);
  };
  return (
    <div className="mainRegister">
      <div class="container d-flex align-items-center justify-content-center  pt-5">
        <form>
          <div class="row">
            <h1 class="text-center my-5">Register</h1>
            <div class="col-sm-6 ">
              <div class="mb-3 mt-3">
                <label for="firstName" class="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstNameRegister"
                  placeholder="Enter first name"
                  name="firstName"
                  required
                  value={credentials.firstName}
                  onChange={changeInput}
                />
              </div>
              <div class="mb-3 mt-3">
                <label for="email" class="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="userEmail"
                  placeholder="Enter email"
                  name="email"
                  required
                  value={credentials.email}
                  onChange={changeInput}
                />
              </div>
              <div class="mb-4 ">
                <label for="pswd" class="form-label">
                  Password:
                </label>
                <input
                  type="pass"
                  class="form-control"
                  id="userPass"
                  placeholder="Enter password"
                  name="pswd"
                  required
                  value={credentials.pswd}
                  onChange={changeInput}
                />
              </div>
            </div>
            <div class="col-sm-6 ">
              <div class="mb-3 mt-3">
                <label for="lastName" class="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastNameRegister"
                  placeholder="Enter last name"
                  name="lastName"
                  required
                  value={credentials.lastName}
                  onChange={changeInput}
                />
              </div>
              <div class="mb-3 mt-3">
                <label for="phone" class="form-label">
                  Phone:
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="phoneRegister"
                  placeholder="Enter phone"
                  name="phone"
                  required
                  value={credentials.phone}
                  onChange={changeInput}
                />
              </div>
              <div class="mb-3 mt-3">
                <label for="cnp" class="form-label">
                  CNP:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cnpRegister"
                  placeholder="Enter CNP"
                  name="cnp"
                  required
                  value={credentials.cnp}
                  onChange={changeInput}
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="userType" class="form-label">
                User type
              </label>
              <select id="userType" name="userType" class="form-select" value={credentials.userType} onChange={changeInput} ref={inputUser}>
                <option>Pacient</option>
                <option>Farmacist</option>
              </select>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-dark mb-3 "
                id="btnLogin"
                onClick={addUser}
              >
                Submit
              </button>
            </div>
            <div class="text-center">
              <span class="me-3">
                <i>Already registered?</i>
              </span>
              <a href="/login">Press here to login.</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
