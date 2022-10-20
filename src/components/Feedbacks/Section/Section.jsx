import { Component } from 'react';

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
        )
    }
}

export default Section