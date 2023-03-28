import React, {useState} from 'react'

export default function About() {
  const [naeem, setNaeem] = useState(
    "I am Sidra"
  )
  const sidra = () =>{
    if(naeem ==="I am Sidra"){
      setNaeem("I am Naeem")
    }
    else{
      setNaeem("I am Sidra")


    }
  }


  return (
    <div className='container my-2'>
      <button onClick={sidra} className='btn btn-danger'>{naeem}</button>
      
    </div>
  )
}
