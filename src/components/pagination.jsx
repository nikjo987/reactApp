import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { pageSize, totalCount, currentPage, onPageClicked } = this.props;

    const pages = _.range(1, Math.ceil(totalCount / pageSize) + 1);

    if (pages.length === 1) return null;

    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a
                className="page-link"
                onClick={() => onPageClicked(page)}
                href="/#"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
