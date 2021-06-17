import React, {useEffect, useState} from 'react';
import  {FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import InfoBox from "./InfoBox"
import Map from "./Map"
import Table from "./Table"
import { sortData} from './util'
import LineGraph from "./LineGraph"
import "leaflet/dist/leaflet.css"
import { prettyPrintStat } from './util';
import './App.css'

const App = () => {
 
  const [countries,setCountries] = useState([]);
  const [defaultOption,setDefaultOption] = useState('worldwide');
  const [countryInfo,setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([]);
  const [mapCenter,setMapCenter] =useState({lat :34.80746 ,lng: -40.4796})
  const [mapZoom,setMapZoom] =useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  
  const fetchCountries = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMapCountries(data);
    const countriesArr = data.map( item => {
      return {
        id : item.countryInfo._id,
        country : item.country,
        value : item.countryInfo.iso2
      }
    })
    const sortedData = sortData(data);
    setTableData(sortedData);
    setCountries(countriesArr);
  }

  const fetchSingleCountry = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log()
    if(data.countryInfo){ 
      setMapCenter({lat : data.countryInfo.lat, lng :data.countryInfo.long});
      setMapZoom(4);
    }
    setCountryInfo(data);
  }

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    setDefaultOption(countryCode);

    const url = countryCode === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    fetchSingleCountry(url);
    if(countryCode == 'worldwide'){
      setMapCenter({lat : 34.80746 , lng : -40.4796});
      setMapZoom(3)
    }
  }

  useEffect( () => {
    fetchCountries("https://disease.sh/v3/covid-19/countries");

  
  },[countries])


  useEffect(()=>{
    fetchSingleCountry("https://disease.sh/v3/covid-19/all");
  },[]);

  return (
    <div className="app" > 
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
              <Select variant="outlined" value={defaultOption}  onChange={onCountryChange}  className="app__select">
              <MenuItem value="worldwide"> Worldwide</MenuItem>
                {
                  countries.map((country,index) => {
                    return (
                      <MenuItem key={index} value={country.value}> {country.country} </MenuItem>
                    )
                  })
                }
              </Select>
          </FormControl>
      </div>

      <div className="app__stats">
          <InfoBox isRed
           active= {casesType == "cases" }
           onClick={ e=> setCasesType("cases")} title="Coronavirus Cases" cases={ prettyPrintStat( countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}/>

          <InfoBox  active= {casesType == "recovered"}  onClick={ e=> setCasesType("recovered")} title="Recovered" cases={prettyPrintStat( countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}/>

          <InfoBox isRed active= {casesType == "deaths"}  onClick={ e=> setCasesType("deaths")} title="Deaths" cases={prettyPrintStat( countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
      </div>

        <Map casesType={casesType} countries={mapCountries} center ={mapCenter} zoom={mapZoom}/>
      </div>

      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3 className="app__graphTitle">Worldwide New {casesType.toUpperCase()}</h3>
          <LineGraph className="app__graph"  casesType={casesType}/>
        </CardContent>
      </Card>
    
    </div>
  );  
}

export default App;