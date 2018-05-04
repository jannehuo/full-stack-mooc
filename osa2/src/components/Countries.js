import React from 'react'

const Countries = ({countries,pickCountry}) => {
  const ln = countries.length;
  if(ln > 10) {
    return (
      <div>Too many matched. Please specify another filter.</div>
    )
  }
  if(ln > 1 && ln <= 10) {
    return (
      <div>
        <ResultList countries={countries} pickCountry={pickCountry} />
      </div>
    )
  }
  if(ln === 1) {
    return (
      <SingleCountry country={countries[0]} />
    )
  }
  if(ln === 0) {
    return (
      <div>Search Results</div>
    )
  }

}

const ResultList = ({countries,pickCountry}) => {
  const countryElements = countries.map((country) => {
    return <Country key={country.numericCode} country={country} pickCountry={pickCountry} />
  });
  return (
    <div>
      {countryElements}
    </div>
  )
}

const Country = ({country,pickCountry}) => {
  return (
    <p className='country-name' onClick={pickCountry}>{country.name}</p>
  )
}

const SingleCountry = ({country}) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <img className='country-flag' src={country.flag} alt={country.name}/>
    </div>
  )
}

export default Countries