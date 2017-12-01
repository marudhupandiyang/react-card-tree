import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

class SummaryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const {
      showModal,
    } = this.state;

    const {
      stepName,
      dataIndex,
      data,
    } = this.props;

    return (
      <div>
        <div className="card-summary-title">
          {data.title}
          <button style={{ float: 'right' }} onClick={this.toggleModal}>Open</button>
        </div>
        <div className="card-summary-content">
          {data.content}
        </div>
        {
          showModal &&
            (
            <Modal
              isOpen
              contentLabel="Modal"
              ariaHideApp={false}
            >
              <h1>Showing data for step {stepName}({dataIndex})</h1>
              <pre>{JSON.stringify(data, null, 2)}</pre>
              <button onClick={this.toggleModal}>close</button>
            </Modal>)
        }
      </div>);
  }
}

SummaryCard.defaultProps = {
  dataIndex: 0,
  stepName: 'Default step 1',
};

SummaryCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
  stepName: PropTypes.string,
  dataIndex: PropTypes.number,
};

export default SummaryCard;
