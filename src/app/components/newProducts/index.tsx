"use client"
import './styles.css';
import "../../../styles/css/style.css";
import "../../../styles/css/font-awesome.min.css";
import "../../../styles/css/nouislider.min.css"
import "../../../styles/css/slick-theme.css"
import "../../../styles/css/slick.css"
import "../../../styles/css/bootstrap.min.css"
import "../../utils/js/main";
import "../../utils/js/bootstrap.min.js";
import "../../utils/js/slick.min.js";
import "../../utils/js/nouislider.min.js";


export default function NewProducts(){
    return(
        <>
            		<div className="section">
			<div className="container">
				<div className="row">

					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Novos produtos</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab1">Notebooks</a></li>
									<li><a data-toggle="tab" href="#tab1">Celulares</a></li>
									<li><a data-toggle="tab" href="#tab1">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab1">Acessorios</a></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								<div id="tab1" className="tab-pane active">
									<div className="products-slick" data-nav="#slick-nav-1">
										<div className="product">
											<div className="product-img">
												<img src="./img/product01.png" alt="" />
												<div className="product-label">
													<span className="sale">-30%</span>
													<span className="new">Novidade</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Categoria</p>
												<h3 className="product-name"><a href="/productDetails">Nome do seu produto aqui</a></h3>
												<h4 className="product-price">R$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">Visualizar</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Carrinho</button>
											</div>
										</div>

										<div className="product">
											<div className="product-img">
												<img src="./img/product02.png" alt="" />
												<div className="product-label">
													<span className="new">Novidade</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Categoria</p>
												<h3 className="product-name"><a href="#">Nome do seu produto aqui</a></h3>
												<h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star-o"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">Visualizar</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Carrinho</button>
											</div>
										</div>
										<div className="product">
											<div className="product-img">
												<img src="./img/product03.png" alt="" />
												<div className="product-label">
													<span className="sale">-30%</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Categoria</p>
												<h3 className="product-name"><a href="#">Nome do seu produto aqui</a></h3>
												<h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star-o"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">Visualizar</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Carrinho</button>
											</div>
										</div>
										<div className="product">
											<div className="product-img">
												<img src="./img/product04.png" alt="" />
											</div>
											<div className="product-body">
												<p className="product-category">Categoria</p>
												<h3 className="product-name"><a href="#">Nome do seu produto aqui</a></h3>
												<h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">Visualizar</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>Carrinho</button>
											</div>
										</div>

										<div className="product">
											<div className="product-img">
												<img src="./img/product05.png" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Categoria</p>
												<h3 className="product-name"><a href="#">Nome do seu produto aqui</a></h3>
												<h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">Visualizar</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Carrinho</button>
											</div>
										</div>
									</div>
									<div id="slick-nav-1" className="products-slick-nav"></div>
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