import { Card, Image, Space } from "antd";
import { useNavigate } from "react-router-dom";

function Cake(props) {
  var data = {
    name: props.data.item,
    price: props.data.price,
    image: props.data.image,
    description: props.data.description,
  };

  var navigate = useNavigate();
  function handleDetailCard(e) {
    navigate("/detailCard", { state: { data: data } });
  }

  return (
    <Space direction="horizontal" size={16}>
      <Card.Grid hoverable style={{ width: 300 }}>
        <Image
          preview={true}
          src={data.image}
          width={300}
          onClick={handleDetailCard}
        ></Image>
        <p>{data.name}</p>
        <p>{data.price}</p>
        <p>{data.description}</p>
      </Card.Grid>
    </Space>
  );
}
export default Cake;
