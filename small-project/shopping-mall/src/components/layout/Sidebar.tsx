import React, { useState } from "react";

export default function Sidebar() {
  const [showSubmenu, setShowSubmenu] = useState(true);

  const toggleSubmenu = () => setShowSubmenu((prev) => !prev);

  return (
    <aside className="w-48 min-h-screen p-4 bg-gray-100">
      <nav className="space-y-2">
        <div className="text-lg font-bold">메뉴</div>

        <div>
          <a href="/"> 홈</a>
        </div>
        <div>
          <a href="/cart"> 장바구니</a>
        </div>

        <div
          className="mt-4 font-semibold cursor-pointer"
          onClick={toggleSubmenu}>
          상품 {showSubmenu ? "▾" : "▸"}
        </div>

        {showSubmenu && (
          <ul className="ml-4 space-y-1">
            <li>
              <a href="#"> 과일</a>
            </li>
            <li>
              <a href="#"> 음료</a>
            </li>
            <li>
              <a href="#"> 간식</a>
            </li>
          </ul>
        )}
      </nav>
    </aside>
  );
}
