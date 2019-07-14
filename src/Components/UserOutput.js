import React from 'react';

const UserOutputComponent = (props) => {
    return (
        <div>
            <p>User Name</p>
            <p>{props.username}</p>
        </div>
    );
}

export default UserOutputComponent;