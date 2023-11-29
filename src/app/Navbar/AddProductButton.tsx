"use client";

import Link from "next/link";


export default function AddProductButton() {
  function closeDropdown() {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  }

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator text-xl">
          +
          
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-40 bg-yellow-600 glass shadow"
      >
        <div className="card-body">
          
          <div className="card-actions">
            <Link
              href="/add-product"
              className="normal-case mx-auto"
              onClick={closeDropdown}
            >
              Add Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}