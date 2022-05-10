import { Link } from "react-router-dom";

import Button from "../../components/Form/Button";
import Checkbox from "../../components/Form/Checkbox";
import FormGroup from "../../components/Form/FormGroup";
import styles from './Auth.module.css';

const LoginPage = () => {
    return (
        <div className="container">
            <h2 className="head-title text-primary">Login Akun</h2>
            <p className="head-subtitle opacity-50 mt-1">Untuk dapat menggunakan aplikasi ini Anda harus login akun dulu</p>
            <form className="mt-3">
                <FormGroup id="email" label="Email" type="email" />
                <FormGroup id="password" label="Password" type="password" />
                <div className="mb-3">
                    <Button
                        type="submit"
                        title="Login"
                        className="btn-primary btn-block"
                    />
                </div>
                <span className={`${styles['text-more']} text-center`}>
                    Belum punya akun?{" "}
                    <Link to="/register">Daftar</Link>
                </span>
            </form>
        </div>
    );
};

export default LoginPage;