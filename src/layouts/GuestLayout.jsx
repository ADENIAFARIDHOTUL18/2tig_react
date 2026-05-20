import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Outlet />
    </div>
  );
}