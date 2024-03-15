import React from 'react'
import CounterCards from './CounterCards'

const FactsSection = () => {
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Facts</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row counters">
            <CounterCards start={0} end={232} duration={10} label="Clients" />
            <CounterCards start={0} end={232} duration={10} label="Projects" />
            <CounterCards start={0} end={232} duration={10} label="Hours Of Support" />
            <CounterCards start={0} end={232} duration={10} label="Hard Workers" />
        </div>

      </div>
    </section>
  )
}

export default FactsSection