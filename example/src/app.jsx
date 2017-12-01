import React from 'react';
import CardTree from 'react-card-tree';
import SummaryCard from './summaryCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        id: 1,
        title: 'class X',
        content: 'Class X content',
        sections: [
          {
            id: 1,
            title: 'Class X-A',
            content: 'Section X-A',
            students: [
              { id: 1, title: 'Raju', content: 'Reg No: 01' },
              { id: 2, title: 'Kumar', content: 'Reg No: 02' },
            ],
          },
          {
            id: 2,
            title: 'Class X-B',
            content: 'Section X-B',
            students: [
              {
                id: 3,
                title: 'Suresh',
                content: 'Reg No: 03',
              },
              {
                id: 4,
                title: 'John',
                content: 'Reg No: 04',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'class IX',
        content: 'Class IX content',
        sections: [
          {
            id: 3,
            title: 'Class IX-A',
            content: 'Section IX-A',
            students: [
              {
                id: 5,
                title: 'Avera',
                content: 'Reg No: 05',
              },
              {
                id: 6,
                title: 'Bradley',
                content: 'Reg No: 06',
              },
            ],
          },
          {
            id: 4,
            title: 'Class IX-B',
            content: 'Section IX-B',
            students: [
              {
                id: 7,
                title: 'Kimberley',
                content: 'Reg No: 07',
              },
              {
                id: 8,
                title: 'Ross',
                content: 'Reg No: 08',
              },
            ],
          },
        ],
      },
    ];

    this.steps = ['Class', 'Sections', 'Students'];
  }

  onCardClick = (stepName, stepIndex, data) => {
    console.log(`Clicked on ${stepName} ${stepIndex} ${data}`); // eslint-disable-line
  };

  getStepTitle = (stepName, stepIndex) => this.steps[stepIndex];

  getStepData = (stepName, stepIndex, parentSelectedData) => {
    switch (stepIndex) {
      case 0:
        return this.data;

      case 1:
        return parentSelectedData.data.sections;

      case 2:
        return parentSelectedData.data.students;

      default:
        return [];
    }
  }

  render() {
    const {
      getStepTitle,
      getStepData,
    } = this;

    return (
      <div>
        <CardTree
          getStepTitle={getStepTitle}
          steps={this.steps}
          getStepData={getStepData}
          onCardClick={this.onCardClick}
          summaryCard={SummaryCard}
        />
      </div>);
  }
}


export default App;
