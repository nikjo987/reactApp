import React, { Component } from "react";

class TableBody extends Component {
  render() {
    return <tbody>{this.getBodyData()}</tbody>;
  }

  getBodyData() {
    const { itemList, columns } = this.props;
    return itemList.length > 0 ? (
      itemList.map(item => (
        <tr key={item.id} className="table-light">
          {columns.map(column => (
            <td key={column.name}>{this.getGridCellData(item, column)}</td>
          ))}
        </tr>
      ))
    ) : (
      <tr>
        <td>
          <h3>No Movies Starting with letters specified</h3>
        </td>
      </tr>
    );
  }
  getGridCellData = (item, column) => {
    if (column.content) return column.content(item);
    return item[column.name];
  };
}

export default TableBody;
