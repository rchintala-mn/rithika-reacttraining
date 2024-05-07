import { Card, Image, Space } from "antd";
import { useNavigate, Link } from "react-router-dom";

function Cake(props) {
  var data = {
    name: props.data.name,
    price: props.data.price,
    image: props.data.image,
    cakeid: props.data.cakeid,
  };

  return (
    <Space direction="horizontal" size={16}>
      <Card hoverable style={{ width: 300 }}>
        <Link to={"/detailCard/" + data.cakeid}>
          <Image preview={true} src={data.image} width={300}></Image>
        </Link>
        <p>{data.name}</p>
        <p>{data.price}</p>
      </Card>
    </Space>
  );
}
export default Cake;
