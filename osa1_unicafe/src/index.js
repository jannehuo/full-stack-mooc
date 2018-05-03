import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick,content,buttonClass}) => (
  <button className={buttonClass} onClick={handleClick}>{content}</button>
)

const Stats = ({values}) => {
  let allReviews = values.positive + values.neutral + values.negative;
  let reviewsSum = values.positive + (values.negative * -1);
  let average = Math.round((reviewsSum / allReviews) * 100) / 100;
  let positives = Math.round((values.positive / allReviews) * 100);
  return (
    <div className='app-stats'>
      <h2>Statistiikka</h2>
      <p>Positiivinen: {values.positive}</p>
      <p>Neutraaali: {values.neutral}</p>
      <p>Negatiivinen: {values.negative}</p>
      <p>Keskiarvo: {isNaN(average) ? 0 : average}</p>
      <p>Positiivisia: {isNaN(positives) ? 0 : positives} %</p>
    </div>
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
    if(type === 1) {
      return () => {
        this.setState((prevState) => ({
          positive: prevState.positive + 1
        }));        
      }
    }
    if(type === 0) {
      return () => {
        this.setState((prevState) => ({
          neutral: prevState.neutral + 1
        }));        
      }
    }
    if(type === -1) {
      return () => {
        this.setState((prevState) => ({
          negative: prevState.negative + 1
        }));        
      }
    }
  }
  render() {
    return (
      <div className='app-container'>
        <h1>Unicafe</h1>
        <div className='add-review'>
          <h2>Anna palautetta</h2>
          <div className='app-buttons'>
          <Button handleClick={this.addReview(1)} content="Hyvä" buttonClass="button positive" />
          <Button handleClick={this.addReview(0)} content="Neutraali"  buttonClass="button neutral" />
          <Button handleClick={this.addReview(-1)} content="Huono"  buttonClass="button negative" />
          </div>
        </div>
        <Stats values={this.state}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

