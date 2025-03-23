"use client";

const ServiceIntro = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url(/images/service-bg.png)" }}
    >
      {/* 반투명 콘텐츠 박스 */}
      <div className="backdrop-blur-sm p-8 rounded-xl text-center max-w-2xl">
        {/* 상단 로고 */}
        <img
          src="/images/lucid-icon.png"
          alt="Lucid Logo"
          className="mx-auto mb-6 w-12 h-12"
        />

        {/* 설명 문구 */}
        <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
          전문가 상담 후, AI 분석을 통해
          <br />
          개인 맞춤 전문가를 안내하는
          <br />
          맞춤형 올인원 문제해결 서비스
        </p>
      </div>
    </section>
  );
};

export default ServiceIntro;
