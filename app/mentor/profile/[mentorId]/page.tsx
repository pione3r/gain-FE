import Career from '@/components/icons/career'
import Chat from '@/components/icons/chat'
import DefaultProfile from '@/components/icons/defaultProfile'
import Education from '@/components/icons/education'
import Face from '@/components/icons/face'
import Like from '@/components/icons/like'
import Star from '@/components/icons/star'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface MentorProfilePageParams {
  mentorId: string
}

export default async function MentorProfilePage({ params }: { params: MentorProfilePageParams }) {
  const { mentorId } = await params
  const mentor = {
    id: mentorId,
    name: '정민주',
    title: 'Google UX/UI 디자이너',
    hashTags: ['UX/UI', '미국', '취업'],
    profileImage: '/mentor1.png',
    cumulativeMenteeCount: 34,
    responseTime: '월–금 19:00~22:00 (KST 기준)',
    review: [
      {
        id: 1,
        mentorId: mentorId,
        menteeName: '김철수',
        menteeProfileImage: null,
        starRate: 5,
        content:
          '그동안 감으로만 만들던 포트폴리오를 멘토님과 함께 논리적으로 재구성할 수 있었어요. 실제 Google 인터뷰에서 어떻게 설명했는지도 알려주셔서 큰 도움이 됐습니다. 이전과는 완전히 다른, 스토리가 살아있는 포폴로 탈바꿈했어요.',
        createdAt: '2023-10-01',
      },
      {
        id: 2,
        mentorId: mentorId,
        menteeName: '이영희',
        menteeProfileImage: null,
        starRate: 4,
        content: '멘토님 덕분에 많은 것을 배웠습니다. 감사합니다!',
        createdAt: '2023-10-02',
      },
      {
        id: 3,
        mentorId: mentorId,
        menteeName: '박지민',
        menteeProfileImage: null,
        starRate: 5,
        content:
          '유학 후 커리어가 막막했는데, 멘토님과 대화할 수 있었어요. 실제 실리콘밸리에서 어떤 사람이 뽑히는지에 대한 정보도 얻을 수 있었습니다.',
        createdAt: '2023-10-03',
      },
      {
        id: 4,
        mentorId: mentorId,
        menteeName: '최수영',
        menteeProfileImage: null,
        starRate: 5,
        content: '멘토님과의 대화는 정말 유익했습니다. 실리콘밸리에서의 경험을 공유해 주셔서 많은 도움이 되었습니다.',
        createdAt: '2023-10-04',
      },
    ],
    introduction: `UX 디자인 실무에서 10년 넘게 일하며 스타트업부터 글로벌 빅테크까지 다양한 조직을 경험했습니다. 미국 취업과 UX 포트폴리오 설계에 대한 인사이트를 나누고 싶어 GAIN 멘토링을 시작하게 되었고, 단순한 코멘트가 아닌 ‘어떻게 전달해야 설득력 있는 포폴이 될 수 있을지’를 함께 고민합니다.

    멘토링은 다음과 같은 방식으로 진행됩니다.
    • 사전 제출된 포트폴리오(또는 이력서)를 바탕으로 먼저 전체 구조를 함께 검토합니다.
    • 문제점과 개선 포인트를 중심으로 구체적인 수정 방향을 드리며, 포인트별 우선순위를 잡아드립니다.
    • 멘토링 종료 후에는 간단한 요약 정리(피드백 요약 / 메모)도 함께 전달드립니다.
    • 추가적으로 궁금하신 부분은 채팅을 통해 짧게 질의응답 가능합니다.

    UX 전략 관점에서 ‘디자인을 설명하는 법’, ‘문제를 해결하는 접근’을 함께 다루는 멘토링을 원하신다면 도움이 되어드릴 수 있을 거라 생각합니다.`,
    career: [
      {
        id: 1,
        mentorId: mentorId,
        title: 'Google | UX/UI 디자이너',
        period: '2018.01 - 현재',
        description: `- Google Drive 모바일 UX 리디자인 주도
        - 사용자 온보딩 전환율 35% 향상
        - 실리콘밸리 UX팀 내 리서치 기반 설계 경험`,
      },
      {
        id: 2,
        mentorId: mentorId,
        title: '스타트업 ‘Designly’ | UX 디자이너',
        period: '2015.06 - 2017.12',
        description: `- MVP 앱 사용자 플로우 설계 및 와이어프레임 제작
        - 첫 사용자 확보를 위한 핵심 기능 UI 개선`,
      },
    ],
    education: [
      {
        id: 1,
        mentorId: mentorId,
        title: 'UC Berkeley Extension | UX Certificate',
        period: '(2019.03 – 2019.12)',
        description: `- 디자인씽킹, 인터랙션 설계, 포트폴리오 심화 과정 수료`,
      },
      {
        id: 2,
        mentorId: mentorId,
        title: 'Rhode Island School of Design (RISD)',
        period: '(2017.09 – 2019.06)',
        description: `- MFA in Interaction Design`,
      },
    ],
  }

  const portpolio = [
    {
      id: 1,
      mentorId: mentorId,
      title: '포트폴리오1',
    },
    {
      id: 2,
      mentorId: mentorId,
      title: '포트폴리오2',
    },
    {
      id: 3,
      mentorId: mentorId,
      title: '포트폴리오3',
    },
    {
      id: 4,
      mentorId: mentorId,
      title: '포트폴리오4',
    },
  ]

  return (
    <div className="w-ful flex flex-col items-center justify-center py-10 lg:py-20">
      <div className="grid w-full max-w-[1024px] grid-cols-1 flex-col gap-4 px-8 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
            <div className="relative aspect-square h-44 w-44">
              <Image src={mentor.profileImage} alt={mentor.name} fill className="object-cover" />
            </div>
            <div className="relative flex min-h-44 w-full flex-col justify-between gap-2">
              <h1 className="text-4xl font-medium">{mentor.name}</h1>
              <p className="text-xl font-medium text-[#5A5A5A]">{mentor.title}</p>
              <div className="flex space-x-2">
                {mentor.hashTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#5A5A5A] px-2 py-1 text-xs text-nowrap text-[#5A5A5A]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-0">
                <div className="mb-1 flex flex-row items-center gap-2">
                  <Face />
                  <p className="text-xs text-[#5A5A5A]">누적 멘티수: {mentor.cumulativeMenteeCount}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Chat />
                  <p className="text-xs text-[#5A5A5A]">응답 가능 시간: {mentor.responseTime}</p>
                </div>
                <span className="text-[0.5rem] text-pretty text-[#5A5A5A]">
                  *전 세계 다양한 지역에 계신 멘토님들과 연결되므로, 시차로 인해 응답까지 시간이 소요될 수 있습니다.
                </span>
              </div>
              <div className="absolute top-0 right-0">
                <Like width={30} height={28} />
              </div>
              <div className="flex justify-end lg:absolute lg:right-0 lg:bottom-0">
                <Button className="h-auto border border-[#5A5A5A] px-4 py-1" size="sm">
                  <p className="text-sm">문의하기</p>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Link href={`/mentor/booking/${mentorId}`} className="flex w-fit justify-center">
              <Button className="rounded-xl bg-[#FF7A59] text-white" size={'lg'}>
                멘토링 시작하기
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">멘토링 후기</h1>
            <div className="flex min-h-40 w-full flex-row gap-4 overflow-x-auto">
              {mentor.review.map((item) => (
                <div
                  key={item.id}
                  className="flex h-full min-w-[85%] flex-1 flex-row gap-3 overflow-hidden bg-slate-100 p-6 lg:min-w-80"
                >
                  <div className="flex flex-col items-center gap-2">
                    {item.menteeProfileImage === null ? (
                      <>
                        <DefaultProfile />
                        <p className="text-xs text-[#5A5A5A]">{item.menteeName[0]}**</p>
                      </>
                    ) : (
                      <Image src="/defaultProfile.png" alt={item.menteeName} width={40} height={40} />
                    )}
                  </div>
                  <div className="flex flex-auto flex-col justify-between gap-2">
                    <span className="text-xs text-pretty text-black">{item.content}</span>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {Array.from({ length: item.starRate }).map((_, idx) => (
                          <Star key={idx} />
                        ))}
                        <p className="ml-1 text-xs font-semibold">{item.starRate.toFixed(1)}</p>
                      </div>
                      <span className="text-xs text-[#5A5A5A]">{new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">소개</h1>
            <div className="flex h-fit w-full flex-row bg-slate-100 p-6">
              <p className="text-sm whitespace-pre-line">{mentor.introduction}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <h1 className="text-2xl font-medium">경력</h1>
              <div className="flex h-fit w-full flex-col bg-slate-100 p-6">
                {mentor.career.map((item) => (
                  <div key={item.id} className="flex flex-row gap-3">
                    <Career />
                    <div className="flex h-fit w-full flex-col gap-1">
                      <h2 className="text-xs font-semibold">{item.title}</h2>
                      <p className="text-xs">{item.period}</p>
                      <p className="text-xs whitespace-pre-line">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-medium">학력</h1>
              <div className="flex h-fit w-full flex-col bg-slate-100 p-6">
                {mentor.education.map((item) => (
                  <div key={item.id} className="flex flex-row gap-3">
                    <Education />
                    <div className="flex h-fit w-full flex-col gap-1">
                      <h2 className="text-xs font-semibold">{item.title}</h2>
                      <p className="text-xs">{item.period}</p>
                      <p className="text-xs whitespace-pre-line">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium">나를 대표하는 포트폴리오</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            {portpolio.map((item) => (
              <div key={item.id} className="h-40 w-full bg-slate-100 text-transparent">
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
