import { Card, Spin, Space } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CheckOut() {
  var [cart, setCart] = useState([]);
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    var timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cakecart",
      method: "get",
      headers: {
        Authorization: localStorage.token,
      },
    }).then(
      (response) => {
        debugger;
        setCart(response.data.data);
        console.log("localstorage : ", localStorage.token);
        console.log("checkout cakes: ", cart);
        setLoading(false);
      },
      (error) => {
        console.log("Error in Cart", error);
      }
    );
  }, []);

  return (
    <>
      <Spin spinning={loading} size="medium" />
      <div style={{ display: loading ? "none" : "block" }} />
      {cart?.map((each) => {
        return (
          <Space direction="horizontal">
            <Card>
              <Link to={"/detail/" + each.cakeid}>
                <img src={each.image} style={{ height: 200, width: 200 }} />
              </Link>
              <li>Name : {each.name}</li>
              <li>Price : {each.price}</li>
            </Card>
          </Space>
        );
      })}
      {cart?.length === 0 && <div>Your cart is empty.</div>}
    </>
  );
}
export default CheckOut;
