import Image from "next/image";
import styles from "./styles.module.css";
import { Button } from "../button";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContent}>
                <div className={styles.loginContentLeft}>
                    <Image
                        className={styles.loginLeftGradiantBg}
                        src="/assets/img/login-gradiant-bg.png"
                        width="100"
                        height="100"
                        alt="Login Gradiant Bg"
                    />
                    <Image
                        className={styles.loginLeftBg}
                        src="/assets/img/login-bg.png"
                        width="100"
                        height="100"
                        alt="Login Bg"
                    />
                    <h1>all your content <strong>one Zelf.</strong></h1>
                    <Image
                        className={styles.loginLeftMobileImg}
                        src="/assets/img/login-left-mobile.png"
                        width="203"
                        height="410"
                        alt="Mobile Image"
                    />
                </div>
                <div className={styles.loginContentRight}>
                    <div className={styles.loginContentRightWrap}>
                        <h2 className={styles.loginTitle}>Register Your Account</h2>
                        <button className={styles.brandButton}>
                            <span>I Represent a Brand</span>
                        </button>
                        <Button text="Continue" />
                        <p className={styles.loginHelp}>Already a member? <a href="/api/auth/login" className={styles.loginAnchor}>Sign in</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;