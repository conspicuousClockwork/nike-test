import React, { Component } from 'react';
import Column from './Column'
class NikeFooter extends Component {
  render() {
    let columns;
    if (this.props.footer.columns) {
      columns = this.props.footer.columns.map(column => {
        return (<Column key={column.title} column={column} />);
      });
    }
    return (
      <footer>
        <div className="NikeFooter container-fluid">
          <div className="row">
            {columns}
          </div>
        </div>
      </footer>
    );
  }
}

export default NikeFooter;
