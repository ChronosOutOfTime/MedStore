import './style.css';

import React from 'react';

import demo from '../../assets/demo.png';

class Home extends React.Component {
	render() {

		return (<>
			<h1>MedStore is "just" a medicine store and expiration reminder</h1>
			<img src={demo} alt="intros"/>
			<h1>Sign in to know more</h1>
		</>
		);
	}
}

export default Home;