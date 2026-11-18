import Section from "./Section"

export default function Main({children}) {
    return (
        <>
            <main className="container">
                {children}
            </main>
        </>
    )
}

Main.Section = Section