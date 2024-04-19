import {useEffect,useState} from 'react'



function useCurrencyInfo(currency){
    const [data,setData]=useState({})
   useEffect(()=>{
      fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest${currency}.json`)
      .then((res)=>res.json())
      .then((res)=>setData(res[currency]))
},[currency])
 console.log(data);
 return data
}

export default useCurrencyInfo;