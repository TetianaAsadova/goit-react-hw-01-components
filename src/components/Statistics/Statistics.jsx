import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    console.log(`stats`, stats);
    return (
        <section className={css.statistics}>
            
                <h2 className={css.title}>{title}</h2>
            
            <ul className={css.statList}>
                <li className={css.item}>
                    <span className={css.label}>{stats.label}</span>
                    <span className={css.percentage}>{stats.percentage}%</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>{stats.label}</span>
                    <span className={css.percentage}>{stats.percentage}%</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>{stats.label}</span>
                    <span className={css.percentage}>{stats.percentage}%</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>{stats.label}</span>
                    <span className={css.percentage}>{stats.percentage}%</span>
                </li>
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}