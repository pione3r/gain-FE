import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-white px-6 py-4 md:px-10 lg:px-20">
      <Link href="/" className="mr-10">
        <Image src="/logo.svg" alt="GAIN 로고" width={120} height={50} />
      </Link>
      {/* <nav className="hidden md:flex space-x-8">
        <Link href="/service" className="text-gray-700 hover:text-gray-900 font-medium">
          서비스 소개
        </Link>
        <Link href="/mento" className="text-gray-700 hover:text-gray-900 font-medium">
          멘토 찾기
        </Link>
        <Link href="/community" className="text-gray-700 hover:text-gray-900 font-medium">
          커뮤니티
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hidden sm:block text-gray-700 hover:text-gray-900">
          로그인
        </Link>
        <Link href="/signup">
          <Button className="bg-[#FF7A59] hover:bg-[#FF6A49] text-white">회원가입</Button>
        </Link>
      </div> */}
    </header>
  )
}
