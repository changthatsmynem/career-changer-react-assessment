import Navbar from "./Navbar";
import image from "./assets/IMG_2380.jpg";

const Owner = () => {
  return (
    <>
      <Navbar />
      <hr />
      <h1 style={{ paddingBottom: "20px" }}>Chang - Group H - No.24</h1>
      <img src={image} alt="Chang Noi" />
      <p>
        Hi, I am Chang. I am a part of an iteration from the creator like any of
        us.
      </p>
    </>
  );
};

export default Owner;
