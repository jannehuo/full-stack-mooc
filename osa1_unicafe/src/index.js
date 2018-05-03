import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick,content,buttonClass}) => (
  <button className={buttonClass} onClick={handleClick}>{content}</button>
)

const Statistics = ({values}) => {
  let allReviews = values.positive + values.neutral + values.negative;
  let reviewsSum = values.positive + (values.negative * -1);
  let average = Math.round((reviewsSum / allReviews) * 100) / 100;
  let positives = Math.round((values.positive / allReviews) * 100);
  return (
    <div className='app-stats'>
      <h2>Statistiikka</h2>
      {allReviews > 0 &&
        <table>
          <tbody>
            <Statistic label="Positiivinen" value={values.positive} />
            <Statistic label="Neutraali" value={values.neutral} />
            <Statistic label="Negatiivinen" value={values.negative} />
            <Statistic label="Keskiarvo" value={isNaN(average) ? 0 : average} />
            <Statistic label="Positiivisia" value={isNaN(positives) ? 0 + '%' : positives + '%'} />
          </tbody>
        </table>
      }
      {allReviews === 0 &&
        <div>
          <p>Yhtään palautetta ei ole vielä annettu.</p>
        </div>
      }
    </div>
  )
}

const Statistic = ({label,value}) => {
  return (
    <tr>
      <td>{label}</td><td>{value}</td>
    </tr>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      positive:0,
      neutral:0,
      negative:0
    }
    this.addReview = this.addReview.bind(this);
  }
  addReview = (type) => {
    return () => {
      this.setState((prevState) => ({
        [type]: prevState[type] + 1
      }));
    }
  }
  render() {
    return (
      <div className='app-container'>
        <h1>Unicafe</h1>
        <div className='add-review'>
          <h2>Anna palautetta</h2>
          <div className='app-buttons'>
            <Button handleClick={this.addReview('positive')} content="Hyvä" buttonClass="button positive" />
            <Button handleClick={this.addReview('neutral')} content="Neutraali"  buttonClass="button neutral" />
            <Button handleClick={this.addReview('negative')} content="Huono"  buttonClass="button negative" />
          </div>
        </div>
        <Statistics values={this.state}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

