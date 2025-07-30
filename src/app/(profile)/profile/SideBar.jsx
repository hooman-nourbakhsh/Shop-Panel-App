"use client";
import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      <ul className="flex flex-col space-y-8">
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="/profile/me">اطلاعات کاربری</Link>
        </li>
      </ul>
    </div>
  );
}
