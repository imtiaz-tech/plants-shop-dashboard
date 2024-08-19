import React from "react";

function Pagination(props) {
  const { nPages, currentPage, goToPage } = props;

  return (
    <div className="row g-3 mb-3">
      <div className="col-md-12">
        <nav className="justify-content-end d-flex">
          <ul className="pagination">
            <li className={`page-item ${currentPage == 1 ? "disabled" : ""}`}>
              <a className="page-link" onClick={() => goToPage(currentPage - 1)} href="#!">
                Previous
              </a>
            </li>
            {Array.from({ length: nPages }).map((item, index) => (
              <li
                className={`page-item ${index + 1 == currentPage ? "active" : ""}`}
                onClick={() => {
                  goToPage(index + 1);
                }}
              >
                <a className="page-link" href="#!">
                  {index + 1}
                </a>
              </li>
            ))}
            <li className={`page-item  ${currentPage == nPages ? "disabled" : ""}`}>
              <a className="page-link" onClick={() => goToPage(currentPage + 1)} href="#!">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
