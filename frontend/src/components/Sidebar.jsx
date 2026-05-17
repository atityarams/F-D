import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div
            style={{
                width: "250px",
                height: "100vh",
                backgroundColor: "#333",
                color: "white",
                padding: "20px"
            }}
        >

            <h2>Admin Panel</h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "30px"
                }}
            >

                <Link to="/admin" style={linkStyle}>
                    Dashboard
                </Link>

                <Link to="/admin/add-product" style={linkStyle}>
                    Add Product
                </Link>

                <Link to="/admin/manage-products" style={linkStyle}>
                    Manage Products
                </Link>

                <Link to="/admin/orders" style={linkStyle}>
                    Orders
                </Link>

            </div>

        </div>

    );

}

const linkStyle = {
    color: "white",
    textDecoration: "none"
};

export default Sidebar;