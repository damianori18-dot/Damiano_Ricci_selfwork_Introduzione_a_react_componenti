export default function List() {
    const items = ['Meta', 'Netflix', 'Airbnb'];
    return (
        <ul className="d-flex justify-content-center gap-3">
            <li className="list-group-item fw-semibold color-a">Tecnologia scelta da:</li>
            {items.map((item) => (
                <li className="list-group-item" key={item}>
                    {item}
                </li>
            ))}
        </ul>
    );
}