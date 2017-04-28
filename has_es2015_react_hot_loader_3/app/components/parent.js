import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.js';

const Parent = (props) => {
    return (
        <div>
            <div>
                This is the parent
            </div>
            <Child name="child"/>
        </div>
    )
}

export default Parent;
