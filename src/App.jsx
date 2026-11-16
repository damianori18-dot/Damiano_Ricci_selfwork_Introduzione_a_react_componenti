import './App.css'
import { useState } from "react";
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'
import Hero from './components/hero'
import Main from './components/Main'
import Section from './components/Section'
import Counter from './components/counter'
import Form from './components/form'
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

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

        <Section>

          <div className="col-12">
            <h2 className="crimson-text-bold">Prova alcune delle funzionalità dei componenti React</h2>
          </div>
          <div className="col-12 col-md-6">
            <Counter>
              <h4 className="crimson-text-bold">Counter: {count}</h4>
              <div className="d-grid gap-2">
                <Button onClick={() => addCounter(count)}>Add</Button>
                <Button onClick={() => subCounter(count)}>Subtract</Button>
              </div>
            </Counter>
          </div>
          <hr />

        </Section>

        <Section>

          <div className="col-12">
            <Form onSubmit={handleSubmit}>

              <div className="row gap-2 mb-5 justify-content-center">
                <div className="col-12">
                  <label className="label-style" htmlFor='name'>Name:</label>
                  <Input value={name}
                    id='name'
                    onChange={handleName} />
                </div>

                <div className="col-12">
                  <label className="label-style" htmlFor='email'>Email:</label>
                  <Input value={email}
                    id='email'
                    onChange={handleEmail} />
                </div>

                <div className="col-12">
                  <Button type="submit">Submit</Button>
                </div>
              </div>

            </Form>

            <Card>
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
            </Card>
          </div>

        </Section>

      </Main>
    </>
  )
}

export default App
