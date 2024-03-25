import './styles.css';

export default function Main() {
    return (
        <>
            <div className='main'>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-6">
                                <div className="shop">
                                    <div className="shop-img">
                                        <img src="./img/shop01.png" alt="" />
                                    </div>
                                    <div className="shop-body">
                                        <h3>Nossos<br />Notebooks</h3>
                                        <a href="#" className="cta-btn">Veja mais <i className="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-6">
                                <div className="shop">
                                    <div className="shop-img">
                                        <img src="./img/shop03.png" alt="" />
                                    </div>
                                    <div className="shop-body">
                                        <h3>Todos<br />Acessosios</h3>
                                        <a href="#" className="cta-btn">Veja mais <i className="fa fa-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-6">
                                <div className="shop">
                                    <div className="shop-img">
                                        <img src="./img/shop02.png" alt="" />
                                    </div>
                                    <div className="shop-body">
                                        <h3>Coleção de<br />Cameras</h3>
                                        <a href="#" className="cta-btn">Veja mais <i className="fa fa-arrow-circle-right"></i></a>
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
