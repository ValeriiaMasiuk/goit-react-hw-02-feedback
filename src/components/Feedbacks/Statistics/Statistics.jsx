import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <ul className={s.list}>
                <li className={s.listItem}>Good: {good}</li>
                <li className={s.listItem}>Neutral: {neutral}</li>
                <li className={s.listItem}>Bad: {bad}</li>
                <li className={s.listItem}>Total: {total}</li>
                <li className={s.listItem}>% of positive feedbacks: {positivePercentage}%</li>
            </ul>
        </div>
    )
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}