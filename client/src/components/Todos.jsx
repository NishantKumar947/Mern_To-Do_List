import { useEffect } from 'react';
import { deleteTodo, getAllTodos } from '../redux/actions/index';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import Tabs from './Tabs';

export const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done);
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done);
        }
    };

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        });
    };

    return (
        <article style={styles.article}>
            <div style={styles.headerContainer}>
                <Tabs currentTab={currentTab} />
                {todos.some(todo => todo.done) && (
                    <button
                        onClick={removeDoneTodos}
                        style={styles.clearButton}
                    >
                        Remove Done Todos
                    </button>
                )}
            </div>
            <ul style={styles.todoList}>
                {getTodos().map(todo => (
                    <Todo
                        key={todo._id}
                        todo={todo}
                    />
                ))}
            </ul>
        </article>
    );
};

const styles = {
    article: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '20px auto',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },
    clearButton: {
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.2s',
        marginTop: '10px',
    },
    clearButtonHover: {
        backgroundColor: '#c0392b',
    },
    todoList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    }
};

export default Todos;
