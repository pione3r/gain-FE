import { OnBoardingContextProvider } from '@/lib/store/onboarding'
import OnboardingProcess from '@/components/onboarding/onboarding-process'

export default function Page() {
  return (
    <OnBoardingContextProvider>
      <OnboardingProcess />
    </OnBoardingContextProvider>
  )
}
