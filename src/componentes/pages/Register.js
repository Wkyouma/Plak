import React from 'react';
import styles from './Login.module.css';
import Button from '../layout/button';
function Register() {
    return (
        <div className={styles.hero_section}>
            <div className={styles.login_container}>
                <div className={styles.login_box}>
                     <div className={styles.login_header}>
                        <h2>Registre-se</h2>
                        <p> Seja bem-vindo </p>
                     </div>
                     <form className={styles.login_form}>
                    <div className={styles.form_group}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            required
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Senha</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="senha"
                            required
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label>Senha</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="confirmar senha"
                            required
                        />
                    </div>

             

                    <Button type="submit">Entrar</Button>
                </form>
                    

                </div>
            </div>
        </div>
    )}

export default Register;