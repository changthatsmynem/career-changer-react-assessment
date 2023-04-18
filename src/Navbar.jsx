const Navbar = () => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>
        <a href={"/"} style={{ textDecoration: "none" }}>
          Home
        </a>
      </li>
      <li>
        <a href={"/owner"} style={{ textDecoration: "none" }}>
          Owner
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
