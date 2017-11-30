import React from 'react';
import PropTypes from 'prop-types';
import { map, keys, isEmpty, isArray } from 'lodash';

class CardTree extends React.Component {
  static defaultState() {
    return {
      stepNames: [],
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      ...this.parseTree(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        ...this.parseTree(nextProps),
      });
    }
  }

  parseTree = ({ data } = this.props) => {
    const newState = CardTree.defaultState();
    // If its empty or not an array, reset state and quit
    if (!isEmpty(data) && isArray(data)) {
      const firstTreeData = data[0];
      newState.stepNames = keys(firstTreeData);
    }

    return newState;
  };

  render() {
    const {
      stepNames,
    } = this.state;

    return (
      <div
        className="card-tree card-tree-container"
      >
        {
          map(stepNames, step => (
            <div key={step} className="card-section-step">
              <div className="card-section-step-title">{step}</div>
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
