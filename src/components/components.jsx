import Counter from "./counter"
import Form from "./form"
export default function Components() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center text-center gap-3">
                    <div className="col-12">
                        <h2 className="crimson-text-bold">Prova alcune delle funzionalità dei componenti React</h2>
                    </div>
                    <div className="col-12 col-md-6">
                        <Counter />
                    </div>
                    <hr></hr>
                    <div className="col-12">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}