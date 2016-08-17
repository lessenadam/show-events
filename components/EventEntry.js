import React from 'react';
import ReactTooltip from 'react-tooltip';

const timeConverter = require('../utilities/utilities');

const EventEntry = ({ event, index }) => (
  <div className="card grey lighten-1 row">
    <div className="card-content white-text">
      <div className="col s9 row">
        <div className="col s7">
          <div className="info-container-left">
            <span className="info-title">{event.name}</span>
          </div>
        </div>
        <div className="col s5">
          <div className="info-container-right">
            <span className="date">{`${timeConverter(event.timestamp)}`}</span>
          </div>
        </div>
        <div className="col s7">
          <div className="info-container-left sev-container">
            <span className="severity">{event.severity}</span>
          </div>
        </div>
        <div className="col s5">
          <div className="info-container-right">
            <span data-tip data-for={`more-info-${index}`} className="details">{'Details...'}</span>
            <ReactTooltip id={`more-info-${index}`} place='bottom' effect='solid' type='info' offset={{bottom: 20, right: 30}}>
              <div style={{maxWidth:'600px'}}>
                <p>{`Description: ${event.description}`}</p>
                <br/>
                <p>{`id: ${event.id}`}</p>
                <br/>
                <p>{`version: ${event.version}`}</p>
              </div>
            </ReactTooltip>
          </div>
        </div>
      </div>
      <div className="col s3">
        <div className="tag-container">
          <span className="tag-title">Tags</span>
          <br/>
          <span className="tags">{Object.keys(event.tags).map(tag => {
            const tagString = `${tag}: ${event.tags[tag]}`
            return (
              <div>
                <div className="chip">
                  <span>{tagString}</span>
                </div>
                <br/>
              </div>
              );
          })}</span>
        </div>
      </div>
    </div>
  </div>
);

EventEntry.defaultProps = {
  event: React.PropTypes.object
};

export default EventEntry;
