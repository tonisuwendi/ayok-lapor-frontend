import styles from './Form.module.css';

const Checkbox = ({ id, label }) => {
    return (
        <label htmlFor={id} className={styles.checkbox}>
            <div>
                <input type="checkbox" id={id} />
            </div>
            <span>{label}</span>
        </label>
    )
};

export default Checkbox;
