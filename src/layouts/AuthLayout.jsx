import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="max-w-md mx-auto">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
