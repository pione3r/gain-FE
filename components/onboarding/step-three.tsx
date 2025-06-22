'use client'

import Image from 'next/image'
import { useOnBoardingContext } from '@/lib/store/onboarding'
import { COUNTRY_LIST } from '@/constants/onboarding'

export default function StepThree() {
  const { onboardingForm, setOnboardingForm, goToStep } = useOnBoardingContext()

  const { selectedCountry } = onboardingForm

  return (
    <div className="mt-[40px] flex flex-col px-[99px]">
      <div className="flex flex-col items-center">
        <div className="text-[30px] leading-[140%] font-semibold tracking-[-0.025em]">활동 국가를 선택하세요.</div>

        <div className="mt-[40px] flex w-[510px] flex-col">
          <div className="flex items-center rounded-[12px] border-[1.44px] p-5">
            <div className="flex size-[35px] items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.4295 27.8892L18.7556 21.2154C17.8775 21.9179 16.8676 22.474 15.7261 22.8838C14.5845 23.2936 13.3697 23.4985 12.0818 23.4985C8.89122 23.4985 6.19125 22.3933 3.98186 20.1827C1.77247 17.9721 0.667186 15.2722 0.666016 12.0828C0.666016 8.8922 1.7713 6.19222 3.98186 3.98283C6.19242 1.77344 8.8924 0.668163 12.0818 0.666992C15.2723 0.666992 17.9723 1.77227 20.1817 3.98283C22.3911 6.1934 23.4964 8.89337 23.4976 12.0828C23.4976 13.3707 23.2927 14.5855 22.8829 15.727C22.4731 16.8686 21.9169 17.8785 21.2144 18.7566L27.8882 25.4304L25.4295 27.8892ZM12.0818 19.986C14.2771 19.986 16.1435 19.2173 17.6808 17.68C19.2181 16.1427 19.9862 14.2769 19.985 12.0828C19.985 9.88742 19.2164 8.02109 17.679 6.48377C16.1417 4.94644 14.276 4.17837 12.0818 4.17954C9.88645 4.17954 8.02011 4.9482 6.48279 6.48552C4.94547 8.02285 4.17739 9.88859 4.17856 12.0828C4.17856 14.2781 4.94722 16.1444 6.48455 17.6818C8.02187 19.2191 9.88762 19.9872 12.0818 19.986Z"
                  fill="#7C7C7C"
                />
              </svg>
            </div>
            <input
              className="w-full text-[25px] leading-[140%] tracking-[-0.025em] outline-none placeholder:text-center placeholder:text-[#7C7C7C]"
              placeholder="국가를 검색하세요."
            />
          </div>

          <div className="scrollbar mt-[34px] flex max-h-[356px] flex-col overflow-y-auto pr-[8px]">
            {COUNTRY_LIST.map((country) => {
              const { imagePath, name } = country

              const isSelected = country.name === selectedCountry.name

              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setOnboardingForm((prev) => ({ ...prev, selectedCountry: country }))}
                >
                  <div
                    className={`${isSelected ? 'bg-[#FF7A59] text-white' : 'text-[#7C7C7C]'} flex items-center gap-[40px] border-b-[1.5px] border-[#D9D9D9] p-[20px]`}
                  >
                    <div className="relative h-[30px] w-[42px]">
                      <Image src={imagePath} alt="country image" fill />
                    </div>
                    <div className="text-medium flex-1 text-start text-[25px] leading-[140%] tracking-[-0.025em]">
                      {name}
                    </div>

                    {isSelected ? (
                      <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.5 7.5001L15 20.0001L29.5 3"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-[50px] grid w-full grid-cols-1 gap-[30px] md:grid-cols-2">
        <button type="button" className="flex-1" onClick={() => goToStep(2)}>
          <div className="flex items-center justify-center rounded-[12.96px] bg-[#D9D9D9] py-[13px]">
            <div className="text-[16px] leading-[140%] font-semibold tracking-[-0.025em]">이전</div>
          </div>
        </button>

        <button type="button" className="flex-1" onClick={() => goToStep(4)}>
          <div className="flex items-center justify-center rounded-[12.96px] bg-[#FF7A59] py-[13px]">
            <div className="text-[16px] leading-[140%] font-semibold tracking-[-0.025em] text-white">다음</div>
          </div>
        </button>
      </div>
    </div>
  )
}
