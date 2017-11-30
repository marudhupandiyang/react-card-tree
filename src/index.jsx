import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import SummaryCard from './summaryCard';

class CardTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStepData: [],
    };
  }

  onCardClick = (stepName, stepIndex, data, dataIndex) => {
    const {
      selectedStepData,
    } = this.state;

    if (stepIndex <= selectedStepData.length) {
      const newSelectedStepData = [].concat(selectedStepData);
      newSelectedStepData.length = stepIndex + 1;
      newSelectedStepData[stepIndex] = { data, dataIndex };
      this.setState({
        selectedStepData: newSelectedStepData,
      });

      // if the user has sent a card click func, call it..
      if (this.props.onCardClick) {
        this.props.onCardClick(stepName, stepIndex, data, dataIndex);
      }
    }
  };

  onCardKeyPress = (e, stepName, stepIndex, data, dataIndex) => {
    if (e.keyCode === 32) {
      this.onCardClick(stepName, stepIndex, data, dataIndex);
    }
  };

  getStepData = (stepName, stepIndex) => {
    if (this.canGetStepData(stepIndex)) {
      return this.props.getStepData(stepName, stepIndex) || [];
    }

    return [];
  };


  getSummaryCard = (stepName, stepIndex, data, dataIndex) => {
    const SummaryCardComponent = this.props.summaryCard || <SummaryCard />;
    return (
      <div
        className={`card-summary ${this.isCardSelected(stepIndex, data) ? 'selected' : ''}`}
        key={data.id}
        onClick={() => { this.onCardClick(stepName, stepIndex, data, dataIndex); }}
        onKeyPress={(e) => {
          this.onCardKeyPress(e, stepName, stepIndex, data, dataIndex);
        }}
        role="button"
        tabIndex="0"
      >
        {React.cloneElement(SummaryCardComponent, { data })}
      </div>);
  }

  isCardSelected = (stepIndex, data) => {
    const {
      selectedStepData,
    } = this.state;

    return (selectedStepData.length >= stepIndex && selectedStepData[stepIndex]
            && selectedStepData[stepIndex].data.id === data.id);
  }

  // if we are on first step
  // or we have slected the previous step card, then load current step data
  canGetStepData = stepIndex => (this.state.selectedStepData.length >= stepIndex);

  render() {
    const {
      showSectionTitle,
      getStepTitle,
      steps,
      stepWidth,
    } = this.props;


    return (
      <div
        className="card-tree card-tree-container "
        style={{ width: `${(steps.length * stepWidth) + (steps.length * 30)}px` }}
      >
        {
          map(steps, (stepName, stepIndex) => {
            const stepData = this.getStepData(stepName, stepIndex);
            return (
              <div key={stepName} className="card-section-step" style={{ width: stepWidth }}>
                {
                  showSectionTitle &&
                    (<div className="card-section-step-title">
                      {getStepTitle(stepName, stepIndex)}
                    </div>) // eslint-disable-line
                }
                {
                  map(stepData, (data, dataIndex) =>
                    this.getSummaryCard(stepName, stepIndex, data, dataIndex))
                }
              </div>);
          })
        }
        <div className="clearfix" />
      </div>
    );
  }
}

CardTree.defaultProps = {
  showSectionTitle: true,
  stepWidth: 300,
  onCardClick: null,
  summaryCard: null,
};

CardTree.propTypes = {
  getStepTitle: PropTypes.func.isRequired,
  getStepData: PropTypes.func.isRequired,
  onCardClick: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  showSectionTitle: PropTypes.bool,
  stepWidth: PropTypes.number,
  summaryCard: PropTypes.object, // eslint-disable-line
};

export default CardTree;
