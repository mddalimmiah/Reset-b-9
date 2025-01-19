import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {

    // const {country, handleVisitedCountries, handleVisitedFlags}=props;
    return (
        <div>
            <h5>Country Details:</h5>
            <hr />
           {/* <CountryData 
           country={country}
           handleVisitedCountries={handleVisitedCountries}
           handleVisitedFlags={handleVisitedFlags}
           >
                
           </CountryData> */}
           {/* shortcut */}
           <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;