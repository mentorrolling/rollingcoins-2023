import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";

const TableCoins = ({ coins }) => {
  return (
    <table className="table table-hover table-coins">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Price Usd</th>
          <th>Change 24Hr</th>
        </tr>
      </thead>

      <tbody>
        {coins.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.rank}</td>
            <td className="img-icon">
              <Link to={`/coin/${coin.id}`}>
                <img
                  src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                  alt={coin.name}
                />
              </Link>
            </td>
            <td>{coin.name}</td>
            <td>{numeral(coin.priceUsd).format("$0,0.00")}</td>
            <td
              className={
                coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
              }
            >
              {parseFloat(coin.changePercent24Hr).toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
