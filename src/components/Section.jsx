import Card from "./Card"
import Counter from "./counter"
import Form from "./form"

export default function Section({ children }) {
    return (
        <>
            <section className="row justify-content-center text-center gap-3">
                {children}
            </section>
        </>
    )
}

Section.Counter = Counter
Section.Form = Form
Section.Card = Card