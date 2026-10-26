import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import Carddata from '../components/Carddata'

const Card = () => {
 const {cardIteam} = useContext(MyStore)
  return (
    <div className='grid grid-cols-3 gap-3'>
      {
        cardIteam.map((ele)=>{
          return<Carddata product={ele}/>
        })
      }
    </div>
  )
}

export default Card
