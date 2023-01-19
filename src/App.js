import React from 'react';
import uuid from 'react-uuid';
import './style.css';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

class App extends React.Component {
  state = {
    tableData: [],
  };

  submitAdd = (e) => {
    e.preventDefault();

    let addData = {};
    addData.id = uuid();
    addData.name = e.target[0].value;
    addData.age = e.target[1].value;
    addData.education = e.target[2].value;

    this.setState({ tableData: [addData, ...this.state.tableData] });
  };

  updateTableData = (data) => {
    this.setState({ tableData: data });
  };

  render() {
    return (
      <div>
        <ComponentA onAddClicked={this.submitAdd} />
        <ComponentB
          tableData={this.state.tableData}
          onDeleteClicked={this.updateTableData}
        />
      </div>
    );
  }
}

export default App;
