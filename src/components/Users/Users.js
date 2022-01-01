import {useEffect, useState} from "react";
import User from "../User/User";
import './UsersStyle.css'

export default function Users() {
    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            })
    }, []);

    const show = (id) => {
        let finder = users.find(value => value.id === id);
        setSingleUser(finder);
    };

    return (
        <div className={'wrap'}>

            <div className={'UsersBox'}>
                {
                    users.map((value) =>
                        <User
                            key={value.id}
                            item={value}
                            func={show}
                        />)
                }
            </div>

            <div className={'UserBox'}>
                {
                    singleUser && <h2>
                        {singleUser?.id} <br/>
                        {singleUser?.name}
                    </h2>
                }
            </div>

        </div>
    )
}