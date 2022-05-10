import InputText from "./InputText";
import InputPassword from "./InputPassword";
import styles from './Form.module.css';

const TypeText = ({ id, type }) => {
    return (
        <InputText type={type} id={id} />
    );
}

const TypePassword = ({ id }) => {
    return (
        <InputPassword id={id} />
    );
}

const FormGroup = ({ id, label, type = "text" }) => {

    let inputComponent = <TypeText id={id} type={type} />

    if (type === "password") {
        inputComponent = <TypePassword id={id} />
    }

    return (
        <div className={styles['form-group']}>
            <label className={styles['text-label']} htmlFor={id}>{label}</label>
            {inputComponent}
        </div>
    )
};

export default FormGroup;
