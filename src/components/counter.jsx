import { useState } from "react";

export default function Counter() {
    const [count, setCounter] = useState(0)

    const addCounter = () => {
        setCounter((prev) => prev + 1)
    }
    const subCounter = () => {
        setCounter((prev) => prev - 1)
    }

    return (
        <>
            <h4 className="crimson-text-bold">Counter: {count}</h4>
            <div className="d-grid gap-2">
                <button type='button' className="btn bg-s" onClick={addCounter} data-bs-theme='dark'>Add</button>
                <button type='button' className="btn bg-a" onClick={subCounter} data-bs-theme='dark'>Subtract</button>
            </div>
        </>
    )
}