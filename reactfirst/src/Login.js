import './Login.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const changeInput = e =>{
        setCredentials({
            ...credentials,[e.target.name]:e.target.value
        })
    }
    const submitLogin = e =>{
        e.preventDefault()
        console.log(credentials)
        // axios.get("http://localhost:5000/api/users").then((response)=>{
        //   console.log(response.data);
        // })
        axios.post("http://localhost:5000/api/login",credentials).then(async (response)=>{
          if(response.status == 200){
            const user = await axios.get("http://localhost:5000/api/users/"+credentials.email)
            console.log(user.data[0])
            localStorage.setItem("userEmail",user.data[0].Email)
            localStorage.setItem("userType",user.data[0].Tip_user)
            localStorage.setItem("userID",user.data[0].Utilizator_ID)
            navigate("/medicament")
          }
        })
    }
  return (
    <div className="mainLogin" >
      <div class="container d-flex align-items-center justify-content-center pt-5">
        <div class="row">
          <div class="col-sm-12 px-5">
            <h1 class="text-center my-5">Login</h1>
            <form>
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
                  value={credentials.email}
                  onChange={changeInput}
                  required
                />
              </div>
              <div class="mb-4 ">
                <label for="pwd" class="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="userPass"
                  placeholder="Enter password"
                  name="password"
                  value={credentials.password}
                  onChange={changeInput}
                  required
                />
              </div>
              <div class="text-center">
                <button onClick={submitLogin} type="submit" class="btn btn-dark mb-3 " id="btnLogin">
                  Submit
                </button>
              </div>
            </form>
            <span class="me-3">
              <i>Don't have an account?</i>
            </span>
            <a href="/register">Press here to register.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
