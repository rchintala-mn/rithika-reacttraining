import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Button } from "antd";

export default function AxiosCakedetails() {
  var params = useParams();
  var cakeid = params.cakeid;
  console.log("cake id = ", cakeid);
  var [cakedetails, setCakedetails] = useState({});

  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cake/" + cakeid,
      method: "get",
    }).then(
      (response) => {
        console.log("dake = ", response.data.data);
        setCakedetails(response.data.data);
      },
      (error) => {
        console.log("NO response error: ", error);
      }
    );
  }, []);
  console.log("cake details = ", cakedetails);
    function addToCart() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
      method: "post",
      data: {
        cakeid: cakedetails.cakeid,
        name: cakedetails.name,
        price: cakedetails.price,
        image: cakedetails.image,
        weight: cakedetails.weight,
      },
      headers: {
        Authorization: localStorage.token,
      },
    }).then(
      (response) => {
        console.log("add to cart response:", response);
        setCakedetails(response.data.data); //after response ,pass it to setCakedetails to view in Checkout
        alert("Cake is added to Cart");
        navigate("/detailCard/" + cakeid);
      },
      (error) => {
        console.log("Error from API: ", error);
        alert("Error Cake is not added");
      }
    );
  }
  return (
    // Style="text-align:center;"
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "20px" }}>
        <Image preview={true} src={cakedetails.image} width={500} />
      </div>

      <div>
        <ul>
          <li>Name : {cakedetails.name}</li>
          <li>Price : {cakedetails.price}</li>
          <li>Rating : {cakedetails.ratings}</li>
          <li>Description : {cakedetails.description}</li>

          <Button type="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        </ul>
      </div>
    </div>
  );
}
