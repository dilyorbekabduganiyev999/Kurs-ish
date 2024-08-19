import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { FaHeadphonesAlt } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import HomeProduct from './homeproduct';
import { useAuth0 } from "@auth0/auth0-react";
import './home.css'

const Home = ({ detail, view, close, setClose, addtocart }) => {


	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		<>
			{
				close ?
					<div className="product_detail">
						<div className="container">
							<button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
							{
								detail.map((curElm) => {
									return (
										<div className="productbox">
											<div className="img_box">
												<img src={curElm.Img} alt={curElm.Title} />
											</div>
											<div className="detail">
												<h4>{curElm.Cat}</h4>
												<h2>{curElm.Title}</h2>
												<h3>{curElm.Price}</h3>
												{
													isAuthenticated ?
														<button className='btn' onClick={() => addtocart(curElm)}>Ad to Cart</button>
														:
														<button className='btn' onClick={() => loginWithRedirect}>Ad to Cart</button>
												}
												{/* <button className='btn'>Ad to Cart</button> */}
											</div>
										</div>
									)
								})
							}
							<div className="productbox">

							</div>
						</div>
					</div> : null
			}
			<div className="top_banner">
				<div className="container">
					<div className="detail">
						<h2>The Best Note Book Collection 2024</h2>
						<Link to="/product" className='link'>Shop Now <FaArrowRightLong /></Link>
					</div>
					<div className="img_box">
						<img src='./img/product-18.jpg' alt="" />
					</div>
				</div>
			</div>
			<div className="product_type">
				<div className="container">
					<div className="box">
						<div className="img_box">
							<img src="./img/t.jpg" alt="" />
						</div>
						<div className="detail">
							<p>18 products</p>
						</div>
					</div>
					<div className="box">
						<div className="img_box">
							<img src="./img/t1.jpg" alt="" />
						</div>
						<div className="detail">
							<p>38 products</p>
						</div>
					</div>
					<div className="box">
						<div className="img_box">
							<img src="./img/t2.jpg" alt="" />
						</div>
						<div className="detail">
							<p>45 products</p>
						</div>
					</div>
					<div className="box">
						<div className="img_box">
							<img src="./img/t3.jpg" alt="" />
						</div>
						<div className="detail">
							<p>68 products</p>
						</div>
					</div>
				</div>
			</div>
			<div className="about">
				<div className="container">
					<div className="box">
						<div className="icon">
							<FiTruck />
						</div>
						<div className="detail">
							<h3>Free Shipping</h3>
							<p>Oder above $1000</p>
						</div>
					</div>
					<div className="box">
						<div className="icon">
							<BsCurrencyDollar />
						</div>
						<div className="detail">
							<h3>Return & Refund</h3>
							<p>Money Back Gaurenty</p>
						</div>
					</div>
					<div className="box">
						<div className="icon">
							<HiOutlineReceiptPercent />
						</div>
						<div className="detail">
							<h3>Member Discount</h3>
							<p>On every Order</p>
						</div>
					</div>
					<div className="box">
						<div className="icon">
							<FaHeadphonesAlt />
						</div>
						<div className="detail">
							<h3>Customer Support</h3>
							<p>Every Time Call Support</p>
						</div>
					</div>
				</div>
			</div>
			<div className="product">
				<h2>Top Products</h2>
				<div className="container">
					{
						HomeProduct.map((curElm) => {
							return (
								<div className="box" key={curElm}>
									<div className="img_box">
										<img src={curElm.Img} alt={curElm.Title}></img>
										<div className="icon">
											{
												isAuthenticated ?
													<li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
													:
													<li onClick={() => loginWithRedirect}><AiOutlineShoppingCart /></li>
											}
											{/* <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li> */}
											<li onClick={() => view(curElm)}><BsEye /></li>
											<li><AiOutlineHeart /></li>
										</div>
									</div>
									<div className="detail">
										<p>{curElm.Cat}</p>
										<h3>{curElm.Title}</h3>
										<h4>{curElm.Price}</h4>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			<div className="banner">
				<div className="container">
					<div className="detail">
						<h4>LATEST TECHNOLOGY ADDED</h4>
						<h3>Apple iPad 10.2 9th Gen - 2021</h3>
						<p>$ 986</p>
						<Link to="/product" className='link'>Shop Now<FaArrowRightLong /></Link>
					</div>
					<div className="img_box">
						<img src="./img/photo_2024-08-16_10-48-21.jpg" alt="" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home