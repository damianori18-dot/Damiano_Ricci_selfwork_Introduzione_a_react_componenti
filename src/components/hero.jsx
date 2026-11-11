import { useState } from "react";
export default function Hero() {
    const [name, setName] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    };
    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center crimson-text-bold color-s">Benvenuto in React {name}!</h1>
                    </div>
                    <div className="col-12">
                        <label className="label-style">Name:</label>
                        <input className="input-style"
                            type="text"
                            value={name}
                            onChange={handleName}
                        />

                    </div>
                </div>

            </div>

        </>
    );
}