'use client'

import { useRouter } from 'next/navigation'
import { useOnBoardingContext } from '@/lib/store/onboarding'
import { USER_TEMPLATE_LIST } from '@/constants/onboarding'

export default function StepOne() {
  const router = useRouter()
  const { onboardingForm, setOnboardingForm, goToStep } = useOnBoardingContext()

  const { selectedUserTemplate } = onboardingForm

  return (
    <div className="mt-[40px] flex flex-col items-center px-[119px]">
      <div className="text-[30px] leading-[140%] font-semibold tracking-[-0.025em]">어떤 사용자신가요?</div>

      <div className="mt-[38px] grid grid-cols-1 gap-[30px] md:grid-cols-2">
        {USER_TEMPLATE_LIST.map((userTemplate) => {
          const { type, icon, title, desc } = userTemplate

          const isSelected = userTemplate.type === selectedUserTemplate.type

          return (
            <div key={type} className="relative">
              <div className="absolute top-[20px] left-[20px]">
                <button type="button">
                  <div
                    className={`${isSelected ? 'border-[#FF7A59] bg-[#FF7A59]' : 'border-[#C4C4C4]'} flex size-[26px] items-center justify-center rounded-sm border`}
                  >
                    {isSelected && (
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.41017 4.45703L6.82968 9.87652"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7.23527 10.1784L14.3405 1.0004"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setOnboardingForm((prev) => ({ ...prev, selectedUserTemplate: userTemplate }))}
              >
                <div
                  className={`${isSelected ? 'border-[#FF7A59] text-[#FF7A59] outline-[2px] outline-[#FF7A59]' : ''} flex h-[320px] w-[240px] flex-col items-center rounded-[18.14px] border-[1.51px] p-[55px_60px_30px_60px]`}
                >
                  {icon}
                  <div className="mt-[30px] text-[30px] leading-[140%] font-medium tracking-[-0.025em] text-[#000000]">
                    {title}
                  </div>
                  <div className="mt-[10px] text-[20px] leading-[140%] font-medium tracking-[-0.025em] whitespace-nowrap text-[#505050]">
                    {desc}
                  </div>
                </div>
              </button>
            </div>
          )
        })}
      </div>

      <div className="mt-[50px] grid w-full grid-cols-1 gap-[30px] md:grid-cols-2">
        <button type="button" className="flex-1" onClick={() => router.push('/')}>
          <div className="flex items-center justify-center rounded-[12.96px] bg-[#D9D9D9] py-[13px]">
            <div className="text-[16px] leading-[140%] font-semibold tracking-[-0.025em]">이전</div>
          </div>
        </button>

        <button type="button" className="flex-1" onClick={() => goToStep(2)}>
          <div className="flex items-center justify-center rounded-[12.96px] bg-[#FF7A59] py-[13px]">
            <div className="text-[16px] leading-[140%] font-semibold tracking-[-0.025em] text-white">다음</div>
          </div>
        </button>
      </div>
    </div>
  )
}
