import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { itemList, columns } = this.props;
    return (
      <tbody>
        {itemList.map(item => (
          <tr key={item.id} className="table-light">
            {columns.map(column => (
              <td key={column.name}>{this.getGridCellData(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  getGridCellData = (item, column) => {
    if (column.content) return column.content(item);
    return item[column.name];
  };
}

export default TableBody;
