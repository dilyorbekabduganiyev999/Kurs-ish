import React from 'react'
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import "./footer.css"

const Footer = () => {
  return (
	<>
	<div className="footer">
		<div className="container">
			<div className="about">
				<div className="logo">
					{/* <img src="./img/logo.svg copy.jpg" alt="logo" /> */}
				</div>
				<div className="detail">
					<p>We are  a team of designers and developers that create high quality WordPress</p>
					<div className="icon">
						<li><RiFacebookBoxFill/></li>
						<li><AiOutlineInstagram/></li>
						<li><AiOutlineTwitter/></li>
						<li><BsYoutube/></li>
					</div>
				</div>
			</div>
			<div className="accaunt">
				<h3>My Accaunt</h3>
				<ul>
					<li>Accaunt</li>
					<li>Order</li>
					<li>Cart</li>
					<li>Shipping</li>
					<li>return</li>
				</ul>
			</div>
			<div className="page">
				<h3>Pages</h3>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Terma & Condition</li>
				</ul>
			</div>
		</div>
	</div>
	</>
  )
}

export default Footer