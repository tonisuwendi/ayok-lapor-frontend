import { Link } from "react-router-dom";

import Button from "../../components/Form/Button";
import Checkbox from "../../components/Form/Checkbox";
import FormGroup from "../../components/Form/FormGroup";
import styles from './Home.module.css';

const HomePage = () => {
    return (
        <div className="container">
            <h2 className="head-title text-primary">Buat Akun</h2>
            <p className="head-subtitle opacity-50 mt-1">Untuk dapat menggunakan aplikasi ini Anda harus membuat akun</p>
            <form className="mt-3">
                <FormGroup id="name" label="Nama Lengkap" />
                <FormGroup id="email" label="Email" type="email" />
                <FormGroup id="password" label="Password" type="password" />
                <Checkbox id="terms" label="Dengan mendaftar, saya menyetujui Syarat dan Ketentuan serta Kebijakan Privasi Ayo Lapor COK" />
                <div className="mt-3 mb-3">
                    <Button
                        type="submit"
                        title="Daftar Sekarang"
                        className="btn-primary btn-block"
                    />
                </div>
                <span className={`${styles['text-more']} text-center`}>
                    Sudah punya akun?{" "}
                    <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default HomePage;