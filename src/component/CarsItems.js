import React, { useEffect } from 'react';
import Records from './records.json';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './CarsItems.css';

export default function CarsItems() {
  const cardsPerRow = 3;
  const rowsPerPage = 2;
  const cardsPerPage = cardsPerRow * rowsPerPage;
  const totalCards = Records.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      navigate(`/page/${currentPage}`);
    }
  }, [currentPage, totalPages, navigate]);
  

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentCards = Records.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      const nextPageNumber = currentPage + 1;
      navigate(`/page/${nextPageNumber}`);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const prevPageNumber = currentPage - 1;
      navigate(`/page/${prevPageNumber}`);
    }
  };

  const visiblePages = [];
  const maxVisiblePages = 10;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  for (let p = startPage; p <= endPage; p++) {
    visiblePages.push(p);
  }

  return (
    <div>
      <div className="row">
        {currentCards.map((car, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={car.image} className="card-img-top" alt={car.title} />
              <div className="card-body">
                <h5 className="card-title">{car.title}</h5>
                {car.start_production && (
                  <p className="card-text">Start Production: {car.start_production}</p>
                )}
                <p className="card-text">Class: {car.class}</p>
                <a href="/" className="btn btn-primary">
                  Rent Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination mt-3">
        <button
          className="btn btn-primary mr-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        {visiblePages.map((pageNumber) => (
          <Link
            key={pageNumber}
            to={`/page/${pageNumber}`}
          >
            <button
              className={`btn btn-secondary mr-2 ${pageNumber === currentPage ? 'active' : ''
                }`}
            >
              {pageNumber}
            </button>
          </Link>
        ))}
        <button
          className="btn btn-primary"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
