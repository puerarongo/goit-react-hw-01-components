import PropTypes from 'prop-types';
import React from 'react';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr className={styles.line}>
          <th className={styles.cell}>Type</th>
          <th className={styles.cell}>Amount</th>
          <th className={styles.cell}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.table__body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.line}>
            <td className={styles.cell}>{type}</td>
            <td className={styles.cell}>{amount}</td>
            <td className={styles.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// ? PropTypes

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
