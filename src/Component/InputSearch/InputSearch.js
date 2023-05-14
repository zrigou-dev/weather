import React from 'react'
import './InputSearch.css'
import hero from '../../images/icon-1.png'


const InputSearch = ({city , setCity}) => {
    const handlesub = (e)=>{
       e.preventDefault()
    }
  return (
    <div className="container">
    <div className='inpSearch'>
      <div>
        <img src={hero} alt="icon hero" />  
        <h1>Weather Forecast</h1>
      </div>  
      <form onSubmit={handlesub}>
         <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} placeholder='Enter a City...' />
      </form>
    </div>
    </div>  
  )
}

export default InputSearch
