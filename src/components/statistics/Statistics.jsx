import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css';
import { getRandomHexColor } from '../../jsFunction/colorize.js';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.list__item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={styles.stats__label}>{label}</span>
            <span className={styles.stats__value}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// ? PropTypes

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

// ! Фигурные скобки - {} в map, не позволяют отобразить результат выполнения.
// ! Дляэтого нужно или удалить их, или поставить return
