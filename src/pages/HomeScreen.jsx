import React, { useEffect, useState } from "react";
import SearchCoins from "../components/SearchCoins";
import TableCoins from "../components/TableCoins";
import { getCoins } from "../helpers/coinsApi";

const HomeScreen = () => {
  const [coins, setCoins] = useState(null);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    traerMonedas(inputSearch);
  }, [inputSearch]);

  const traerMonedas = async (termino) => {
    const { data } = await getCoins(termino);
    setCoins(data);
  };

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
            <button
              className="btn btn-outline-success"
              onClick={() => traerMonedas("")}
            >
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <SearchCoins
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
        />
      </div>

      <div className="row mt-5">
        {coins ? (
          <div className="col text-center">
            <TableCoins coins={coins} />
          </div>
        ) : (
          <div className="col text-center">
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
