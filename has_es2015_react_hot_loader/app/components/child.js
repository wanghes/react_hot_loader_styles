import React from 'react';
import ReactDOM from 'react-dom';

const Child = (props) => {
    return (
        <div>
            and this is the
            <b>{props.name}</b>.
        </div>
    )
}
export default Child;
