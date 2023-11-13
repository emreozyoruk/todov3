import React, { FC } from 'react'
import { görevListesiTipi } from './AppTypes'

type yeniTip = {
    görev : görevListesiTipi
    göreviSil(görevinAdı:string):void
}

function Görev({görev , göreviSil}:yeniTip) {
  return (

    <div  className='ic'>
      <div>
        <h2>{görev.görev}</h2>
        <h2>{görev.süre}</h2>
        <button onClick={()=> göreviSil(görev.görev)} >Sil</button>
      </div>
    </div>
   
  )
}

export default Görev
