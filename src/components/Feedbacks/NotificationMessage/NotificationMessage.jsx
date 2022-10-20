import PropTypes from 'prop-types';
import s from './NotificationMessage.module.css'

const NotificationMessage = ({ message }) => {
    return (
        <div>
            <p className={s.message}>{message}</p>
        </div>
    )
}

export default NotificationMessage

NotificationMessage.propTypes = {
    message: PropTypes.string
}