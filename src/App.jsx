import './App.css'
import { useState } from "react";
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'
import Hero from './components/hero'
import Main from './components/Main'

function App() {
  // list
  const listItems = ['Meta', 'Netflix', 'Airbnb'];
  const [count, setCounter] = useState(0)
  // counter
  const addCounter = () => {
    setCounter((prev) => prev + 1)
  }
  const subCounter = () => {
    setCounter((prev) => prev - 1)
  }
  // form
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
      <Navbar />
      <Hero />
      <Header />
      <List>

        <li className="list-group-item fw-semibold color-a">Tecnologia scelta da:</li>
        {listItems.map((item, index) => (
          <List.Items key={index}>{item}</List.Items>
        ))}

      </List>
      <Main>

        <Main.Section>

          <div className="col-12">
            <h2 className="crimson-text-bold">Prova alcune delle funzionalità dei componenti React</h2>
          </div>
          <div className="col-12 col-md-6">
            <Main.Section.Counter>
              <h4 className="crimson-text-bold">Counter: {count}</h4>
              <div className="d-grid gap-2">
                <Main.Section.Counter.Button bg="bg-a" onClick={() => addCounter(count)}>Add</Main.Section.Counter.Button>
                <Main.Section.Counter.Button bg="bg-s" onClick={() => subCounter(count)}>Subtract</Main.Section.Counter.Button>
              </div>
            </Main.Section.Counter>
          </div>
        </Main.Section>

        <hr />

        <Main.Section>

          <div className="col-12">
            <Main.Section.Form onSubmit={handleSubmit}>

              <div className="row gap-2 mb-5 justify-content-center">
                <div className="col-12">
                  <label className="label-style" htmlFor='name'>Name:</label>
                  <Main.Section.Form.Input value={name}
                    id='name'
                    onChange={handleName} />
                </div>

                <div className="col-12">
                  <label className="label-style" htmlFor='email'>Email:</label>
                  <Main.Section.Form.Input value={email}
                    id='email'
                    onChange={handleEmail} />
                </div>

                <div className="col-12">
                  <Main.Section.Form.Button bg='bg-s'>Submit</Main.Section.Form.Button>
                </div>
              </div>

            </Main.Section.Form>

            <Main.Section.Card>
              <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {cards.map((card) => (
                  <div className="col" key={card.email}>
                    <div className="card">

                      <div className="card-body">
                        <h3 className="crimson-text-bold card-title">{card.name}</h3>
                        <p className="card-text">{card.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Main.Section.Card>
          </div>

        </Main.Section>
        
        <Main.Section>
          <Main.Section.LoadingData />
        </Main.Section>

      </Main>
    </>
  )
}

export default App
