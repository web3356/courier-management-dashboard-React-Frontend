import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <nav>
        <Link to="/dashboard/home">Home</Link>

        <Link to="/dashboard/shipment">Shipment</Link>

        <Link to="/dashboard/track">Track</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Dashboard;