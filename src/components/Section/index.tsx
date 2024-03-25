
export default function Session(){
    return(
        <div className="section">
        <div className="container">
            <div className="row">
                <div id="aside" className="col-md-3">
                    <div className="aside">
                        <h3 className="aside-title">Categorias</h3>
                        <div className="checkbox-filter">

                            <div className="input-checkbox">
                                <input type="checkbox" id="Categoria-1" />
                                <label id="Categoria-1">
                                    <span></span>
                                    Notebooks
                                    <small>(120)</small>
                                </label>
                            </div>

                            <div className="input-checkbox">
                                <input type="checkbox" id="Categoria-2" />
                                <label id="Categoria-2">
                                    <span></span>
                                    Celulares
                                    <small>(740)</small>
                                </label>
                            </div>

                            <div className="input-checkbox">
                                <input type="checkbox" id="Categoria-3" />
                                <label id="Categoria-3">
                                    <span></span>
                                    Cameras
                                    <small>(1450)</small>
                                </label>
                            </div>

                            <div className="input-checkbox">
                                <input type="checkbox" id="Categoria-4" />
                                <label id="Categoria-4">
                                    <span></span>
                                    Acessorios
                                    <small>(578)</small>
                                </label>
                            </div>

                            <div className="input-checkbox">
                                <input type="checkbox" id="Categoria-5" />
                                <label id="Categoria-5">
                                    <span></span>
                                    Notebooks
                                    <small>(120)</small>
                                </label>
                            </div>

                            <div className="input-checkbox">
                                <input type="checkbox" id="Categoria-6" />
                                <label id="Categoria-6">
                                    <span></span>
                                    Celulares
                                    <small>(740)</small>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="aside">
                        <h3 className="aside-title">Preço</h3>
                        <div className="price-filter">
                            <div id="price-slider"></div>
                            <div className="input-number price-min">
                                <input id="price-min" type="number" />
                                <span className="qty-up">+</span>
                                <span className="qty-down">-</span>
                            </div>
                            <span>-</span>
                            <div className="input-number price-max">
                                <input id="price-max" type="number" />
                                <span className="qty-up">+</span>
                                <span className="qty-down">-</span>
                            </div>
                        </div>
                    </div>

                    <div className="aside">
                        <h3 className="aside-title">Marca</h3>
                        <div className="checkbox-filter">
                            <div className="input-checkbox">
                                <input type="checkbox" id="brand-1" />
                                <label id="brand-1">
                                    <span></span>
                                    SAMSUNG
                                    <small>(578)</small>
                                </label>
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" id="brand-2" />
                                <label id="brand-2">
                                    <span></span>
                                    LG
                                    <small>(125)</small>
                                </label>
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" id="brand-3" />
                                <label id="brand-3">
                                    <span></span>
                                    SONY
                                    <small>(755)</small>
                                </label>
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" id="brand-4" />
                                <label id="brand-4">
                                    <span></span>
                                    SAMSUNG
                                    <small>(578)</small>
                                </label>
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" id="brand-5" />
                                <label id="brand-5">
                                    <span></span>
                                    LG
                                    <small>(125)</small>
                                </label>
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" id="brand-6" />
                                <label id="brand-6">
                                    <span></span>
                                    SONY
                                    <small>(755)</small>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="aside">
                        <h3 className="aside-title">Mais vendidos</h3>
                        <div className="product-widget">
                            <div className="product-img">
                                <img src="./img/product01.png" alt="" />
                            </div>
                            <div className="product-body">
                                <p className="product-Categoria">Categoria</p>
                                <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                <h4 className="product-price">RR$980.00 <del className="product-old-price">RR$990.00</del></h4>
                            </div>
                        </div>

                        <div className="product-widget">
                            <div className="product-img">
                                <img src="./img/product02.png" alt=""/>
                            </div>
                            <div className="product-body">
                                <p className="product-Categoria">Categoria</p>
                                <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                            </div>
                        </div>

                        <div className="product-widget">
                            <div className="product-img">
                                <img src="./img/product03.png" alt=""/>
                            </div>
                            <div className="product-body">
                                <p className="product-Categoria">Categoria</p>
                                <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="store" className="col-md-9">
                    <div className="store-filter clearfix">
                        <div className="store-sort">
                            <label>
                                Sort By:
                                <select className="input-select">
                                    <option value="0">Popular</option>
                                    <option value="1">Posição</option>
                                </select>
                            </label>

                            <label>
                                Mostrar:
                                <select className="input-select">
                                    <option value="0">20</option>
                                    <option value="1">50</option>
                                </select>
                            </label>
                        </div>
                        <ul className="store-grid">
                            <li className="active"><i className="fa fa-th"></i></li>
                            <li><a href="#"><i className="fa fa-th-list"></i></a></li>
                        </ul>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product01.png" alt="" />
                                    <div className="product-label">
                                        <span className="sale">-30%</span>
                                        <span className="NEW">NOVO</span>
                                    </div>
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product02.png" alt="" />
                                    <div className="product-label">
                                        <span className="NOVO">NOVO</span>
                                    </div>
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix visible-sm visible-xs"></div>

                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product03.png" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix visible-lg visible-md"></div>

                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product04.png" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix visible-sm visible-xs"></div>

                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product05.png" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product06.png" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix visible-lg visible-md visible-sm visible-xs"></div>

                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product07.png" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product08.png" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix visible-sm visible-xs"></div>

                        <div className="col-md-4 col-xs-6">
                            <div className="product">
                                <div className="product-img">
                                    <img src="./img/product09.png" alt="" />
                                </div>
                                <div className="product-body">
                                    <p className="product-Categoria">Categoria</p>
                                    <h3 className="product-name"><a href="#">Nome do seu produto</a></h3>
                                    <h4 className="product-price">R$980.00 <del className="product-old-price">R$990.00</del></h4>
                                    <div className="product-rating">
                                    </div>
                                    <div className="product-btns">
                                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> Adicionar Carrinho</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="store-filter clearfix">
                        <span className="store-qty">Mostrando 20-100 produtos</span>
                        <ul className="store-pagination">
                            <li className="active">1</li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}