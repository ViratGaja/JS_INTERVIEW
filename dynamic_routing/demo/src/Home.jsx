import React from 'react'
import './App.css'
import card_data from './Data'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate()
    return (
        <div className='cards'>
            <h1>Dynamic Routing</h1>

            <div className='main_card'>
                {card_data.map(data => (
                    <div key={data.id} className='main_dynamic'>

                        <h3>{data.card_title}</h3>
                        <p>{data.para}</p>
                        <button onClick={()=>navigate(`/details/${data.id}`)}>More Detail</button>

                    </div>
                ))}
                {/* <div className='main_dynamic'>

                    <h3>Hello</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis harum perspiciatis totam temporibus delectus recusandae obcaecati dicta consequuntur fuga cupiditate, qui quibusdam. Minima dolorum officiis adipisci quam nemo odio rem?</p>
                    <button>More Detail</button>

                </div> */}

            </div>

        </div>
    )
}

export default Home