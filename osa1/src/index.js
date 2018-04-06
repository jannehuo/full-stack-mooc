import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({kurssi}) => (
  <h1>{kurssi}</h1>
)

const Sisalto = ({osaList,tehtaviaList}) => (
  <div>
    <Osa osa={osaList[0]} tehtavia={tehtaviaList[0]} />
    <Osa osa={osaList[1]} tehtavia={tehtaviaList[1]} />
    <Osa osa={osaList[2]} tehtavia={tehtaviaList[2]} />
  </div>
)

const Yhteensa = ({tehtavatYht}) => (
  <p>yhteensä {tehtavatYht} tehtävää</p>
)

const Osa = ({osa,tehtavia}) => (
  <p>{osa} {tehtavia}</p>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osaList={[osa1,osa2,osa3]} tehtaviaList={[tehtavia1,tehtavia2,tehtavia3]} />
      <Yhteensa tehtavatYht={tehtavia1 + tehtavia2 + tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
