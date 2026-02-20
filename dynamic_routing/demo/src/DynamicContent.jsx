import React from 'react'
import { useParams } from 'react-router-dom'
import card_data from './Data'
const DynamicContent = () => {
    const {id}=useParams(); 

    const result=card_data.find(a=>a.id===Number(id))

  return (
    <div>

        <div>
            <h1>{result.card_title}</h1>

            <h4 style={{textAlign:"center"}}>{result.para}</h4>
            <p style={{textAlign:"center"}}>{result.desc}</p>
        </div>

    </div>
  )
}

export default DynamicContent