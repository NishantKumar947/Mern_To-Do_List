import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        dispatch(updateTodo(todo._id, text));
    };

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={styles.task(todo?.done)}
        >
            <span style={{ ...styles.todoText, display: editing ? 'none' : 'block' }}>
                {todo?.data}
            </span>

            <form
                style={{ ...styles.editForm, display: editing ? 'flex' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    style={styles.editInput}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span
                style={styles.icon('delete')}
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(deleteTodo(todo._id));
                }}
            >
                <i className="fas fa-trash" />
            </span>
            <span
                style={styles.icon('edit')}
                onClick={(e) => {
                    e.stopPropagation();
                    setEditing(prevState => !prevState);
                }}
            >
                <i className="fas fa-pen" />
            </span>
        </li>
    );
};

const styles = {
    task: (completed) => ({
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        background: completed ? '#e2e2e2' : 'linear-gradient(135deg, #f39c12, #e74c3c)', // Gradient background
        color: completed ? '#bdc3c7' : '#fff', // White text on gradient
        transition: 'background-color 0.3s, transform 0.2s',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }),
    todoText: {
        flex: 1,
        fontSize: '1.1rem',
        color: '#fff',
        marginRight: '10px',
    },
    editForm: {
        display: 'flex',
        flex: 1,
    },
    editInput: {
        flex: 1,
        padding: '5px',
        fontSize: '1rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    icon: (type) => ({
        fontSize: '1.2rem',
        marginLeft: '10px',
        cursor: 'pointer',
        transition: 'color 0.3s',
        color: type === 'delete' ? '#e74c3c' : '#3498db',
    }),
};

export default Todo;
