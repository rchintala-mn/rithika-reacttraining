import { Image, Button } from "antd";

import { useLocation } from "react-router-dom";
function Details() {
  const location = useLocation();

  const { data } = location.state || {}; // Destructure data from location.state or default to an empty object
  //   console.log(data);
  //   const home = () => {
  //     navigate("/cakes");
  //   };
  return (
    <>
      <div Style="text-align:center;">
        <Image
          preview={true}
          src={data.image}
          width={300}
          style={{ float: "left", marginRight: "10px" }}
        />
        <p>Name : {data.name}</p>
        <p>Price : {data.price}</p>
        <p>Description : {data.description}</p>

        <Button style={{ float: "center", marginRight: "10px" }}>
          Add to Cart
        </Button>
      </div>
    </>
  );
}
export default Details;
