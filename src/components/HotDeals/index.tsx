import './styles.css';

export default function HotDeals() {
    return (
        <>
            <div id="hot-deal" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hot-deal">
                                <ul className="hot-deal-countdown">
                                    <li>
                                        <div>
                                            <h3>02</h3>
                                            <span>Dias</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>10</h3>
                                            <span>Horas</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>34</h3>
                                            <span>Min</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>60</h3>
                                            <span>Seg</span>
                                        </div>
                                    </li>
                                </ul>
                                <h2 className="text-uppercase">Semana dos mais vendidos</h2>
                                <p>Nova coleção com 50% de desconto</p>
                                <a className="primary-btn cta-btn" href="#">Compre agora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
