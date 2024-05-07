import { Image } from "antd";
function Home() {
  return (
    <>
      <h1>Welcome to Cake's Bakers</h1>

      <Image
        preview={false}
        src="poster.jpg"
        style={{
          width: "100%",
          height: "auto",
          float: "left",
          marginRight: "10px",
        }}
      />
    </>
  );
}
export default Home;
