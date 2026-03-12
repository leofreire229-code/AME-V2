import { LoginForm } from '../components/LoginForm'
import styles from './LoginPage.module.css'

export function LoginPage() {
    return (
        <section className={styles.page}>
        <div className={styles.backgroundGlow} />
        <div className={styles.content}>
        <span className={styles.brandEyebrow}>ÓRION LAB</span>
        <h1 className={styles.title}>Estruturando ideias sobre Deus</h1>
        <p className={styles.description}>
        Organize, analise e desenvolva ideias com pofundidade estrutural.
        </p>
        </div>
        <div className={styles.card}>
            <LoginForm />
        </div>
           
        </section>
    )

}