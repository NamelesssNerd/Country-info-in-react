import React, { useState } from 'react';
import './info.scss';
import axios from 'axios';

const Info = () => {
    let Inputvalue;
    let commonName = 'Nepal';
    let officialName;
    let capitalName;
    let populationCount;
    let coatOfArmsLink;
    let FlagsLink;
    const [name, setname] = useState("");
    const [country, setcountry] = useState("Nepal");
    const [official, setofficial] = useState("Federal Democratic Republic of Nepal");
    const [capital, setcapital] = useState("Kathmandu");
    const [population, setpopulation] = useState("29136808");
    const [coat, setcoat] = useState("https://mainfacts.com/media/images/coats_of_arms/np.svg");
    const [flags, setflags] = useState("https://flagcdn.com/np.svg");
    const callme = (event) => {
        Inputvalue = event.target.value;
    }
    const buttoncall = () => {
        setname(Inputvalue);
        async function Hamrofunction() {
            const Data = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            commonName = Data.data[0].name.common;
            officialName = Data.data[0].name.official;
            capitalName = Data.data[0].capital[0];
            populationCount = Data.data[0].population;
            coatOfArmsLink = Data.data[0].coatOfArms['svg'];
            FlagsLink = Data.data[0].flags['svg'];
            console.log(FlagsLink)
            setcountry(commonName);
            setofficial(officialName);
            setcapital(capitalName);
            setpopulation(populationCount);
            setcoat(coatOfArmsLink);
            setflags(FlagsLink);
        }
        Hamrofunction();
    }
    return (
        <div className="container">
            <div className="data">
                <div className="commonName">
                    <input type="text" placeholder='Search Country' onChange={callme} />
                    <button onClick={buttoncall}>Search </button>
                </div>
                <div className="commonName">
                    <h2>Common name: {country}</h2>
                </div>
                <div className="commonName">
                    <h2>Official name :{official}</h2>
                </div>
                <div className="commonName">
                    <h2>Capital : {capital}</h2>
                </div>
                <div className="commonName">
                    <h2>Population : {population}</h2>
                </div>
                <div className="coteOfArms">
                    <img src={coat} alt="" />
                </div>
                <div className="flag">
                    <img src={flags} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Info