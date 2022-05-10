import styles from './Form.module.css';

const InputText = ({ id, type = "text", autoComplete = "off" }) => {
    return (
        <input
            className={styles['form-control']}
            type={type}
            id={id}
            autoComplete={autoComplete}
        />
    )
};

export default InputText;
