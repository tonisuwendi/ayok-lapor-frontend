import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import styles from './Form.module.css';

const InputPassword = ({ id, autoComplete = "off" }) => {

    const [isPassword, setIsPassword] = useState(true);

    const changeTypeHandler = () => {
        setIsPassword((prevState) => !prevState);
    }

    return (
        <div className={styles['form-control-group']}>
            <input
                className={styles['form-control']}
                type={isPassword ? "password" : "text"}
                id={id}
                autoComplete={autoComplete}
            />
            <button
                type="button"
                className={styles['eye-icon']}
                onClick={changeTypeHandler}
            >
                {isPassword ? <FaEye />: <FaEyeSlash />}
            </button>
        </div>
    )
};

export default InputPassword;
