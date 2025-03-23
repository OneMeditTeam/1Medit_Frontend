"use client";

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] text-gray-700 text-sm px-6 py-10">
      <div className=" mx-auto space-y-6">
        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-1">Contact</h4>
          <ul className="space-y-1 list-disc list-inside">
            <li>카카오 플러스친구 ‘루시드익스퍼트’ 채널 추가 후 채팅상담</li>
            <li>이메일: 1medit.help@gmail.com</li>
          </ul>
        </div>

        {/* 회사 정보 */}
        <div>
          <h4 className="font-semibold mb-1">(주)원메딧</h4>
          <ul className="space-y-1 list-disc list-inside">
            <li>대표이사: 최윤석</li>
            <li>사업자번호: 384-88-02883</li>
            <li>통신판매업신고: 제2024-김포사-1294호</li>
          </ul>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 pt-4">
          Copyright © 루시드 eXpert all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
