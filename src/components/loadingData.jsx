import { useState, useEffect } from "react";
import List from "./List";
import Button from "./Button";
export default function LoadingData() {
    // loadingData
    const [users, setUsers] = useState([]);
    const [trigger, setTrigger] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false)
            setTrigger(false)
            setUsers(null)
        }
        else {
            setIsVisible(true)
            setTrigger(true)
        }
    };


    const getData = async () => {
        const promise = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await promise.json();
        setUsers(json);
        console.log(json);

    }

    useEffect(() => {
        if (trigger) {
            getData();
        }
    }, [trigger])

    return (
        <>
            <Button onClick={handleClick} bg='bg-s'>Mostra utenti</Button>
            <List flexDirection="flex-column">

                {isVisible && users && users.map((user) => (
                    <List.Items key={user.id}>{user.name} / {user.email}</List.Items>
                ))}

            </List>
        </>
    )
}