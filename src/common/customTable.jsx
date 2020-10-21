import React, { Component } from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

class CustomTable extends Component {
  render() {
    const { caption, columns, itemList, sortColumn, onSort } = this.props;
    return (
      <table className="table table-hover">
        <caption>
          Top Curated movies by R<sup>2</sup>.
        </caption>
        <TableHead columns={columns} onSort={onSort} sortColumn={sortColumn} />
        <TableBody columns={columns} itemList={itemList} />
      </table>
    );
  }
}

export default CustomTable;
