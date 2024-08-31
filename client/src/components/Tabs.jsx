import { TABS } from "../redux/actions/type";
import { useDispatch } from 'react-redux';
import { toggleTab } from "../redux/actions";

const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch();

    return (
        <div style={styles.container}>
            {TABS.map(tab => (
                <button
                    key={tab}
                    style={{
                        ...styles.button,
                        ...(tab === currentTab ? styles.selectedButton : {})
                    }}
                    onClick={() => dispatch(toggleTab(tab))}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
    },
    button: {
        backgroundColor: '#f1f1f1',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#333',
        cursor: 'pointer',
        margin: '0 5px',
        transition: 'background-color 0.3s, color 0.3s, transform 0.2s',
    },
    selectedButton: {
        backgroundColor: '#61dafb',
        color: '#fff',
        fontWeight: 'bold',
        transform: 'scale(1.05)',
    }
};

export default Tabs;
