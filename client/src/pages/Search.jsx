import React, { useState } from 'react'

function Search() {
const [item,setItem]=useState("")

  return (
    <div>
        <input type="text" placeholder='search' onChange={(e)=>{setItem(e.target.value)}} />
        <button onClick={()=>{
        // var arr =data.filter((el)=>{
        //   return el.name === item
        // })
        // setData(arr)
        }}>Search</button>
    </div>
  )
}

export default Search