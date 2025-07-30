import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-48 min-h-screen p-4 bg-gray-100">
      <nav className="space-y-2">
        <div className="text-lg font-bold">메뉴</div>

        <div>
          <Link to="/" className="block hover:underline">
            홈
          </Link>
        </div>
        <div>
          <Link to="/cart" className="block hover:underline">
            장바구니
          </Link>
        </div>

        <details className="mt-4">
          <summary className="font-semibold cursor-pointer">상품</summary>
          <ul className="mt-1 ml-4 space-y-1">
            <li>
              <Link to="/category/fruit" className="block hover:underline">
                과일
              </Link>
            </li>
            <li>
              <Link to="/category/drink" className="block hover:underline">
                음료
              </Link>
            </li>
            <li>
              <Link to="/category/snack" className="block hover:underline">
                간식
              </Link>
            </li>
          </ul>
        </details>
      </nav>
    </aside>
  );
}
