import React from 'react';

const EventEntry = ({ event }) => (
  <div className="col s12">
    <div className="card blue-grey">
      <div className="card-content white-text">
        <span className="card-title">{event.name}</span>
      </div>
    </div>
  </div>
);

EventEntry.defaultProps = {
  event: React.PropTypes.object
};

export default EventEntry;
