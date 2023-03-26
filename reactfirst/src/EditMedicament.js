import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function EditMedicament() {
  const [med, setmed] = useState({
    Nume: "",
    Gramaj: "",
    Stoc: "",
    Forma_pastila: "",
    Descriere: "",
    lot: "",
    expDate: "",
  });

  const [succes, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const { name } = useParams();

  function getMedDetails() {
    console.log("aaaaaaaaaaaaaaaa:"+name)
    axios
      .get("http://localhost:5000/api//medicaments/" + name)
      .then((response) => {
        setmed(response.data[0]);
      });
  }

  useEffect(() => {
    getMedDetails();
    const timeId = setTimeout(() => {
      setSuccess(false);
      setMessage("");
      setError(false)
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [succes,error]);
  const addedMed = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/medicaments", {
        Nume: med.nameMed,
        Gramaj: med.weight,
        Stoc: med.stock,
        Forma_pastila: med.pillForm,
        Descriere: med.description,
        Lot: med.lot,
        Data_expirare: med.expDate,
      })
      .then((response) => {
        // setMessage(response.data.message);
        if (response.status == 201) {
          setSuccess(true);
          setMessage(response.data.message);
          setError(false)
        } else {
          setSuccess(false);
          setMessage(response.data.message);
          setError(true)
        }
      });
  };

  const changeMed = (e) => {
    setmed({
      ...med,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="mainAddMedicament">
        <div class="container d-flex align-items-center justify-content-center  pt-5">
          <form>
            <div class="row">
              <h1 class="text-center mt-2 mb-4">Medicament Information</h1>
              <div class="col-sm-6 ">
                <div class="mb-3 mt-3">
                  <label for="Nume" class="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="nameMedicament"
                    placeholder="Enter name"
                    name="Nume"
                    defaultValue={med.Nume}
                    onChange={changeMed}
                  />
                </div>
                <div class="mb-3 mt-3">
                  <label for="weight" class="form-label">
                    Weight:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="weightMedicament"
                    placeholder="Enter weight"
                    name="Gramaj"
                    defaultValue={med.Gramaj}
                    onChange={changeMed}
                  />
                </div>
                <div class="mb-4 ">
                  <label for="stock" class="form-label">
                    Stock:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="userPassProfile"
                    placeholder="Enter stock"
                    name="Stoc"
                    defaultValue={med.Stoc}
                    onChange={changeMed}
                  />
                </div>
                <div class="mb-3 mt-3">
                  <label for="expDate" class="form-label">
                    Expiration date:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="expDateMedicament"
                    placeholder="Enter expiration date"
                    name="Data_expirare"
                    defaultValue={med.Data_expirare}
                    onChange={changeMed}
                  />
                </div>
              </div>
              <div class="col-sm-6 ">
                <div class="mb-3 mt-3">
                  <label for="pillForm" class="form-label">
                    Pill form:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="pillFormMedicament"
                    placeholder="Enter pill form"
                    name="Forma_pastila"
                    defaultValue={med.Forma_pastila}
                    onChange={changeMed}
                  />
                </div>
                <div class="mb-3 mt-3">
                  <label for="description" class="form-label">
                    Description:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="descriptionMedicament"
                    placeholder="Enter description"
                    name="Descriere"
                    defaultValue={med.Descriere}
                    onChange={changeMed}
                  />
                </div>
                <div class="mb-3 mt-3">
                  <label for="lot" class="form-label">
                    Lot:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lotMedicament"
                    placeholder="Enter lot"
                    name="lot"
                    defaultValue={med.lot}
                    onChange={changeMed}
                  />
                </div>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-dark mb-3 "
                  id="btnEdit"
                  onClick={addedMed}
                >
                  Edit Medicament
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {succes && (
        <div className="alert alert-success text-center">
          <strong>{message}</strong>
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center">
          <strong>{message}</strong>
        </div>
      )}
    </div>
  );
}

export default EditMedicament;
