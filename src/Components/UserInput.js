import React from 'react';

const UserInputComponent = (props) => {
    return (
        <div>
            <input onChange={props.onchangehandler} value={props.startValue} ></input>
        </div>
    );
}

export default UserInputComponent;