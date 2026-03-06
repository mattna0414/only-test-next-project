function SectionCard({ section, index }) {
  return (
    <section id={section.id} className="section-card" data-index={index}>
      <p className="section-kicker">{section.kicker}</p>
      <h2>{section.title}</h2>
      <p className="section-description">{section.description}</p>
      <div className="chip-row">
        {section.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SectionCard
