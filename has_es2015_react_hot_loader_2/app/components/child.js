import React from 'react';
import ReactDOM from 'react-dom';

const Child = (props) => {
    return (
        <div>
	            <h2>and this is the &nbsp;
	            <b>{props.name}</b>.
            </h2>
        </div>
    )
}
export default Child;
