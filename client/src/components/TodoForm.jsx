import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) { // Prevent adding empty todos
            dispatch(addNewTodo(text));
            setText('');
        }
    };

    const onInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <form style={styles.form} onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                style={styles.input}
                onChange={onInputChange}
                value={text}
            />
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
        padding: '10px',
    },
    input: {
        width: '100%',
        maxWidth: '600px', // Limit the width for better appearance on larger screens
        padding: '15px',
        fontSize: '1.1rem',
        border: '2px solid #61dafb',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        outline: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    inputFocus: {
        borderColor: '#3498db',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    }
};

export default TodoForm;
