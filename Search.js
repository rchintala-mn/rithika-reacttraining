// import { error } from "console";
import { useEffect, useState } from "react";
import { Card, Space } from "antd";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

export default function Search() {
  var [query, setQuery] = useSearchParams();
  var [matchcake, setMatchCake] = useState([]);
  var name = query.get("q");
  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/searchcakes?q=" + name,
      method: "get",
    }).then(
      (response) => {
        setMatchCake(response.data.data);
      },
      (error) => {
        console.log("No cake data found", error);
      }
    );
  }, [matchcake]);

  var temp;
  if (matchcake.length > 0) {
    temp = matchcake.map((each) => {
      return (
        <>
          <Space direction="horizontal">
            <Card>
              <Link to={"/detailCard/" + each.cakeid}>
                <img src={each.image} style={{ height: 300, width: 300 }} />
              </Link>
              <p>Name : {each.name}</p>
              <p>Price : {each.price}</p>
            </Card>
          </Space>
        </>
      );
    });
  }
  return (
    <>
      {/* <h1>Search Results for {temp}</h1> */}
      {temp}
    </>
  );
}
