import React ,{ChangeEvent, FC} from 'react';
import './App.css';
import { useState } from 'react';
import { görevListesiTipi } from './AppTypes';
import Görev from "./Görev"

const App : FC = () => {

const [görev , setGörev] = useState <string> ("")
const [süre , setSüre] = useState <number> (0)
const [görevListesi , setGörevListesi] = useState <görevListesiTipi[]>([])


const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
if(event.target.name === "görev"){
  setGörev(event.target.value)
}
else{
  setSüre(Number(event.target.value))
}
}

const görevEkleme = () => {
  const yeniGörev = {
    görev: görev,
    süre: süre
  };
  setGörevListesi([...görevListesi, yeniGörev]);
  setGörev("")
  setSüre(0)
}
const göreviSil = (görevinAdı:string) : void => {
  setGörevListesi(görevListesi.filter((görev)=> {
    return görev.görev !== görevinAdı
  }))

}


  return (
    <>
    <div className="App">
     <input className='input' type="text" value={görev} placeholder='Görev Ne ?' name='görev' onChange={handleChange} />
     <input className='input' type="number" value={süre} placeholder='Kaç Günde Tamamlanacak' name='süre' onChange={handleChange} />
     <button className='buttonEkle' onClick={görevEkleme} >Görev Ekle</button>
    </div>
    <div className='ana'>

         {görevListesi.map((görev : görevListesiTipi , index : number)=> {
          return <Görev key={index} görev = {görev} göreviSil={göreviSil} />
         })}
    </div>
    </>
  );
}

export default App;
