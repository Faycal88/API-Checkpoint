import React from "react";


function UserList(props) {

    const { list,load } = props;
    return (
        <div >
            {load ? <h1>Loading...</h1> :
                <ul>
                    <h1 style={{ textDecoration: 'underline' }} >Users List</h1>
                    {list.map((user, index) => {
                        return (
                            <li style={{ listStyle: 'none' }} key={index}>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default UserList;