import { Link, Outlet } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <div className="product-header">
        <Link to="/product/iphone14">Iphone 14</Link>
        <Link to="/product/sam-sung-s20">Samsung Galaxy S20</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}