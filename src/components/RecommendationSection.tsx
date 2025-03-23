"use client";

import Image from "next/image";

const RecommendationSection = () => {
  return (
    <section className="py-10 px-10 bg-white">
      {/* 제목 */}
      <div className="mx-auto mb-10">
        <h4 className="text-lg text-gray-500 mb-1">추가 전문가 매칭</h4>
        <h3 className="text-4xl font-bold text-gray-900 leading-tight">
          상담 후, AI가 추천하는 <br />
          전문가를 추천받아보세요
        </h3>
      </div>

      {/* AI 추천 이미지 + 아이콘들 */}
      <div className="bg-blue-50 rounded-xl p-6 mb-6">
        <div className="flex flex-row md:flex-row justify-center items-center gap-4">
          {/* 왼쪽 아이콘 2개 */}
          <div className="flex flex-row gap-4">
            <Image
              src="/images/recommend-icon-left-1.png" // ← 업로드한 아이콘 리네이밍
              alt="아이콘1"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <Image
              src="/images/recommend-icon-left-2.png" // ← 업로드한 아이콘 리네이밍
              alt="아이콘2"
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>

          {/* AI 추천 이미지 */}
          <div className="mx-2">
            <Image
              src="/images/ai-recommend.png"
              alt="AI 추천 예시"
              width={400}
              height={600}
              className="w-full max-w-xs mx-auto rounded-lg h-auto"
            />
          </div>

          {/* 오른쪽 아이콘 2개 */}
          <div className="flex flex-row gap-4">
            <Image
              src="/images/recommend-icon-right-1.png"
              alt="아이콘3"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <Image
              src="/images/recommend-icon-right-2.png"
              alt="아이콘4"
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* 설명 텍스트 */}
        <div className="bg-blue-600 text-white p-4 mt-6 rounded-lg ">
          <h4 className="font-semibold text-base mb-1">
            상담 내용에 맞는 추가 전문가 매칭
          </h4>
          <p className="text-sm font-normal">
            최종 문제해결을 위해 추가적인 전문가를 광고형태로 노출하여
            연결합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
