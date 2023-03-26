import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Layout from "./Layout";
import Address from "./Address";
import Medicament from "./Medicament";
import AddMedicament from "./AddMedicament";
import Command from "./Command";
import Pacients from "./Pacients"
import OrderList from "./OrderList";
import EditMedicament from "./EditMedicament";
import EditPacient from "./EditPacient";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/address" element={<Address/>}/>
          <Route path="/medicament" element={<Medicament/>}/>
          <Route path='/addMedicament' element={<AddMedicament/>}/>
          <Route path='/command' element={<Command/>}/>
          <Route path="/pacients" element={<Pacients/>}/>
          <Route path="/orderList" element={<OrderList/>}/>
          <Route path="/editMedicament/:name" element={<EditMedicament/>}/>
          <Route path="/editPacient/:emailUser" element={<EditPacient />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
