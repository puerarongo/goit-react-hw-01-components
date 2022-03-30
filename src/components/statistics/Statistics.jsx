import PropTypes from 'prop-types';
import React from "react";
import styles from "./Statistics.module.css";
import { getRandomHexColor } from "../../jsFunction/colorize.js";


export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.container}>
            {title && (
                <h2 className={styles.title}>{title}</h2>
            )}
            <ul className={styles.list}>
                {stats.map(elem =>
                    <li key={elem.id} className={styles.list__item} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className={styles.stats__label}>{elem.label}</span>
                        <span className={styles.stats__value}>{elem.percentage}%</span>
                    </li>
                )}
            </ul>
        </section>
    )
};

// ? PropTypes

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};


// ! Фигурные скобки - {} в map, не позволяют отобразить результат выполнения. 
// ! Дляэтого нужно или удалить их, или поставить return