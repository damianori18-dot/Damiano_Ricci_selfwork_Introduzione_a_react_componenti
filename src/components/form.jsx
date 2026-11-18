import Button from "./Button";
import Input from "./Input";

export default function Form({ onSubmit, children }) {

    return (
        <>
            <form onSubmit={onSubmit}>
                {children}
            </form>
            
        </>
    );
};

Form.Input = Input
Form.Button = Button
