
import { useState } from 'react';
import './country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country);
    // destructuring
    const {name, flags, population, area, cca3} =country;
    const [visited, setVisited] =useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }

    console.log(handleVisitedCountries);
    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited? 'purple': 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png}  alt="" />
            <p>Population : {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            <br />
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Visited Flag</button> 
            {/* function k jeheto call korbo r parameter pathabo tai empty array diye function likhe pathabo */}
            {
                visited? 'i have visited' : 'i want to visit this country'
            }
            <hr />
            <CountryDetail
            
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            >
               
            </CountryDetail>
        </div>
    );
};

export default Country;