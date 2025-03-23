"use client";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/images/hero.png)" }}
    >
      {/* 어두운 오버레이 배경 */}
      <div className="absolute inset-0 " />

      {/* 콘텐츠 박스 */}
      <div className="relative z-10 text-center text-[#222]">
        {/* 메인 문장 */}
        <p className="text-4xl md:text-5xl font-light tracking-wide mb-2">
          {/* "명쾌한"에 점 세 개 붙이기 */}
          <span className="relative inline-block">
            {/* 점 세 개 */}
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 flex space-x-7 ">
              <span className="w-2 h-2 bg-[#222] rounded-full inline-block " />
              <span className="w-2 h-2 bg-[#222] rounded-full inline-block" />
              <span className="w-2 h-2 bg-[#222] rounded-full inline-block" />
            </span>
            명쾌한
          </span>{" "}
          전문가 상담
        </p>

        {/* 브랜드 타이틀 */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#222]">
          루시드 eXpert
        </h1>

        {/* 버튼 */}
        <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-sm font-semibold rounded-md transition">
          무료로 시작하기
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
