export default function Esercizio2List() {
    const items = ['Luca', 'Paolo', 'Francesco'];
    return (
        <ul>
            {items.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
    );
}