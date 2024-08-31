import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Todo from '../Todo';

// Clean up after each test
afterEach(cleanup);

describe('Todo Component Tests', () => {

    // Set up mock store
    const mockStore = configureStore();
    const initialState = { state: [] };
    const store = mockStore(initialState);

    test('should render the todo component', () => {
        render(
            <Provider store={store}>
                <Todo />
            </Provider>
        );

        const todoElement = screen.getByTestId('todo-test');
        expect(todoElement).toBeInTheDocument();
    });

    test('should render the provided todo data', () => {
        const todo = { data: 'This is a task', done: true, createdAt: '' };

        render(
            <Provider store={store}>
                <Todo todo={todo} />
            </Provider>
        );

        const todoElement = screen.getByTestId('todo-test');

        expect(todoElement).toHaveTextContent('This is a task');
        expect(todoElement).not.toContainHTML('<ul>');
    });

    test('matches snapshot', () => {
        const todo = { data: 'This is a task', done: true, createdAt: '' };

        const tree = renderer.create(
            <Provider store={store}>
                <Todo todo={todo} />
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

});
