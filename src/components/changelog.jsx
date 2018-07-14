import React from 'react';
import moment from 'moment';

export default ({ items = [] }) => (
  <div>
    <h1>Changelog</h1>

    {items.map(({ version, date, description }) => {
      const parsedDate = moment(date);
      return (
        <div className="changelog-item" key={version}>
          <p>
            <span className="changelog-version">{version}</span>
            <br />
            {parsedDate.isValid() ? (
              <span
                className="changelog-date"
                title={parsedDate.format('Do MMM YYYY')}
              >
                {parsedDate.fromNow()}
              </span>
            ) : (
              <span className="changelog-date">TBC</span>
            )}
          </p>
          <p className="changelog-description">{description}</p>
        </div>
      );
    })}
  </div>
);
