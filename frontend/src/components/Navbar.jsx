import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav
            style={{
                backgroundColor: "#222",
                color: "white",
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >

            <h2>Art Store</h2>

            <div style={{ display: "flex", gap: "20px" }}>

                <Link to="/" style={linkStyle}>Home</Link>

                <Link to="/products" style={linkStyle}>Products</Link>

                <Link to="/cart" style={linkStyle}>Cart</Link>

                <Link to="/login" style={linkStyle}>Login</Link>

                <Link to="/register" style={linkStyle}>Register</Link>

            </div>

        </nav>

    );

}

const linkStyle = {
    color: "white",
    textDecoration: "none"
};

export default Navbar;