import React, {useReducer, useState} from 'react';
import './Landing.css';
import TopBar from './TopBar.js';
import CategoryBar from './CategoryBar.js';
import LoginDropdown from '../components/Login/LoginDropdown';
import RegisterDropdown from '../components/Login/RegisterDropdown';
import ItemList from '../components/ItemList';

function LandingPage(){
	// Getter and setter for visibility, by default invisible
	let [loginIsVisible, setLoginVisibility] = useState(false);
	let [registerIsVisible, setRegisterVisibility] = useState(false);
	let [loggedIn, setLoggedIn] = useState(false);
	let [getGreeting, setGreeting] = useState("");

	let toggleLogin = () => {
		setRegisterVisibility(false);
		setLoginVisibility(true);
	};

	let toggleRegister = () => {
		setLoginVisibility(false);
		setRegisterVisibility(true);
	};

	let displayAccount = (login) => {
		setLoginVisibility(false);
		setLoggedIn(true);
		setGreeting("Hi, " + login);
	};

	let onRegister = () => {
		setRegisterVisibility(false);
	}

	let isDark = loginIsVisible | registerIsVisible;

	return (
		<div id = "page">
			{// When greeting is empty for callback, login button appears
			}
			<TopBar callback = {toggleLogin} greeting = {getGreeting}/>
			<CategoryBar />
			<h2>{getGreeting}</h2>
			<LoginDropdown switchToRegister = {toggleRegister} visible = {loginIsVisible} onLogin = {displayAccount}/>
			<RegisterDropdown switchToLogin = {toggleLogin} visible = {registerIsVisible} onRegister = {onRegister}/>
			<div id = "darkScreen" style = {{opacity: isDark ? "70%" : "0%"}}/>
			
			<main>
				{loggedIn ? <ItemList/> : <div/>}
				<div className="section section2">
					<h2>Recommended for you</h2>
					<ul>
						<li>Product 1</li>
						<li>Product 2</li>
						<li>Product 3</li>
					</ul>
				</div>
			</main>
		</div>
	);
}

export default LandingPage;