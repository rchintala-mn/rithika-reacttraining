import { Button, Input, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
//import { SearchOutlined } from "@antd-design/icons";
function Navbar() {
  var searchtext;
  var navigate = useNavigate();
  function Search() {
    console.log("uiser searching ", searchtext);
    var url = "/search?q=" + searchtext;
    navigate(url);
  }
  function handleSearch(e) {
    searchtext = e.target.value;
  }
  const items = [
    {
      label: <Link to="/">Home</Link>,
    },

    {
      label: <Link to="/cakes">Cakes</Link>,
    },
    { label: "Bouquets" },

    {
      label: <Link to="/signup">Signup</Link>,
    },
    {
      label: (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      ),
    },

    {
      label: (
        <Link to="/tables">
          <Button>Table</Button>
        </Link>
      ),
    },
    {
      label: (
        <>
          <Input placeholder="search" onChange={handleSearch}></Input>,
          <Button onClick={Search}>Search</Button>
        </>
      ),
    },
  ];
  return (
    <div>
      <Menu
        style={{ backgroundColor: "burlywood" }}
        mode="horizontal"
        items={items}
      />
    </div>
  );
}
export default Navbar;
