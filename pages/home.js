import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '@next-auth/styles/Home.module.css';
import Dashboard from './dashboard';
import Image from 'next/image';
import googleIcon from '../public/Icons/googleIcon.svg';
import appleIcon from '../public/Icons/appleIcon.svg';
import Link from 'next/link';

function Home() {
	const { data: session } = useSession();

	if (session) {
		return <Dashboard />;
	} else {
		return (
			<div className={`${styles.container} fb ac jc`}>
				<div className={`${styles.board} fb ac jc`}>Board.</div>
				<div className={`${styles.signInContainer} fb ac jc`}>
					<div className={styles.signInBox}>
						<h2>Sign In</h2>
						<span>Sign in to your account</span>
						<div className={`${styles.signInOptions} fb ac jc`}>
							<div className={`${styles.signInButtons} fb ac js`}>
								<button onClick={() => signIn()} className={`fb ac jse`}>
									<Image src={googleIcon} alt='' width={12} height={12} />
									Sign in with Google
								</button>
							</div>
							<div className={`${styles.signInButtons} fb ac je`}>
								<button className={`fb ac jse`}>
									<Image src={appleIcon} alt='' width={12} height={12} />
									Sign in with Apple
								</button>
							</div>
						</div>
						<div className={`${styles.signInManuallyWrapper} fb ac jc`}>
							<div className={styles.signInManually}>
								<div className={`${styles.inputLabel}`}>
									<label htmlFor='email'>Email address</label>
								</div>
								<input type='email' />
								<div className={`${styles.inputLabel}`}>
									<label htmlFor='password'>Password</label>
								</div>
								<input type='password' />
								<Link href='/'>Forgot password?</Link>
								<button className={styles.manualSignInButton}> Sign In</button>
							</div>
						</div>
						<span>
							Dont have an account? <span>Register here</span>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
