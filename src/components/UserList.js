import React from 'react';
import UseResources from './useResources';

const userList=()=>{
    const response=UseResources('users');
    return (
        <ul>{response.map(user=><li key={user.id}>{user.name}</li>)}</ul>
    );
}

export default userList;