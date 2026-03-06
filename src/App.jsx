import { useEffect, useMemo, useState } from 'react'
import { Button, Input, Modal } from '@gkssk/dstest'
import TopTabs from './components/TopTabs'
import SectionCard from './components/SectionCard'
import './App.css'

const sections = [
  {
    id: 'intro',
    label: 'Intro',
    kicker: 'Creative Studio',
    title: 'Built To Feel Curated, Not Generated',
    description:
      '의도적인 타이포와 질감 있는 배경, 넉넉한 여백으로 첫 인상을 강하게 만드는 랜딩 섹션입니다.',
    tags: ['Direction', 'Tone', 'Identity'],
  },
  {
    id: 'works',
    label: 'Works',
    kicker: 'Recent Launches',
    title: 'From Product Pages To Campaign Micro-Sites',
    description:
      '고정된 템플릿 대신 브랜드의 맥락에 맞는 레이아웃을 설계해, 각 페이지가 다른 표정을 가지도록 구성합니다.',
    tags: ['Publishing', 'Motion', 'Componentized'],
  },
  {
    id: 'services',
    label: 'Services',
    kicker: 'Capabilities',
    title: 'Design System Ready Frontend Delivery',
    description:
      '탭, 카드, 섹션 블록을 재사용 가능한 단위로 쪼개고 실제 코드베이스에 바로 투입 가능한 구조로 만듭니다.',
    tags: ['React', 'Architecture', 'Scalable UI'],
  },
  {
    id: 'contact',
    label: 'Contact',
    kicker: 'Start A Project',
    title: 'Move Fast Without Looking Generic',
    description:
      '퍼블리싱만 필요해도 괜찮습니다. 핵심 섹션 기준으로 빠르게 제작하고 이후 기능 확장은 자연스럽게 이어집니다.',
    tags: ['Fast Build', 'Clean Handoff', 'Production'],
  },
]

function App() {
  const [activeTab, setActiveTab] = useState(sections[0].id)
  const [projectBrief, setProjectBrief] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const tabs = useMemo(
    () => sections.map(({ id, label }) => ({ id, label })),
    [],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveTab(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleTabSelect = (id) => {
    const target = document.getElementById(id)
    if (!target) return

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveTab(id)
  }

  return (
    <div className="page-shell">
      <div className="ds-utility-sentinel border-input bg-background" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true" />
      <TopTabs tabs={tabs} activeTab={activeTab} onSelect={handleTabSelect} />

      <main className="content-grid">
        <aside className="hero-panel">
          <p className="hero-eyebrow">Digital Atelier / 2026</p>
          <h1>Landing Page Starter With Real Character</h1>
          <p>
            상단 탭으로 구역 이동이 가능하고, 각 섹션은 개별 컴포넌트로 분리되어 유지보수하기 쉽습니다.
          </p>
          <div className="hero-contact">
            <label className="hero-contact-label" htmlFor="project-brief">
              프로젝트 한 줄 설명
            </label>
            <Input
              id="project-brief"
              inputSize="lg"
              value={projectBrief}
              onChange={(event) => setProjectBrief(event.target.value)}
              placeholder="예: 브랜드 런칭 페이지를 2주 안에 만들고 싶어요."
              className="hero-contact-input"
            />
            <Button
              type="button"
              size="lg"
              variant="secondary"
              className="hero-contact-cta"
              onClick={() => setIsContactModalOpen(true)}
              disabled={!projectBrief.trim()}
            >
              팝업으로 내용 확인
            </Button>
            <p className="hero-contact-hint">
              입력한 내용은 데모 팝업에서만 확인되고 저장되지 않습니다.
            </p>
          </div>
        </aside>

        <div className="sections-wrap">
          {sections.map((section, index) => (
            <SectionCard key={section.id} section={section} index={index} />
          ))}
        </div>
      </main>

      <Modal
        open={isContactModalOpen}
        title="문의 내용 미리보기"
        onClose={() => setIsContactModalOpen(false)}
      >
        <div className="contact-modal-content">
          <p className="contact-modal-brief">
            {projectBrief.trim() || '아직 입력된 내용이 없습니다.'}
          </p>
          <label className="contact-modal-label" htmlFor="contact-email">
            답변 받을 이메일
          </label>
          <Input
            id="contact-email"
            type="email"
            value={contactEmail}
            onChange={(event) => setContactEmail(event.target.value)}
            placeholder="you@company.com"
            className="contact-modal-input"
          />
          <div className="contact-modal-actions">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsContactModalOpen(false)}
            >
              닫기
            </Button>
            <Button type="button" onClick={() => setIsContactModalOpen(false)}>
              확인했어요
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App
