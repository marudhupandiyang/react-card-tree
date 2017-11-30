import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

class CardTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      data,
    } = this.props;

    debugger; // eslint-disable-line

    return (
      <div
        className="card-tree-container"
      >
        {
          map(data, section => (
            <div key={section}>
              {section}
            </div>))
        }
      </div>
    );
  }
}

CardTree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
};

export default CardTree;
