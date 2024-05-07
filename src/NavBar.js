import { Menu } from "antd";
import { Link } from "react-router-dom";
function Navbar() {
  const items = [
    {
      label: <Link to="/">Home</Link>,
    },
    {
      label: <Link to="/cakes">Cakes</Link>,
    },
    { label: "Chocolates" },
    { label: "Bouquets" },
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
