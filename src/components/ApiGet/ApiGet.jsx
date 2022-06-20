import { useState, useEffect } from 'react';
import './ApiGet.css';
import axios from 'axios';
import ApiComponent from '../ApiComponent/ApiComponent';

const ApiGet = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {

        axios('https://api.github.com/users')
            .then((res) => setUsers(res.data));

    }, []);
    return (
        <div className='Api-Container '>
            {users.map((x) => (<ApiComponent tool={x} />))}
        </div>
    )
}

export default ApiGet