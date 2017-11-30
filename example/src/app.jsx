import React from 'react';

import CardTree from 'react-card-tree';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          step1: { key1: 'value1', key2: 'value2' },
          step2: { key1: 'value1', key2: 'value2' },
          step3: { key1: 'value1', key2: 'value2' },
        },
      ],
    };
  }

  render() {
    const {
      data,
    } = this.state;

    return (
      <div>
        <CardTree
          data={data}
        />
      </div>);
  }
}


export default App;
