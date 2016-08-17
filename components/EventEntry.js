import React from 'react';

const EventEntry = ({ event }) => (
  <div>
    {event.name}
  </div>
);

EventEntry.defaultProps = {
  event: React.PropTypes.object
};

export default EventEntry;
