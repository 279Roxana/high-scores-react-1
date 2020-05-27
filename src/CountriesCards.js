import React from "react";
// import Scores from './Scores';

const CountriesCards = (props) => {
  return (
    <div className="cards">
      <h1>High Scores per Country</h1>
      {props.allCountryScores.map((country, index) => (
        <div className="card" key={index}>
          <h2>HIGH SCORES: {country.name}</h2>
          {country.scores.map((score) => (
            <p className="individual-score">
              {score.n.toUpperCase()} <span>{score.s}</span>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CountriesCards;
