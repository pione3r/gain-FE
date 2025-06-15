import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex h-18 w-full items-center justify-between bg-white px-6 py-4 md:px-10 lg:px-20">
      <Link href="/" className="relative h-[40px] w-[96px]">
        <Image src="/logo.svg" alt="GAIN 로고" fill className="object-contain" />
      </Link>
      <nav className="hidden space-x-8 md:flex">
        <Link href="/service" className="font-medium">
          서비스 소개
        </Link>
        <Link href="/mentor" className="font-medium">
          멘토 찾기
        </Link>
        <Link href="/community" className="font-medium">
          커뮤니티
        </Link>
      </nav>
      <div className="flex h-full space-x-4">
        <div className="hidden h-full flex-row items-center rounded-lg bg-slate-100 px-1 md:flex">
          <Search className="aspect-square h-full w-auto stroke-[#3C3C43]/60 p-2" />
          <input placeholder="Search" className="focus:outline-none" />
        </div>
        <Link href="/signup">
          <Button className="bg-[#FF7A59] text-white hover:bg-[#FF6A49]">Login/Register</Button>
        </Link>
      </div>
    </header>
  )
}
