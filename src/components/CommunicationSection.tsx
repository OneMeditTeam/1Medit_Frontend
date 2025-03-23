"use client";

import Image from "next/image";

const CommunicationSection = () => {
  return (
    <section className="py-10 px-10 bg-white">
      {/* 제목 */}
      <div className="mx-auto mb-10">
        <h4 className="text-lg text-gray-500 mb-1">편리한 사용성</h4>
        <h3 className="text-4xl font-bold text-gray-900 leading-tight">
          채팅, 전화, 영상을 통해 <br />
          편하게 상담을 받아보세요
        </h3>
      </div>

      {/* 채팅/전화 상담 블록 */}
      <div className="bg-blue-50 rounded-xl p-6 mb-6">
        <div className="w-full max-w-md mx-auto mb-4 rounded-lg overflow-hidden relative">
          {/* 오버랩 UI - 채팅 상단 */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <Image
              src="/images/chat-top-ui.png"
              alt="채팅 상단 UI"
              width={400}
              height={60}
              className="max-w-2xl h-auto"
            />
          </div>

          {/* 채팅 이미지 */}
          <Image
            src="/images/chat-example.png"
            alt="채팅 예시"
            width={400}
            height={600}
            className="w-full max-w-xs mx-auto rounded-lg mb-6 h-auto relative z-0"
          />
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <h4 className="font-semibold text-base mb-1">채팅과 전화 상담</h4>
          <p className="text-sm font-normal">
            전문가의 판단으로 명확한 상담을 위해 전화 상담을 병행할 수 있습니다.
          </p>
        </div>
      </div>

      {/* 영상 통화 상담 블록 */}
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="w-full max-w-md mx-auto mb-4 rounded-lg overflow-hidden relative">
          {/* 오버랩 UI - 영상 통화 하단 버튼 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <Image
              src="/images/video-controls-ui.png" // ← 업로드한 오버랩 UI 리네이밍
              alt="영상통화 컨트롤 버튼"
              width={400}
              height={80}
              className="max-w-2xl h-auto"
            />
          </div>

          {/* 영상 이미지 */}
          <Image
            src="/images/video-call-example.png"
            priority
            alt="영상 통화 예시"
            width={400}
            height={600}
            className="w-full max-w-xs mx-auto rounded-lg mb-6 h-auto relative z-0"
          />
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <h4 className="font-semibold text-base mb-1">영상 통화 상담</h4>
          <p className="text-sm font-normal">
            비대면 상담의 한계를 뛰어넘을 수 있는 영상 통화 상담버전을 준비
            중입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;
