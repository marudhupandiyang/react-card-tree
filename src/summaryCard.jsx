import React from 'react';
import PropTypes from 'prop-types';

const SummaryCard = ({ data }) => (
  <div>
    <div className="card-summary-title">
      {data.title}
    </div>
    <div className="card-summary-content">
      {data.content}
    </div>
  </div>);

SummaryCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default SummaryCard;
