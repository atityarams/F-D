import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function AdminLayout() {

    return (

        <div style={{ display: "flex" }}>

            <Sidebar />

            <main style={{ padding: "20px", width: "100%" }}>
                <Outlet />
            </main>

        </div>

    );

}

export default AdminLayout;