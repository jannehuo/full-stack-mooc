import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({kurssi}) => (
  <h1>{kurssi}</h1>
)

const Sisalto = ({osat}) => {
  const osaContent = osat.map((osa,i) => {
    return <Osa key={i} osa={osa.nimi} tehtavia={osa.tehtavia} />
  })
  return (
    <div>
      {osaContent}
    </div>
  )
}

const Yhteensa = ({osat}) => {
  const yht = osat.reduce( (sum,cur) => sum+cur.tehtavia , 0)
  return (
    <p>yhteensä {yht} tehtävää</p>
  )
}

const Osa = ({osa,tehtavia}) => (
  <p>{osa} {tehtavia}</p>
)

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssi={kurssi.name} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
