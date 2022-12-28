import React from 'react'
import '../style/_search.css'

const Search = ({setinput,input}) => {
  const inputhandler = (e) =>{   
    setinput(e.target.value)
  }

  const searchFunction = () =>{
   
  }
  return (
    <form className='search' onSubmit={searchFunction}>
      <input type="text" onChange={inputhandler} value={input} />
      <button>Search</button>
   </form>
  )
}

export default Search
