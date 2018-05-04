import React from 'react'

const Form = ({submit,phoneInput,nameInput,error}) => {
  return (
    <form onSubmit={submit}>
      <div>
        <label>
          <h2>Nimi</h2>
          <div className='error-msg'>{error ? 'Nimi löytyy jo listasta' : ''}</div>
        </label>
        <input placeholder='Uusi nimi...' onChange={nameInput}/>
      </div>
      <div>
        <label>
          <h2>Puhelinnumero</h2>
        </label>
        <input placeholder='Puhelinnumero' onChange={phoneInput}/>
      </div>
      <div>
        <button type="submit" disabled={error ? true : false}>lisää</button>
      </div>
    </form>
  )
}

export default Form