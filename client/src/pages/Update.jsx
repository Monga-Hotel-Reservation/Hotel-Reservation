import React, { useState } from 'react'

function Update() {

const [name,setName]=useState("")
const [image,setImage] =useState("")

  return (
    <div>
<input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)} />
<input type='text' placeholder='image' onChange={(e)=>setImage(e.target.value)} />
    <div>
        <button>Update</button>
    </div>
    </div>

  )
}

export default Update