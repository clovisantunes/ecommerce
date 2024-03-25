

export default function ProductDescription(){
    return(
        <>
 	<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-md-push-2">
						<div id="product-main-img">
							<div className="product-preview">
								<img src="./img/product01.png" alt="" />
							</div>

						
						</div>
					</div>
			
					<div className="col-md-2  col-md-pull-5">
						<div id="product-imgs">
							<div className="product-preview">
								<img src="./img/product01.png" alt=""/>
							</div>

							<div className="product-preview">
								<img src="./img/product03.png" alt=""/>
							</div>

							<div className="product-preview">
								<img src="./img/product06.png" alt=""/>
							</div>

							<div className="product-preview">
								<img src="./img/product08.png" alt=""/>
							</div>
						</div>
					</div>
					
					<div className="col-md-5">
						<div className="product-details">
							<h2 className="product-name">Notebook </h2>
							<div>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</div>
								<a className="review-link" href="#">10 comentario(s) | Adicione seu comentario</a>
							</div>
							<div>
								<h3 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h3>
								<span className="product-available">Em estoque</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

							<div className="product-options">
								<label>
									Tamanho
									<select className="input-select">
										<option value="0">X</option>
									</select>
								</label>
								<label>
									Cor
									<select className="input-select">
										<option value="0">Vermelho</option>
									</select>
								</label>
							</div>

							<div className="add-to-cart">
								<div className="qty-label">
									QTD
									<div className="input-number">
										<input type="number"/>
										<span className="qty-up">+</span>
										<span className="qty-down">-</span>
									</div>
								</div>
								<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i><a href="/checkout">Comprar</a></button>
							</div>

							<ul className="product-btns">
								<li><a href="#"><i className="fa fa-heart-o"></i> Favoritos</a></li>
								<li><a href="#"><i className="fa fa-exchange"></i>Comparar</a></li>
							</ul>

							<ul className="product-links">
								<li>Categorias:</li>
								<li><a href="#">Notebooks</a></li>
								<li><a href="#">Computadores</a></li>
							</ul>

							<ul className="product-links">
								<li>Compartilhar:</li>
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-envelope"></i></a></li>
							</ul>

						</div>
					</div>
		
					<div className="col-md-12">
						<div id="product-tab">
							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Descrição</a></li>
								<li><a data-toggle="tab" href="#tab2">Detalhes</a></li>
								<li><a data-toggle="tab" href="#tab3">Comentarios (10)</a></li>
							</ul>
					
							<div className="tab-content">
								<div id="tab1" className="tab-pane fade in active">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
						
								<div id="tab2" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
	
								<div id="tab3" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-3">
											<div id="rating">
												<div className="rating-avg">
													<span>4.5</span>
													<div className="rating-stars">
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star-o"></i>
													</div>
												</div>
												<ul className="rating">
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-progress">
															<div style={{width: "80%"}}></div>
														</div>
														<span className="sum">3</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div style={{width: "60%"}}></div>
														</div>
														<span className="sum">2</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
												</ul>
											</div>
										</div>
									
										<div className="col-md-6">
											<div id="reviews">
												<ul className="reviews">
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
												</ul>
												<ul className="reviews-pagination">
													<li className="active">1</li>
													<li><a href="#">2</a></li>
													<li><a href="#">3</a></li>
													<li><a href="#">4</a></li>
													<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
												</ul>
											</div>
										</div>
							
										<div className="col-md-3">
											<div id="review-form">
												<form className="review-form">
													<input className="input" type="text" placeholder="Your Name" />
													<input className="input" type="email" placeholder="Your Email" />
													<textarea className="input" placeholder="Your Review"></textarea>
													<div className="input-rating">
														<span>Your Rating: </span>
														<div className="stars">
															<input id="star5" name="rating" value="5" type="radio" /><label id="star5"></label>
															<input id="star4" name="rating" value="4" type="radio"/><label id="star4"></label>
															<input id="star3" name="rating" value="3" type="radio"/><label id="star3"></label>
															<input id="star2" name="rating" value="2" type="radio"/><label id="star2"></label>
															<input id="star1" name="rating" value="1" type="radio"/><label id="star1"></label>
														</div>
													</div>
													<button className="primary-btn">Submit</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}