import React from 'react'

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

export default Kurssit