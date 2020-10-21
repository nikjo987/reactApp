import React, { Component } from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

class TableHead extends Component {
  render() {
    const { columns } = this.props;
    return (
      <thead className="thead-dark">
        <tr>
          {columns.map(col => (
            <th
              onClick={() => this.raiseSort(col.name)}
              key={col.title || col.name}
            >
              {col.title} {this.getSortIcon(col.name)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
  raiseSort = title => {
    const { sortColumn } = this.props;
    if (sortColumn.column === title)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.column = title;
      sortColumn.order = "desc";
    }
    this.props.onSort(sortColumn);
  };

  getSortIcon = columnName => {
    const { sortColumn } = this.props;
    if (sortColumn.column === columnName)
      return sortColumn.order === "asc" ? (
        <BsArrowUpShort />
      ) : (
        <BsArrowDownShort />
      );
  };
}

export default TableHead;
