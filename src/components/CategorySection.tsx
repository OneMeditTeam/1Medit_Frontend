"use client";

import Image from "next/image";

const CategorySection = () => {
  return (
    <section className="py-10 px-10 bg-white">
      {/* 제목 */}
      <div className="mx-auto mb-10">
        <h4 className="text-lg text-gray-500 mb-1">비대면 상담</h4>
        <h3 className="text-4xl font-bold text-gray-900 leading-tight">
          상담 목적에 맞는 <br />
          맞춤 전문가를 찾아보세요
        </h3>
      </div>

      {/* 첫 번째 블록 - 카테고리 소개 */}
      <div className="bg-blue-50 rounded-xl shadow-sm mx-auto mb-10 p-6 relative">
        {/* ✅ Overlap 이미지 (절대 위치로 상단 겹치기) */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 z-10">
          <Image
            src="/images/category-overlap-icons.png" // ← 업로드한 이미지 이름
            alt="카테고리 아이콘 오버랩"
            width={600}
            height={300}
            className="w-full h-20"
          />
        </div>

        {/* 메인 이미지 */}
        <Image
          src="/images/category-steps.png"
          alt="상담 절차"
          width={400}
          height={300}
          className="w-full max-w-xs mx-auto rounded-lg mb-6 h-auto relative z-0"
        />

        <div className="bg-blue-600 text-white p-5 rounded-lg text-base font-medium">
          세분화된 상담 카테고리 <br />
          <span className="text-sm font-normal">
            의사, 노무사, 손해사정사, 변호사 등 세분화된 카테고리를 통해 나에게
            맞는 전문가를 찾아보세요.
          </span>
        </div>
      </div>

      {/* 두 번째 블록 - 맞춤 상담사 필터 */}
      <div className="bg-blue-50 rounded-xl shadow-sm mx-auto p-6">
        <Image
          src="/images/category-filter.png"
          alt="맞춤 필터"
          width={300}
          height={300}
          className="w-full max-w-xs mx-auto rounded-lg mb-6 h-auto"
        />
        <div className="bg-blue-600 text-white p-5 rounded-lg text-base font-medium">
          맞춤 상담사 찾기 필터 <br />
          <span className="text-sm font-normal">
            다양한 필터링으로 한번에 설정하여 자신에게 맞는 전문가를 찾습니다.
          </span>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
