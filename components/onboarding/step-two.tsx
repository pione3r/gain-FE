'use client'

import { useOnBoardingContext } from '@/lib/store/onboarding'
import { DOMAIN_LIST } from '@/constants/onboarding'

export default function StepTwo() {
  const { onboardingForm, setOnboardingForm, goToStep } = useOnBoardingContext()

  const { selectedDomain, selectedSubDomains } = onboardingForm

  return (
    <div className="mt-[40px] flex flex-col px-[99px]">
      <div className="flex flex-col items-center">
        <div className="text-[30px] leading-[140%] font-semibold tracking-[-0.025em]">관심 있는 분야를 선택하세요.</div>

        <div className="mt-[38px] grid grid-cols-1 gap-[30px] md:grid-cols-3">
          <div className="col-span-1 flex flex-col">
            {DOMAIN_LIST.map((domain) => {
              const { parentDomain } = domain

              return (
                <button
                  key={parentDomain}
                  type="button"
                  onClick={() => setOnboardingForm((prev) => ({ ...prev, selectedDomain: domain }))}
                >
                  <div
                    className={`${parentDomain === selectedDomain.parentDomain ? 'bg-[#FF7A59] text-white' : 'bg-white text-black'} flex h-[50px] w-[160px] items-center justify-center`}
                  >
                    <div className="text-[15px] leading-[140%] font-semibold tracking-[-0.025em]">{parentDomain}</div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="col-span-2 flex flex-wrap gap-x-[30px] gap-y-[10px] self-start">
            {selectedDomain.subDomains.map((subDomain) => {
              const isSelected = selectedSubDomains.some((selectedSubDomain) => selectedSubDomain === subDomain)

              return (
                <button
                  key={subDomain}
                  type="button"
                  onClick={() =>
                    isSelected
                      ? setOnboardingForm((prev) => ({
                          ...prev,
                          selectedSubDomains: prev.selectedSubDomains.filter((d) => d !== subDomain),
                        }))
                      : setOnboardingForm((prev) => ({
                          ...prev,
                          selectedSubDomains: prev.selectedSubDomains.concat(subDomain),
                        }))
                  }
                  className="flex"
                >
                  <div
                    className={`${isSelected ? 'border-[#FF7A59] bg-[#FF7A59] text-white' : 'border-[#505050] bg-white text-black'} flex h-[50px] w-[160px] items-center justify-center rounded-[6px] border-[0.5px]`}
                  >
                    <div className="text-[15px] leading-[140%] font-semibold tracking-[-0.025em]">{subDomain}</div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-[50px] flex flex-col">
        <div className="text-[30px] leading-[140%] font-semibold tracking-[0.025em]">나의 관심분야</div>
        {selectedSubDomains.length ? (
          <div className="text-[30px] leading-[140%] font-medium tracking-[0.025em] text-[#787878]">
            {selectedSubDomains.join(', ')}
          </div>
        ) : null}
      </div>

      <div className="mt-[50px] grid w-full grid-cols-1 gap-[30px] md:grid-cols-2">
        <button type="button" className="flex-1" onClick={() => goToStep(1)}>
          <div className="flex items-center justify-center rounded-[12.96px] bg-[#D9D9D9] py-[13px]">
            <div className="text-[16px] leading-[140%] font-semibold tracking-[-0.025em]">이전</div>
          </div>
        </button>

        <button
          type="button"
          className="flex-1"
          onClick={() => {
            if (!selectedSubDomains.length) {
              alert('최소 1개 이상의 관심분야를 선택해주세요.')
              return
            }

            goToStep(3)
          }}
        >
          <div className="flex items-center justify-center rounded-[12.96px] bg-[#FF7A59] py-[13px]">
            <div className="text-[16px] leading-[140%] font-semibold tracking-[-0.025em] text-white">다음</div>
          </div>
        </button>
      </div>
    </div>
  )
}
