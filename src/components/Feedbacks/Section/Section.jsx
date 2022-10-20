import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
        <div className={s.wrapper}>
            <h1 className={s.sectionHeader}>{title}</h1>
            {children}
        </div>
        )
    }
}

export default Section

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}