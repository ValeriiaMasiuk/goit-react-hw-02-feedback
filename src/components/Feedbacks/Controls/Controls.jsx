import PropTypes from 'prop-types';
import s from './Controls.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        (options.map((option, index)=> {
            return (
                <div className={s.buttonList}>
                    <button type="button" className={s.button} key={index} name={option} onClick={onLeaveFeedback}> {option}</button>
                    </div>
            )
        }))
    )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    option: PropTypes.string,
    index: PropTypes.number
}