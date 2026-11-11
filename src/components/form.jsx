import { useState } from "react";

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cards, setCards] = useState([]);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCard = {
            name,
            email,
        };

        setCards((prev) => [...prev, newCard]);

        setName('');
        setEmail('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row gap-2 mb-5 justify-content-center">
                    <div className="col-12">
                        <label className="label-style">Name:</label>
                        <input
                            className="input-style"
                            type="text"
                            value={name}
                            onChange={handleName}
                        />
                    </div>
                    <div className="col-12">
                        <label className="label-style">Email:</label>
                        <input
                            className="input-style mb-2"
                            type="email"
                            value={email}
                            onChange={handleEmail}
                        />

                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn bg-s" data-bs-theme='dark'>Submit</button>
                    </div>



                </div>
            </form>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {cards.map((card) => (
                    <div className="col">
                        <div className="card">

                            <div className="card-body" key={card.email}>
                                <h3 className="crimson-text-bold card-title">{card.name}</h3>
                                <p className="card-text">{card.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
