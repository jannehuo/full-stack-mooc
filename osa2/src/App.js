import React from 'react'
import Axios from 'axios'
import Countries from './components/Countries.js'
import Filter from './components/Filter.js'

const appUrls = {
  countries:'https://restcountries.eu/rest/v2/all'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      searchResults:[]
    }
    this.filterInputChange = this.filterInputChange.bind(this)
    this.pickCountry = this.pickCountry.bind(this)
  }

  componentWillMount() {
    Axios.get(appUrls.countries).then((res) => {
      console.log(res)
      if(res.status === 200) {
        this.setState({
          countries:res.data
        })
      }
    })
  }

  filterInputChange(e) {
    if(e.target.value.length > 0) {
      this.setState({
        searchResults: this.state.countries.filter(country => country.name.toLowerCase().includes(e.target.value.toLowerCase()))
      })
    } else {
      this.setState({
        searchResults: []
      })
    }
  }

  pickCountry(e) {
    const countryName = e.target.textContent.toLowerCase()
    this.setState({
      searchResults: this.state.countries.filter(country => country.name.toLowerCase().includes(countryName))
    })
  }

  render() {
    return (
      <div className='app-container'>
        <h1>Country Search</h1>
        <Filter filterInput={this.filterInputChange} />
        <h1>Countries</h1>
        <Countries countries={this.state.searchResults} pickCountry={this.pickCountry} />
      </div>
    )
  }
}

export default App
