import { Outlet } from "react-router-dom";

export default function UserPage() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}