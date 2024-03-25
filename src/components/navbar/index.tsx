"use client"
import "../../styles/css/style.css";
import "../../styles/css/font-awesome.min.css";
import "../../styles/css/nouislider.min.css"
import "../../styles/css/slick-theme.css"
import "../../styles/css/slick.css"
import "../../styles/css/bootstrap.min.css"
import './styles.css';
import { useState } from "react";
export default function NavBar(){

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return(
<header>
<div id="top-header">
    <div className="container">
        <ul className="header-links pull-left">
            <li><a href="#"><i className="fa fa-phone"></i> +XX-XXXX-XX</a></li>
            <li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
            <li><a href="#"><i className="fa fa-map-marker"></i> RS</a></li>
        </ul>
        <ul className="header-links pull-right">
            <li><a href="#"><i className="fa fa-dollar"></i> RS</a></li>
            <li><a href="#"><i className="fa fa-user-o"></i> Minha conta</a></li>
        </ul>
    </div>
</div>

<div id="header">

    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="header-logo">
                    <a href="#" className="logo">
                        <img src="./img/logo.png" alt="" />
                    </a>
                </div>
            </div>

            <div className="col-md-6">
                <div className="header-search">
                    <form>
                        <select className="input-select">
                            <option value="0">Todas categorias</option>
                            <option value="1">Categoria 01</option>
                            <option value="1">Categoria 02</option>
                        </select>
                        <input className="input" placeholder="Search here" />
                        <button className="search-btn">Procurar</button>
                    </form>
                </div>
            </div>

            <div className="col-md-3 clearfix">
                <div className="header-ctn">
                    <div>
                        <a href="#">
                            <i className="fa fa-heart-o"></i>
                            <span>Favoritos</span>
                            <div className="qty">2</div>
                        </a>
                    </div>

                    <div className={dropdownOpen ? "dropdown open" : "dropdown"}>
                        <a className="dropdown-toggle" data-toggle="dropdown" onClick={handleDropdownClick} aria-expanded="true">
                            <i className="fa fa-shopping-cart"></i>
                            <span>Carrinho</span>
                            <div className="qty">3</div>
                        </a>
                        <div className="cart-dropdown">
                            <div className="cart-list">
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="/img/product01.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-name"><a href="#">Nome do produto</a></h3>
                                        <h4 className="product-price"><span className="qty">1x</span>R$980.00</h4>
                                    </div>
                                    <button className="delete"><i className="fa fa-close"></i></button>
                                </div>

                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src="./img/product02.png" alt="" />
                                    </div>
                                    <div className="product-body">
                                        <h3 className="product-name"><a href="#">Nome do produto</a></h3>
                                        <h4 className="product-price"><span className="qty">2x</span>R$980.00</h4>
                                    </div>
                                    <button className="delete"><i className="fa fa-close"></i></button>
                                </div>
                            </div>
                            <div className="cart-summary">
                                <small>3 Item(s) Selecionados</small>
                                <h5>SUBTOTAL: R$1960.00</h5>
                            </div>
                            <div className="cart-btns">
                                <a href="#">Ver carrinho</a>
                                <a href="#">Continuar  <i className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="menu-toggle">
                        <a href="#">
                            <i className="fa fa-bars"></i>
                            <span>Menu</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <nav id="navigation">
			<div className="container">
				<div id="responsive-nav">
					<ul className="main-nav nav navbar-nav">
						<li className="active"><a href="/">Inicio</a></li>
						<li><a href="#">Mais vendidos</a></li>
						<li><a href="/categories">Categorias</a></li>
						<li><a href="#">Notebook's</a></li>
						<li><a href="#">Celulares</a></li>
						<li><a href="#">Cameras</a></li>
						<li><a href="#">Acessorios</a></li>
					</ul>
				</div>
			</div>
		</nav>
</div>
</header>
    )
}
