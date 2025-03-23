"use client";

import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 10px 이상이면 효과 적용
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* 왼쪽 로고 */}
      <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="Lucid Logo" className="h-10" />
      </div>

      {/* 오른쪽 메뉴 */}
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium text-gray-700 hover:underline">
          회원탈퇴
        </button>
        <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800">
          시작하기
        </button>
      </div>
    </header>
  );
};

export default Header;
