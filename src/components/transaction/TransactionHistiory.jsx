import React from "react";

export const TransactionHistory = ({ items }) => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
        {items.map(elem =>
            <tr key={elem.id}>
                <td>{elem.type}</td>
                <td>{elem.amount}</td>
                <td>{elem.currency}</td>
            </tr>
        )}        
  </tbody>
</table>
    )
};