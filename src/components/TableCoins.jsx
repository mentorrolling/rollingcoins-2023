import React from "react";

const TableCoins = () => {
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

      <tbody>{/* celdas con información da cada cripto  */}</tbody>
    </table>
  );
};

export default TableCoins;
