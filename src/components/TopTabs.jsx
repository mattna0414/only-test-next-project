import { Button } from '@gkssk/dstest'

function TopTabs({ tabs, activeTab, onSelect }) {
  return (
    <header className="top-tabs-wrap">
      <div className="brand-mark" aria-hidden="true">
        Atelier
      </div>
      <nav className="top-tabs" aria-label="Page sections">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            type="button"
            variant="ghost"
            className={activeTab === tab.id ? 'tab-btn active' : 'tab-btn'}
            onClick={() => onSelect(tab.id)}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            <span>{tab.label}</span>
          </Button>
        ))}
      </nav>
    </header>
  )
}

export default TopTabs
