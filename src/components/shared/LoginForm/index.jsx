const LoginForm = () => {
    const styles = {
        form: {
            display: "flex", 
            flexDirection: "column", 
            gap: "10px", 
            maxWidth: "300px", 
            margin: "auto",
        },
        input: {
            padding: "10px", 
            fontSize: "16px", 
            border: "1px solid #ccc",
            borderRadius: "4px",
        },
        button: {
            padding: "10px", 
            borderRadius: "4px", 
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
        }
    }
    return (
        <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Username" required />
            <input style={styles.input} type="text" placeholder="Email" required />
            <input style={styles.input} type="password" placeholder="Password" required />
            <input style={styles.button} type="button" value="Login" />
        </form>
    )
}

export default LoginForm;