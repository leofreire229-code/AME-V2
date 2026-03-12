import { LoginForm } from '../components/LoginForm'
import styles from './LoginPage.module.css'

export function LoginPage() {
    return (
        <section className={styles.page}>
        <div className={styles.backgroundGlow} />
        <div className={styles.wrapper}>
            <div className={styles.brandBlock}>
                <img 
                src="/logo-orion.png"
                alt="ÓRION LAB"
                className={styles.logo}
            />

        </div>
        
        <div className={styles.card}>
            <LoginForm />
        </div>
           </div>
        </section>
    )

}