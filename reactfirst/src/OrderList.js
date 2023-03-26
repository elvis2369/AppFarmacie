import axios from "axios";
import { useEffect, useState } from "react";
import { Validator } from "react";
function OrderList() {
  const [order, setOrder] = useState([]);
  function getOrders() {
    axios.get("http://localhost:5000/api/orders").then((response) => {
      setOrder(response.data);
    });
  }
  useEffect(() => {
    getOrders();
  });
  return (
    <div>
      <div>
        <h1>Order List</h1>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Order Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {order.map((element) => {
              return (
                <tr>
                  <td>{element.Nume}</td>
                  <td>{element.Data_comanda}</td>
                  <td>
                    <button type="button" class="btn">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                  <td><button type="button" class="btn">
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

export default OrderList;
