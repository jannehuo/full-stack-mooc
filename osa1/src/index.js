import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({kurssi}) => (
  <h1>{kurssi}</h1>
)

const Sisalto = ({osaList}) => {
  const osat = osaList.map((osa,i) => {
    return <Osa key={i} osa={osa.nimi} tehtavia={osa.tehtavia} />
  })
  return (
    <div>
      {osat}
    </div>
  )
}

const Yhteensa = ({tehtavatYht}) => (
  <p>yhteensä {tehtavatYht} tehtävää</p>
)

const Osa = ({osa,tehtavia}) => (
  <p>{osa} {tehtavia}</p>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
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

  const yhteensa = osat.reduce( (sum,cur) => sum+cur.tehtavia , 0)

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osaList={osat} />
      <Yhteensa tehtavatYht={yhteensa} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
