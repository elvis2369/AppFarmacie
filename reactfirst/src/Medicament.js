import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Medicament() {
  const [meds, setMeds] = useState([]);
  const navigheaza = useNavigate();

  function getMedsDetails() {
    axios.get("http://localhost:5000/api/medicaments").then((response) => {
      setMeds(response.data);
    });
  }
  useEffect(() => {
    getMedsDetails();
  }, []);

  function goToMed(medName){
    axios.get("http://localhost:5000/api/medicaments/"+medName).then((response)=>{
      console.log(medName)
      navigheaza('/editMedicament/'+medName)
    })
  }

  function deleteMed(numeMed) {
    axios
      .delete("http://localhost:5000/api/medicaments", {
        data: { Nume: numeMed },
      })
      .then((response) => {
        setMeds((element) => element.filter((meds) => meds.Nume !== numeMed));
      });
  }
  return (
    <div>
      <div>
        <input type="text" id="countryFilter" placeholder="Medicament " />
        <button type="button" class="btn btn-success">
          Search
        </button>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight</th>
              <th>Stock</th>
              <th>Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {meds.map((meds) => {
              console.log(meds);
              return (
                <tr>
                  <td>{meds.Nume}</td>
                  <td>{meds.Gramaj}</td>
                  <td>{meds.Stoc}</td>
                  <td>{meds.Data_expirare}</td>
                  <td>
                    <button
                      type="button"
                      class="btn"
                      onClick={() => deleteMed(meds.Nume)}
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                  <td><button
                      type="button"
                      class="btn"
                      onClick={()=>goToMed(meds.Nume)}
                    >
                      <i class="fa fa-edit"></i>
                    </button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Medicament;
