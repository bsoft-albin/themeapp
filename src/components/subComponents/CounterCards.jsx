import React from 'react';
import CountUp from 'react-countup';

const CounterCards = ({ start, end, duration, label }) => {
  return (
    <div className="col-lg-3 col-6 text-center">
      <CountUp start={start} end={end} duration={duration} separator="," className="purecounter" />
      <p>{label}</p>
    </div>
  );
};

export default CounterCards;