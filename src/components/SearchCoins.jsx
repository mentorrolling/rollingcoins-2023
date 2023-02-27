import React from "react";

const SearchCoins = () => {
  return (
    <div className="col col-md-8 offset-md-2">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchCoins;
