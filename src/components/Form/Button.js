import styles from './Form.module.css';

const Button = ({ type = "button", className = '', title }) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            type={type}
        >
            {title}
        </button>
    )
};

export default Button;
