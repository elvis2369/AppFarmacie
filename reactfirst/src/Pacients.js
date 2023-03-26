import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
function Pacients() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  function getUsersDetails() {
    axios.get("http://localhost:5000/api/users").then((response) => {
      setUsers(response.data);
    });
  }
  useEffect(() => {
    getUsersDetails();
  }, []);

  function goToUser(medName) {
    axios.get("http://localhost:5000/api/users/" + medName).then((response) => {
      console.log(medName);
      navigate("/editPacient/" + medName);
    });
  }

  function getUserSearch() {
    var email = inputRef.current.value;
    console.log(email);
    if (email === "" || email === null) {
      getUsersDetails();
    } else {
      axios.get("http://localhost:5000/api/users/" + email).then((response) => {
        setUsers(response.data);
        email=''
      });
    }
  }

  function deleteUser(emailAddress) {
    axios
      .delete("http://localhost:5000/api/users", {
        data: { Email: emailAddress },
      })
      .then((response) => {
        setUsers((element) =>
          element.filter((user) => user.Email !== emailAddress)
        );
      });
  }
  return (
    <div>
      <div>
        <input
          type="text"
          id="pacientSearch"
          placeholder="Search pacient "
          ref={inputRef}
        />
        <button type="button" class="btn btn-success" onClick={getUserSearch}>
          Search
        </button>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>CNP</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.Nume}</td>
                  <td>{user.Prenume}</td>
                  <td>{user.CNP}</td>
                  <td>{user.Email}</td>
                  <td>
                    <button
                      type="button"
                      class="btn"
                      onClick={() => deleteUser(user.Email)}
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn "
                      onClick={() => goToUser(user.Email)}
                    >
                      <i class="fa fa-edit"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pacients;
