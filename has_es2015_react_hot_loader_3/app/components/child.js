import React from 'react';
import ReactDOM from 'react-dom';

const Child = (props) => {
    return (
        <div>
            this is the&nbsp;
            <b>{props.name}</b>.
        </div>
    )
}
export default Child;
