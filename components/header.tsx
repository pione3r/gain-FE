import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="flex w-full items-center justify-between bg-white px-6 py-4 md:px-10 lg:px-20">
            <Link href="/" className="mr-10">
                <Image src="/logo.png" alt="GAIN 로고" width={120} height={50} />
            </Link>
            <nav className="hidden space-x-8 md:flex">
                <Link href="/service" className="font-medium text-gray-700 hover:text-gray-900">
                    서비스 소개
                </Link>
                <Link href="/mento" className="font-medium text-gray-700 hover:text-gray-900">
                    멘토 찾기
                </Link>
                <Link href="/community" className="font-medium text-gray-700 hover:text-gray-900">
                    커뮤니티
                </Link>
            </nav>
            <div className="flex items-center space-x-4">
                <Link href="/login" className="hidden text-gray-700 hover:text-gray-900 sm:block">
                    로그인
                </Link>
                <Link href="/signup">
                    <Button className="bg-[#FF7A59] text-white hover:bg-[#FF6A49]">회원가입</Button>
                </Link>
            </div>
        </header>
    )
}
