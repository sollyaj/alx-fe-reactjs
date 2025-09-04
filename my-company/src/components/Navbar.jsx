import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        color: "white",
        width: "100%",
      }}
    >
      <h1 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>My Website</h1>
      <div>
        <Link to="/" style={{ marginLeft: "20px", color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginLeft: "20px", color: "white", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/services" style={{ marginLeft: "20px", color: "white", textDecoration: "none" }}>
          Services
        </Link>
        <Link to="/contact" style={{ marginLeft: "20px", color: "white", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
