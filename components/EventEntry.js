import React from 'react';
const timeConverter = require('../utilities/utilities');

const EventEntry = ({ event }) => (
  <div className="card grey lighten-1 row">
    <div className="card-content white-text">
      <div className="col s9 row">
        <span className="card-title col s8">{event.name}</span>
        <span className="date col s4">{`... ${timeConverter(event.timestamp)}`}</span>
        <div className="col s8">
          <span className="severity">{event.severity}</span>
        </div>
        <span className="details col s4">{'Details'}</span>
      </div>
      <div className="col s3">
        <span className="tags">{Object.keys(event.tags).map(key => <span>{key}</span>)}</span>
      </div>
    </div>
  </div>
);

EventEntry.defaultProps = {
  event: React.PropTypes.object
};

export default EventEntry;
