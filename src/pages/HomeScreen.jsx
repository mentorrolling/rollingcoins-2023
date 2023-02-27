import React from "react";
import NavBarApp from "../components/NavBarApp";

const HomeScreen = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h1>🪙Cripto Currency</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-success" onClick="">
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">{/* Barra de búsqueda  */}</div>

      <div className="row mt-5">
        <div className="col text-center">{/* Tabla  */}</div>
      </div>
    </div>
  );
};

export default HomeScreen;
