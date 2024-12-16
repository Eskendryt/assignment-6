function Child() {
    const value = useContext(AppContext);

    return (
        <div>
            <h1>Child</h1>
            <p>Received: {value}</p>
        </div>
    );
}

export default Child;