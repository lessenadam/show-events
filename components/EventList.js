import React from 'react';
import EventEntry from './EventEntry';

const EventList = ({ events }) => (
  <div>
    {events.map((event, index) => <EventEntry key={index} event={event} /> )}
  </div>
);

EventList.defaultProps = {
  events: React.PropTypes.array
};

export default EventList ;
