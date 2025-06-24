import Image from 'next/image'
import HeroSlider from '@/components/hero-slider'
import { CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="relative">
        <HeroSlider />
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-10 w-full pr-0 md:mb-0 md:w-1/2 md:pr-12">
              <div className="mb-4 inline-block rounded-full bg-orange-500 px-8 py-2 text-white">Why GAIN?</div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">왜 GAIN인가요?</h2>
              <h3 className="mb-4 text-xl md:text-2xl">해외에서 먼저 경험한 선배들과의 1:1 멘토링</h3>
              <p className="mb-6 text-gray-600">
                유학과 취업, 어디서부터 시작해야 할지 막막하신가요?
                <br />
                GAIN은 실제로 해외에서 공부하고 일하고 있는 다양한 분야 현직자와의
                <br />
                1:1로 연결해주는 멘토링 플랫폼입니다.
              </p>
              <p className="mb-6 text-gray-600">
                직접 겪은 경험자만이 알려줄 수 있는 현실적인 조언과
                <br />
                현지에서의 삶과 문화에 대한 솔직한 이야기를 들어보세요.
              </p>
            </div>
            <div className="relative h-[400px] w-full md:h-[500px] md:w-1/2">
              <Image src="/login-image.png" alt="GAIN 멘토링" fill className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse items-center md:flex-row">
            <div className="relative mt-10 h-[400px] w-full md:mt-0 md:h-[500px] md:w-1/2">
              <Image src="/landing-2.png" alt="멘토링 세션" fill className="rounded-lg object-cover" />
            </div>
            <div className="w-full pl-0 md:w-1/2 md:pl-12">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">이런 분께 추천해요</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="mt-1 flex-shrink-0 text-[#1270E1]" />
                  <div>
                    <h3 className="text-lg font-medium">유학·취업 준비생</h3>
                    <p className="text-gray-600">방향을 찾고 실질적인 준비 방법을 알고 싶은 분들에게 적합합니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="mt-1 flex-shrink-0 text-[#1270E1]" />
                  <div>
                    <h3 className="text-lg font-medium">포트폴리오 피드백</h3>
                    <p className="text-gray-600">현직자의 시선에서 포트폴리오를 검토받고 개선점을 찾고 싶은 분들.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="mt-1 flex-shrink-0 text-[#1270E1]" />
                  <div>
                    <h3 className="text-lg font-medium">해외 생활 정보</h3>
                    <p className="text-gray-600">현지 생활, 문화, 학교 생활에 대한 솔직한 이야기가 필요한 분들.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="mt-1 flex-shrink-0 text-[#1270E1]" />
                  <div>
                    <h3 className="text-lg font-medium">진로 상담</h3>
                    <p className="text-gray-600">전공 선택부터 커리어 방향까지 함께 고민하고 싶은 분들.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">3단계로 쉽고 빠르게 찾으세요</h2>
          <p className="mb-12 text-center text-gray-600">
            AI 맞춤형 분석을 통해 나에게 꼭 맞는 멘토를 추천해 드립니다.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/landing-process-1.png" alt="간단한 설문 작성" width={80} height={80} />
              </div>
              <h3 className="mb-2 font-bold">간단한 설문 작성</h3>
              <p className="text-sm text-gray-600">
                관심 분야, 유학·취업 목표, 국가 등 <br />몇 가지 질문에 답해주세요.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/landing-process-2.png" alt="AI 맞춤 추천" width={80} height={80} />
              </div>
              <h3 className="mb-2 font-bold">AI 맞춤 추천</h3>
              <p className="text-sm text-gray-600">입력한 정보를 바탕으로 딱 맞는 멘토 3명을 추천해드려요.</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <Image src="/landing-process-3.png" alt="편리하게 일정잡기" width={80} height={80} />
              </div>
              <h3 className="mb-2 font-bold">편리하게 일정잡기</h3>
              <p className="text-sm text-gray-600">원하는 날짜와 시간에 맞춰 1:1 멘토링을 예약하세요.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
