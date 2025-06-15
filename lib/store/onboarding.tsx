'use client'

import { createContext, useContext, useState } from 'react'
import { COUNTRY_LIST, DOMAIN_LIST, STEP_LIST, USER_TEMPLATE_LIST } from '@/constants/onboarding'

type OnboardingStep = (typeof STEP_LIST)[number]

type UserTemplate = (typeof USER_TEMPLATE_LIST)[number]

type Domain = (typeof DOMAIN_LIST)[number]

type SubDomain = Domain['subDomains'][number]

type Country = (typeof COUNTRY_LIST)[number]

type OnboardingForm = {
  selectedUserTemplate: UserTemplate
  selectedDomain: Domain
  selectedSubDomains: SubDomain[]
  selectedCountry: Country
}

const OnboardingContext = createContext<{
  currentStep: OnboardingStep
  onboardingForm: OnboardingForm
  goToStep: (procedure: OnboardingStep['procedure']) => void
  setOnboardingForm: React.Dispatch<React.SetStateAction<OnboardingForm>>
} | null>(null)

export const OnBoardingContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(STEP_LIST[0])
  const [onboardingForm, setOnboardingForm] = useState<OnboardingForm>({
    selectedUserTemplate: USER_TEMPLATE_LIST[0],
    selectedDomain: DOMAIN_LIST[0],
    selectedSubDomains: [],
    selectedCountry: COUNTRY_LIST[0],
  })

  const goToStep = (procedure: OnboardingStep['procedure']) => {
    const findStep = STEP_LIST.find((step) => step.procedure === procedure)

    if (findStep) setCurrentStep(findStep)
  }

  return (
    <OnboardingContext value={{ currentStep, onboardingForm, setOnboardingForm, goToStep }}>
      {children}
    </OnboardingContext>
  )
}

export const useOnBoardingContext = () => {
  const context = useContext(OnboardingContext)

  if (!context) throw new Error('useOnBoardingContext must be used within OnBoardingContextProvider')

  return context
}
