import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  id: string
  name: string
  email: string
}

type SignupData = {
  name: string
  userId: string
  password: string
  birthdate: string
  gender: string
  email: string
  countryCode: string
  phone: string
  agreements: {
    all: boolean
    age: boolean
    terms: boolean
    privacy: boolean
    marketing: boolean
    emailMarketing: boolean
    smsMarketing: boolean
  }
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  signup: (data: SignupData) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email) => {
        set({ isLoading: true, error: null })

        try {
          // 실제 API 연동 시 여기에 구현
          // 임시 로그인 로직 (실제로는 API 호출 필요)
          await new Promise((resolve) => setTimeout(resolve, 1000))

          // 로그인 성공 시 사용자 정보 저장
          set({
            user: {
              id: '1',
              name: '사용자',
              email,
            },
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          set({
            error: '로그인에 실패했습니다.',
            isLoading: false,
          })
          throw error
        }
      },

      signup: async () => {
        set({ isLoading: true, error: null })

        try {
          // 실제 API 연동 시 여기에 구현
          // 임시 회원가입 로직 (실제로는 API 호출 필요)
          await new Promise((resolve) => setTimeout(resolve, 1000))

          set({ isLoading: false })
        } catch (error) {
          set({
            error: '회원가입에 실패했습니다.',
            isLoading: false,
          })
          throw error
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        })
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
)
