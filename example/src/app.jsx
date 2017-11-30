import React from 'react';

import CardTree from 'react-card-tree';


class App extends React.Component {
  onCardClick = (stepName, stepIndex, data) => {
    console.log(`Clicked on ${stepName}. Associated Data: ${JSON.stringify(data)}`); // eslint-disable-line
  };

  getStepTitle = (stepName, stepIndex) => `Step ${stepIndex + 1}`;

  getStepData = (stepName, stepIndex) => [
    { id: 1, title: `Card ${stepIndex}:${stepName}`, content: 'Dummy content' },
    { id: 2, title: `Card ${stepIndex}:${stepName}`, content: 'Dummy content' },
    { id: 3, title: `Card ${stepIndex}:${stepName}`, content: 'Dummy content' },
    { id: 4, title: `Card ${stepIndex}:${stepName}`, content: 'Dummy content' },
    { id: 5, title: `Card ${stepIndex}:${stepName}`, content: 'Dummy content' },
    { id: 6, title: `Card ${stepIndex}:${stepName}`, content: 'Dummy content' },
    { id: 7, title: `Card ${stepIndex}:${stepName}`, content: 'Dummy content' },
  ];

  render() {
    const {
      getStepTitle,
      getStepData,
    } = this;

    return (
      <div>
        <CardTree
          getStepTitle={getStepTitle}
          steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7']}
          getStepData={getStepData}
          onCardClick={this.onCardClick}
        />
      </div>);
  }
}


export default App;
