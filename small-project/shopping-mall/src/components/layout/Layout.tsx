import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; // 중요!

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet /> {/* 여기에서 Route의 element가 보여짐 */}
        </main>
      </div>
    </div>
  );
}
