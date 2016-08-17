'use strict';

import React, { Component } from 'react';
const axios = require('axios');
import Nav from './Nav';
import EventList from './EventList';

const url = 'https://app-staging.sysdigcloud.com/api/events';
const api_token = '8aef9517-3070-4090-b55e-83296cee8cd1';
const authHeader = `Bearer ${api_token}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventList: []
    }
    this.getUpdatedEvents = this.getUpdatedEvents.bind(this);
  }

  componentDidMount() {
    this.getUpdatedEvents();
    // this.interval = setInterval(this.getUpdatedEvents, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  getUpdatedEvents() {
    var context = this;
    axios(url, { headers: { 'Authorization': authHeader } })
    .then(function (response) {
        const eventList = response.data.events;
        console.log('reponse.data? ', eventList);
        context.setState({eventList});
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    console.log('eventlist?', this.state.eventList.length > 0);
    return (
      <div className="wrapper grey lighten-4">
          <Nav clickHandler={this.getUpdatedEvents}/>
          <EventList events={this.state.eventList}/>
      </div>
    );
  }
}

// App.defaultProps = {
  
// };

export default App;
