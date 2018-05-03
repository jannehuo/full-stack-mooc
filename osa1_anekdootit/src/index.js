import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: this.props.anecdotes.map((anecdote,i) => {
        return 0
      }),
      mostVoted:'No Votes Yet.'
    }
    this.showRandomAnectode = this.showRandomAnectode.bind(this);
    this.generateRandomNum = this.generateRandomNum.bind(this);
    this.voteAnectode = this.voteAnectode.bind(this);
    this.mostVoted = this.mostVoted.bind(this);
  }
  showRandomAnectode = () => {
    let randomNum = this.generateRandomNum();
    return () => {
      this.setState((prevState) => ({
        selected: randomNum,
        mostVoted:this.mostVoted()
      }));
    }
  }
  generateRandomNum() {
    return Math.floor(Math.random() * this.props.anecdotes.length);
  }
  voteAnectode = () => {
    const copy = [...this.state.votes];
    copy[this.state.selected] += 1;
    const newState = {
      votes:copy
    }
    return () => {
      this.setState((prevState) =>(newState));
    }
  }
  mostVoted() {
    const copy = [...this.state.votes];
    const valueObj = copy.map((val,i) => {
      return {
        index:i,
        value:val,
        text:this.props.anecdotes[i]
      }
    });
    const sortedValues = valueObj.sort((a, b) => a.value - b.value).reverse();
    const firstItem = sortedValues[0];
    return firstItem.text;
  }
  render() {
    return (
      <div className='app-container'>
        <h1>Anectodes</h1>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>{this.state.votes[this.state.selected]} votes.</p>
        <button onClick={this.showRandomAnectode()} className='button neutral'>Next Anectode</button>
        <button onClick={this.voteAnectode()} className='button positive'>Vote</button>
        <h1>Anectode with most votes</h1>
        <p>{this.state.mostVoted}</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

