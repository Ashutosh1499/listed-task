import React from 'react';
import styles from '@next-auth/styles/Dashboard.module.css';
import Image from 'next/image';

const InfoCard = ({ src, title, detail }) => {
	return (
		<div className={`${styles.cardWrapper} fb ac jc`}>
			<div className={styles.infoCard}>
				<div className={`${styles.infoIcon} fb ae je`}>
					<Image alt='' src={src} width={20} height={20} />
				</div>
				<div className={styles.infoTitle}>Total {title}</div>
				<div className={styles.infoDetail}>
					<h3>{detail}</h3>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
