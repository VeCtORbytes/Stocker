import React ,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";




const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allOrders").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  })

  return (
    <div className="orders">

      <div className="no-orders">

        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;