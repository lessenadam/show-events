import React from 'react';
import EventEntry from './EventEntry';

const EventList = ({ events }) => (
  <div className="container">
    {events.map((event, index) => {
      return <EventEntry key={index} index={index} event={event} />;
    })}
  </div>
);

EventList.defaultProps = {
  events: React.PropTypes.array
};

export default EventList ;
