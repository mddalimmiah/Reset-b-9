import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'


const Countries = () => {

    const [countries, setCountries] =useState([]);
    const [visitedCountries, setVisitedCountries] =useState([]);
    const [visitedFlags, setVisitedFlags] =useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries=(country) =>{
        console.log('add to visited Countries')
    //    spread operator diye noton array add korbo
    const newVisitedCountries=[...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags=flag => {
        // console.log('flag adding')
        const newVisitedFlags=[...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
           <h3>Countries: {countries.length}</h3> 
           {/* visited Countries */}
           <div>
             <h5>Visited Countries: {visitedCountries.length}</h5>
             <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>
                        {country.name.common}
                    </li>)
                }
             </ul>
           </div>
           {/* display flag */}
           <div className="flag-container">
            {
                visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
            }
            {/* idx ekta warning remove korar jonno deya hoyece key hisebe */}
           </div>

           {/* display countries */}

         <div className="country-container">
         {
            countries.map(country => <Country key={country.cca3} 
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
                country={country}></Country>)
           }
         </div>
        </div>
    );
};

export default Countries;