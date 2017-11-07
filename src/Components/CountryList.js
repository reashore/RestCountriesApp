
import React, { Component } from 'react';

class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNames: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        const restCountriesUrl = "https://restcountries.eu/rest/v1/all";

        fetch(restCountriesUrl)
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames => this.setState({countryNames, loading: false}));
    }

    render() {
        const {countryNames, loading} = this.state;

        return (
            loading ? <div>Loading Country Names</div> : (!countryNames.length) ? 
                <div>No Country Names</div> :
                <ul>
                    {countryNames.map((countryName, index) => <li key={index}>{countryName}</li>)}
                </ul>                
        );
    }
}

export default CountryList;
