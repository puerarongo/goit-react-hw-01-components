import PropTypes from 'prop-types';
import React from "react";

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && (
                <h2 className="title">{title}</h2>
            )}
            <ul className="stat-list">
                {stats.map(elem =>
                    <li key={elem.id} className="item">
                        <span className="label">{elem.lable}</span>
                        <span className="percentage">{elem.percentage}%</span>
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