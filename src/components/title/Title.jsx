import styles from './Title.module.css';
import logo from '../images/logo.png';

const Title = ({ text }) => {
	return (
		<div className={styles.mainBox}>
			<img className={styles.logo} src={logo} alt="Btix Logo" />
			<h1>{text}</h1>
			<img className={styles.logo} src={logo} alt="Btix Logo" />
		</div>
	)
}

export default Title;