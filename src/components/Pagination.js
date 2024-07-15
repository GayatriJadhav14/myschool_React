import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalPages, currentPage, handlePaginationClick }) => {
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => handlePaginationClick(i + 1)}
          className={i + 1 === currentPage ? 'active' : ''}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagination;
