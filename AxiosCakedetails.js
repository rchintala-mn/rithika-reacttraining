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
  return (
    // Style="text-align:center;"
    <div>
      <img
        preview={true}
        src={cakedetails.image}
        width={500}
        style={{ float: "left", marginRight: "10px" }}
      />
      <li>Name : {cakedetails.name}</li>
      <br />
      <li>Price : {cakedetails.price}</li>
      <br />

      <Button style={{ float: "center", marginRight: "10px" }}>
        Add to Cart
      </Button>
    </div>
  );
}
