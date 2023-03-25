import React, { useEffect, useState } from 'react'
import { useFetchUsersJsonP } from '../hooks/useFetchUsersJsonP';
import CardUser from './CardUser';
import { FaUsers } from 'react-icons/fa';
import { RingLoader } from 'react-spinners';

export const UsersJsonP = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);

    return (
        <div>

            <div className='d-flex flex-wrap justify-content-around'>
                {   
                    users ? users.map((user) => <CardUser user={user} key={user.id} />)
                    :
                    <button className="btn btn-outline-primary" onClick={() => useFetchUsersJsonP('https://jsonplaceholder.typicode.com/users', setUsers, setLoading)}>
                        Request users <FaUsers />
                    </button>
                }
            </div>
                
            <div className="container d-flex justify-content-center my-2">
                { loading && <RingLoader color="#36d7b7" /> }
            </div>

        </div>

    )
}
