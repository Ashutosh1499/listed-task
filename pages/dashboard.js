import React from 'react';
import styles from '@next-auth/styles/Dashboard.module.css';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import dashBoard from '../public/Icons/dashboard_icon.svg';
import transaction from '../public/Icons/transaction_icon.svg';
import transactionBlack from '../public/Icons/transaction_icon2.svg';
import schedule from '../public/Icons/schedule_icon.svg';
import users from '../public/Icons/user_icon.svg';
import settings from '../public/Icons/setting_icon.svg';
import notification from '../public/Icons/notification_icon.svg';
import InfoCard from './infoCard';
import totalRevenue from '../public/Icons/totalRevenue.svg';
import likeIcon from '../public/Icons/likeIcon.svg';
import userIcon from '../public/Icons/userIcon.svg';
import dropDown from '../public/Icons/dropDown.svg';
import Linegraph from './lineGraph';
import Piegraph from './pieGraph';
import circle1 from '../public/Icons/Ellipse3.svg';
import circle2 from '../public/Icons/Ellipse4.svg';
import circle3 from '../public/Icons/Ellipse6.svg';

const Dashboard = () => {
	const { data: session } = useSession();
	console.log(session);
	let src = '';
	if (session && session.user) {
		src += session.user.image;
	}
	return (
		<div className={`${styles.dashboardContainer} fb ac jse`}>
			<div className={`${styles.sideBarWrapper} fb as jc`}>
				<div className={`${styles.sideBarContainer}`}>
					<div className={`${styles.sideBarHeading}`}>
						<h2>Board.</h2>
					</div>
					<div className={`${styles.sideBarTabContainer}`}>
						<div className={`${styles.sideBarTab} fb ac js`}>
							<Image alt='' src={dashBoard} width={16} height={16} />
							<span className={styles.tabNames}>DashBoard</span>
						</div>
						<div className={`${styles.sideBarTab} fb ac js`}>
							<Image alt='' src={transaction} width={16} height={16} />
							<span className={styles.tabNames}>Transaction</span>
						</div>
						<div className={`${styles.sideBarTab} fb ac js`}>
							<Image alt='' src={schedule} width={16} height={16} />
							<span className={styles.tabNames}>Schedules</span>
						</div>
						<div className={`${styles.sideBarTab} fb ac js`}>
							<Image alt='' src={users} width={16} height={16} />
							<span className={styles.tabNames}>Users</span>
						</div>
						<div className={`${styles.sideBarTab} fb ac js`}>
							<Image alt='' src={settings} width={16} height={16} />
							<span className={styles.tabNames}>Settings</span>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.dashBoardContents}`}>
				<div className={`${styles.dashBoardTopBar} fb ac jsb`}>
					<div className={styles.topBarHeading}>
						<h3>Dashboard</h3>
					</div>
					<div className={`${styles.topBarfields} fb ac jc`}>
						<input type='search' placeholder='Search...' />
						<Image src={notification} alt='' width={25} height={25} />
						<Image
							className={styles.roundImage}
							loader={() => src}
							src={src}
							alt=''
							width={25}
							height={25}
						/>
					</div>
				</div>
				<div className={`${styles.infoCardsWrapper} fb ac jsb`}>
					<InfoCard
						src={totalRevenue}
						title={`Revenues`}
						detail={`$2,129,430`}
					/>
					<InfoCard
						src={transactionBlack}
						title={`Transactions`}
						detail={`1,520`}
					/>
					<InfoCard src={likeIcon} title={`Likes`} detail={`9,721`} />
					<InfoCard src={userIcon} title={`Users`} detail={`892`} />
				</div>
				<div className={`${styles.lineGraphWrapper} fb ac jc`}>
					<div className={styles.lineGraph}>
						<div className={styles.linegraphTop}>
							<h3>Activities</h3>
							<div className='fb ac jsb'>
								<span>
									May - June 2021
									<Image alt='' width={10} height={10} src={dropDown} />
								</span>
								<div className={styles.jjaugys}>
									<Image alt='' width={10} height={10} src={circle1} />
									<span>Guest</span>
									<Image alt='' width={10} height={10} src={circle2} />
									<span>User</span>
								</div>
							</div>
						</div>
						<div className={styles.linegraphDisplay}>
							<Linegraph />
						</div>
					</div>
				</div>
				<div className={`${styles.detailCards} fb ac jsb`}>
					<div className={styles.detailCard1}>
						<div className={`${styles.detailTopInfo} fb ac jse`}>
							<div className={styles.detailHeading}>
								<h3>Top products</h3>
							</div>
							<div>
								<span>May - June 2021</span>
								<Image src={dropDown} alt='' width={10} height={10} />
							</div>
						</div>
						<div className={`${styles.pieGraphArea} fb ac jc`}>
							<div className={styles.pieGraph}>
								<Piegraph />
							</div>
							<div className={styles.graphInfo}>
								<div className={`${styles.productInfo} fb ac js`}>
									<Image src={circle2} alt='' width={10} height={10} />
									<h5>Basic Tees</h5>
								</div>
								<span classname={styles.jisbg}>55%</span>
								<div className={`${styles.productInfo} fb ac js`}>
									<Image src={circle3} alt='' width={10} height={10} />
									<h5>Custom Short Pants</h5>
								</div>
								<span classname={styles.jisbg}>31%</span>
								<div className={`${styles.productInfo} fb ac js`}>
									<Image src={circle1} alt='' width={10} height={10} />
									<h5>Super Hoodies</h5>
								</div>
								<span classname={styles.jisbg}>14%</span>
							</div>
						</div>
					</div>
					<div className={styles.detailCard2}>
						<div className={`${styles.detailTopInfo} fb ac jse`}>
							<div className={styles.detailHeading}>
								<h3>{`Today's schedule`}</h3>
							</div>
							<div>
								<span>See All</span>
								<Image src={dropDown} alt='' width={10} height={10} />
							</div>
						</div>
						<div className={`${styles.meetingInfo} fb ac jc`}>
							<div className={`${styles.meetingInfoWrapper}`}>
								<div className={styles.meetings}>
									<h4>Meeting with suppliers from Kuta Bali</h4>
									<p>14:00-15:00</p>
									<p>at Sunset Road, Kuta, Bali</p>
								</div>
								<div className={styles.meetings}>
									<h4>Check operation at Giga Factory 1</h4>
									<p>18.00-20.00</p>
									<p>at Central Jakarta </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <button onClick={() => signOut()}>test</button> */}
		</div>
	);
};

export default Dashboard;
