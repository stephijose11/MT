import { useEffect, useState } from "react";
import '../../src/pages/Home.css';
const url='https://restcountries.com/v2/all?fields=name,region,flag'
const Home = () => {
   const [countries, SetCountries]=useState([]);
   
     const fetchCountryData = async()=>{
        const response = await fetch(url)
        const countries=await response.json()
        SetCountries(countries)
        console.log(countries)

     }
     useEffect(()=>{
        fetchCountryData()
   },[])
    return(
        <>
     <section className="grid">
     {countries.map((country)=>{
        const {name,flag,region}=country
        return<article key={name}>
            <div><img width="200px" height="170px" src={flag} alt={name}/><h3>{name}</h3>
            <h4>Region:{region}</h4></div>
        </article>
      })}
     </section>
      </>
    )
}
export default Home;