const CountryData = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    return (
        <div>
           <p><small> Country Data:{country.name.common}</small></p>
           <p><small> visited Country: {handleVisitedCountries}</small></p>
           <p><small> flag: {handleVisitedFlags}</small></p>
           
        </div>
    );
};

export default CountryData;