import React, { Component } from 'react';
import styles from './Title.module.css'
import logo from './logo.png';

class Title extends Component {
	render() {
		return (
			<div className={styles.mainBox}>
				<img className={styles.logo} src={logo} alt="Btix Logo" />
				<h1>{this.props.children}</h1>
				<img className={styles.logo} src={logo} alt="Btix Logo" />
			</div>
		)
	}
}

export default Title;