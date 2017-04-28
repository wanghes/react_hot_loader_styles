import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.js';

const Parent = (props) => {
    return (
        <div>
            <div>
                <h1>This is the parent.</h1>
            </div>
            <Child name="child"/>
        </div>
    )
}

export default Parent;
