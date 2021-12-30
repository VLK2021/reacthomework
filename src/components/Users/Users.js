import {useEffect, useState} from "react";
import User from "../User/User";
import './UsersStyle.css'

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            })
    }, []);

    const show = (id) => {
        let find = users.find(value => value.id===id);
        console.log(find);
    };

    return(
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

            </div>

        </div>
    )
}