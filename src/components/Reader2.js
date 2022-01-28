import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import axios from 'axios'
import { TableRow } from 'semantic-ui-react';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1/all/'
  })
  
export default class Reader extends Component {

    state = {
        countriesData: [],
        DisplayData: []
    }

    getCountries = async () => {
      try{
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ countriesData: data })
        console.log(this.countriesData)
      } catch (err) {
        console.log(err)
      }
    }

    onCountrySelect = () => {
      }


  render() {
    
    var heading = ["Capital","Independence","UN Membership","Region"]
    var body = []

    return <div>
        <Dropdown 
          options={this.state.countriesData.map(countryS => <div key={countryS.name.common}>{countryS.name.common}</div>)} 
          onChange={this.onCountrySelect} 
          value="" 
          placeholder="Select Country" 
          />
        <button onClick={this.getCountries}>Get Countries</button>
        <div>
            <Table heading={heading} body={body} />,
        </div>
    </div>
  }
}

class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table style={{ width: 500 }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>
        );
    }
}
