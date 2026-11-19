import Items from "./Items";
export default function List({children, flexDirection}) {
    return (
        <ul className={"d-flex justify-content-center gap-3 " + flexDirection}>
            {children}
        </ul>
    );
}

List.Items = Items