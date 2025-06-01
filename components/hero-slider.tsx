'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
}

export default function HeroSlider() {
  const slides: Slide[] = [
    {
      id: 1,
      title: '예술·디자인 분야 멘토의 1:1 매칭',
      subtitle: '유학·해외 취업의 방향을 찾으세요.',
      description:
        '예술·디자인 분야에 특화된 GAIN에서 AI 기반 추천 시스템으로 매칭되는 전문 멘토의 멘토링 만나보세요. 전 세계 멘토의 현장에서 제 경험, 취업, 포트폴리오, 그리고 커뮤니티까지 찾아보세요.',
      image: '/hero-slide-1.png',
      buttonText: '1:1 멘토 매칭 시작하기',
    },
    {
      id: 2,
      title: '글로벌 아트 네트워크와 함께하세요',
      subtitle: '200명 이상의 현직 전문가들이 기다리고 있습니다.',
      description:
        '전 세계 20개국 이상에서 활동 중인 현직 디자이너, 아티스트들과 연결되어 실질적인 조언을 받아보세요. 포트폴리오 리뷰부터 취업 전략까지, 당신의 커리어를 함께 발전시켜 나갑니다.',
      image: '/hero-slide-1.png',
      buttonText: '멘토 찾아보기',
    },
    {
      id: 3,
      title: 'AI 기반 맞춤형 멘토링 시스템',
      subtitle: '나에게 딱 맞는 멘토를 찾아드립니다.',
      description:
        'GAIN의 AI 매칭 시스템은 당신의 목표, 관심사, 경력 단계를 분석하여 최적의 멘토를 추천해 드립니다. 97%의 높은 만족도로 검증된 멘토링 서비스를 경험해보세요.',
      image: '/hero-slide-1.png',
      buttonText: '무료로 시작하기',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden md:h-[700px]">
      {/* 슬라이드 이미지 */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 z-10 bg-black/40" />
          <Image
            src={slide.image || '/placeholder.svg'}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* 슬라이드 콘텐츠 */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white">
            <h1 className="mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
              {slides[currentSlide].title}
            </h1>
            <h2 className="mb-6 text-xl md:text-2xl">{slides[currentSlide].subtitle}</h2>
            <p className="mb-8 max-w-2xl leading-relaxed text-gray-200">{slides[currentSlide].description}</p>
            <Button className="rounded-md bg-[#FF7A59] px-8 py-6 text-lg text-white hover:bg-[#FF6A49]">
              {slides[currentSlide].buttonText}
            </Button>
          </div>
        </div>
      </div>

      {/* 슬라이드 컨트롤 */}
      <div className="absolute right-0 bottom-8 left-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 이전/다음 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all duration-300 hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all duration-300 hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
