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
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osaList={[osa1,osa2,osa3]} />
      <Yhteensa tehtavatYht={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
