import React from 'react';

const Kurssit = ({kurssit}) => {
  const infot = kurssit.map((kurssi) => {
    return <KurssiInfo key={kurssi.id} kurssi={kurssi} />;
  });
  return (
    <div className='course-info'>
      {infot}
    </div>
  )
}

const KurssiInfo = ({kurssi}) => {
  const osat = kurssi.osat.map((osa) => {
    return <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>;
  });
  const yht = kurssi.osat.reduce((a,b) => {
    return a + b.tehtavia;
  },0);
  return (
    <div className='course-info-content'>
      <h1>{kurssi.nimi}</h1>
      <ul>{osat}</ul>
      <p className='bold'>Yhteensä: {yht}</p>
    </div>
  )
}

const App = () => {
  const kurssit = [{
    nimi: 'Half Stack -sovelluskehitys',
    id:1,
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  },
  {
    nimi: 'Node.js',
    id: 2,
    osat: [
      {
        nimi: 'Routing',
        tehtavia: 3,
        id: 1
      },
      {
        nimi: 'Middlewaret',
        tehtavia: 7,
        id: 2
      }
    ]
  }]

  return (
    <div className='app-container'>
      <Kurssit kurssit={kurssit} />
    </div>
  )
}

export default App;
