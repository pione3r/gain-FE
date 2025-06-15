'use client'

import { useOnBoardingContext } from '@/lib/store/onboarding'
import { STEP_LIST } from '@/constants/onboarding'
import StepOne from './step-one'
import StepTwo from './step-two'
import StepThree from './step-three'
import StepComplete from './step-complete'

export default function OnboardingProcess() {
  const { currentStep } = useOnBoardingContext()

  const STEP_TRACK_ACTIVE_WIDTH = 100 / STEP_LIST.filter(({ showTab }) => showTab).length
  const STEP_TRACK_ACTIVE_POSITION = STEP_TRACK_ACTIVE_WIDTH * currentStep.index

  return (
    <div className="flex flex-col">
      {/* 헤더 */}
      <div className="flex h-[60px] shrink-0 bg-[#D9D9D9]"></div>

      {/* 바디 */}
      <div className="flex justify-center pb-[119.5px]">
        <div className="mt-[70px] flex w-[min(747px,100%)] flex-col">
          <div className="text-center text-[38px] leading-[140%] font-medium tracking-[-0.025em] text-[#000000]">
            GAIN과 함께 첫걸음을 시작해보세요
          </div>

          {currentStep.showTab ? (
            <div className="relative mt-[50px] flex pb-[11px]">
              {STEP_LIST.map((step) => {
                const { procedure, label, showTab } = step

                if (!showTab) return null

                return (
                  <div key={procedure} className="flex-1">
                    <div className="flex flex-1 items-center justify-center">
                      <div
                        className={`${step.procedure === currentStep.procedure ? 'font-semibold text-[#505050]' : 'font-medium text-[#C4C4C4]'} text-[30px] leading-[140%] tracking-[-0.025em]`}
                      >
                        {`${procedure}. ${label}`}
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="absolute bottom-0 h-[3px] w-full bg-[#C4C4C4]">
                <div
                  className="absolute h-full bg-[#505050] transition-[left]"
                  style={{ width: `${STEP_TRACK_ACTIVE_WIDTH}%`, left: `${STEP_TRACK_ACTIVE_POSITION}%` }}
                ></div>
              </div>
            </div>
          ) : null}

          {currentStep.procedure === 1 && <StepOne />}
          {currentStep.procedure === 2 && <StepTwo />}
          {currentStep.procedure === 3 && <StepThree />}
          {currentStep.procedure === 4 && <StepComplete />}
        </div>
      </div>
    </div>
  )
}
