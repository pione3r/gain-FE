import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSlider from "@/components/hero-slider";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="relative">
          <HeroSlider />
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
                <div className="inline-block bg-orange-500 text-white px-8 py-2 rounded-full mb-4">
                  Why GAIN?
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">왜 GAIN인가요?</h2>
                <h3 className="text-xl md:text-2xl mb-4">
                  해외에서 먼저 경험한 선배들과의 1:1 멘토링
                </h3>
                <p className="text-gray-600 mb-6">
                  유학과 취업, 어디서부터 시작해야 할지 막막하신가요?
                  <br />
                  GAIN은 실제로 해외에서 공부하고 일하고 있는 다양한 분야 현직자와의
                  <br />
                  1:1로 연결해주는 멘토링 플랫폼입니다.
                </p>
                <p className="text-gray-600 mb-6">
                  직접 겪은 경험자만이 알려줄 수 있는 현실적인 조언과
                  <br />
                  현지에서의 삶과 문화에 대한 솔직한 이야기를 들어보세요.
                </p>
              </div>
              <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative">
                <Image
                  src="/login-image.png"
                  alt="GAIN 멘토링"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative mt-10 md:mt-0">
                <Image
                  src="/landing-2.png"
                  alt="멘토링 세션"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">이런 분께 추천해요</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-[#1270E1] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">유학·취업 준비생</h3>
                      <p className="text-gray-600">
                        방향을 찾고 실질적인 준비 방법을 알고 싶은 분들에게 적합합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-[#1270E1] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">포트폴리오 피드백</h3>
                      <p className="text-gray-600">
                        현직자의 시선에서 포트폴리오를 검토받고 개선점을 찾고 싶은 분들.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-[#1270E1] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">해외 생활 정보</h3>
                      <p className="text-gray-600">
                        현지 생활, 문화, 학교 생활에 대한 솔직한 이야기가 필요한 분들.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-[#1270E1] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">진로 상담</h3>
                      <p className="text-gray-600">
                        전공 선택부터 커리어 방향까지 함께 고민하고 싶은 분들.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              3단계로 쉽고 빠르게 찾으세요
            </h2>
            <p className="text-center text-gray-600 mb-12">
              AI 맞춤형 분석을 통해 나에게 꼭 맞는 멘토를 추천해 드립니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Image src="/process-1.png" alt="간단한 설문 작성" width={80} height={80} />
                </div>
                <h3 className="font-bold mb-2">간단한 설문 작성</h3>
                <p className="text-sm text-gray-600">
                  관심 분야, 유학·취업 목표, 국가 등 <br />몇 가지 질문에 답해주세요.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Image src="/process-2.png" alt="AI 맞춤 추천" width={80} height={80} />
                </div>
                <h3 className="font-bold mb-2">AI 맞춤 추천</h3>
                <p className="text-sm text-gray-600">
                  입력한 정보를 바탕으로 딱 맞는 멘토 3명을 추천해드려요.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Image src="/process-3.png" alt="편리하게 일정잡기" width={80} height={80} />
                </div>
                <h3 className="font-bold mb-2">편리하게 일정잡기</h3>
                <p className="text-sm text-gray-600">
                  원하는 날짜와 시간에 맞춰 1:1 멘토링을 예약하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 스폰서 섹션 */}
        <section className="py-16 bg-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">스폰서</h2>
            <div className="flex flex-wrap justify-center gap-10 mt-8">
              {[1, 2, 3, 4].map((sponsor) => (
                <div
                  key={sponsor}
                  className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <Image
                    src={`/sponsor-${sponsor}.png`}
                    alt={`스폰서 ${sponsor}`}
                    width={120}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 통계 섹션 */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              전 세계에서 함께 성장하는 GAIN 멘토링 네트워크
            </h2>
            <p className="text-center mb-12">
              GAIN은 전 세계 유명 학교 졸업생들과 현직자를 연결하는
              <br />
              글로벌 아트·디자인 멘토링 플랫폼입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
              <div className="text-center">
                <Image
                  src="/icon-satisfaction.png"
                  alt="만족도"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <div className="text-4xl font-bold mb-2">97%</div>
                <p className="text-gray-400">만족도</p>
              </div>

              <div className="text-center">
                <Image
                  src="/icon-mentors.png"
                  alt="활동 멘토"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-gray-400">활동 멘토</p>
              </div>

              <div className="text-center">
                <Image
                  src="/icon-countries.png"
                  alt="국가 수"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <div className="text-4xl font-bold mb-2">20+</div>
                <p className="text-gray-400">국가 수</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
