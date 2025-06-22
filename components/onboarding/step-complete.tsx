'use client'

import { useOnBoardingContext } from '@/lib/store/onboarding'

export default function StepComplete() {
  const { onboardingForm, goToStep } = useOnBoardingContext()

  const { selectedUserTemplate, selectedSubDomains, selectedCountry } = onboardingForm

  return (
    <div className="mt-[60px] flex flex-col px-[99px]">
      <div className="flex flex-col items-center">
        <div className="text-[30px] leading-[140%] font-medium tracking-[-0.025em]">프로필 작성을 완료했습니다.</div>

        <div className="mt-[50px] flex flex-col gap-[70px] rounded-[12px] border border-[#D9D9D9] px-[66px] py-[88px]">
          <div className="text-center text-[20px] leading-[140%] tracking-[-0.025em]">홍길동 멘토님의 간편 프로필</div>

          <div className="inline-flex flex-col text-[20px] leading-[140%] tracking-[-0.025em] whitespace-pre-wrap">
            <span>
              홍길동 님은 GAIN 에{' '}
              <span className="text-[#FF7A59]">{selectedUserTemplate.type === 'mentor' ? '멘토' : '멘티'}</span>로
              등록했습니다.
            </span>
            <span>
              관심 분야는 <span className="text-[#FF7A59]">{selectedSubDomains.join(', ')}</span> 입니다.
            </span>{' '}
            <span>
              활동 국가는 <span className="text-[#FF7A59]">{selectedCountry.name}</span> 입니다.
            </span>{' '}
            <br />
            <span>변경사항이 없다면 멘토링을 시작해주세요.</span>
          </div>
        </div>
      </div>

      <div className="mt-[50px] grid w-full grid-cols-1 gap-[30px] md:grid-cols-2">
        <button type="button" className="flex-1" onClick={() => goToStep(3)}>
          <div className="flex items-center justify-center rounded-[12.96px] bg-[#D9D9D9] py-[13px]">
            <div className="text-[16px] leading-[140%] font-semibold tracking-[-0.025em]">다시 입력하기</div>
          </div>
        </button>

        <button
          type="button"
          className="flex-1"
          onClick={() => {
            alert('상세 프로필로 이동합니다.')

            setTimeout(() => alert('뻥이야'), 1000)
          }}
        >
          <div className="flex items-center justify-center rounded-[12.96px] bg-[#FF7A59] py-[13px]">
            <div className="text-[16px] leading-[140%] font-semibold tracking-[-0.025em] text-white">
              상세 프로필 작성하기
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
