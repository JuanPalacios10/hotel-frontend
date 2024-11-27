export function Button({className = "", children, handleClick}) {
    const styles = className ? `btn ${className}` : "btn"

    return (
        <button className={styles} onClick={handleClick}>{children}</button>
    )
}