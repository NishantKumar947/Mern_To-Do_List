import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>TodoList</h1>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#282c34',
        padding: '20px 0', // Reduced padding for a smaller height
        textAlign: 'center',
        borderBottom: '4px solid #61dafb',
    },
    title: {
        color: 'white',
        fontSize: '2.5rem', // Reduced font size for a more compact look
        margin: 0,
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)', // Slightly adjusted shadow
    },
};

export default Header;
