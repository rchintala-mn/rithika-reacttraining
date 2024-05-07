import Cake from "./Cake";
import { Link } from "react-router-dom/dist";
import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Spin } from "antd";
export default function AxioCakeList() {
  var [cakes, setCakes] = useState();
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    var timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    getCakeList();
  }, []);

  function getCakeList() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/allcakes",
      method: "get",
    }).then(
      (response) => {
        setCakes(response.data.data); //updating the state
        console.log("response coming from all cakes api ", response.data.data);
      },
      (error) => {
        console.log("error from all cakes api", error);
      }
    );
  }

  return (
    <>
      <Spin spinning={loading} size={10} />
      <div style={{ display: loading ? "none" : "block" }}></div>
      <Row>
        {cakes?.map((each, index) => {
          return <Cake data={each} key={index} />;
        })}
      </Row>
    </>
  );
}
