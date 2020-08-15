import './style.css';

import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import Login from '../login/Login';
import Signup from '../login/Signup';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

class Home extends React.Component {
	render() {

		return (
			<Parallax ref={ref => (this.parallax = ref)} pages={2}>
				<ParallaxLayer offset={0} speed={0} factor={2} style={{ backgroundImage:url("stars", true), backgroundSize:"cover" }} />

				<ParallaxLayer
					offset={0}
					speed={0}
					style={{ 
						display:"flex", 
						flexDirection:"column",
						alignItems:"center", 
						justifyContent:"center",
					}}>
					<h1>MedStore is "just" a medicine store and expiration reminder</h1>
					<p>
						<Login onScrollToRegister={() => {
							this.parallax.scrollTo(1);
						}}
						/>
					</p>
				</ParallaxLayer>

			
				<ParallaxLayer
					offset={1}
					speed={0}
					style={{ 
						display:"flex", 
						flexDirection:"column",
						alignItems:"center", 
						justifyContent:"center",
					}}>
					<Signup  onScrollToLogin={() => {
						this.parallax.scrollTo(0);
					}} />

				</ParallaxLayer>
			</Parallax>
		);
	}
}

export default Home;