

export default function Footer(){
    return(
        <footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Sobre-nós</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
								<ul className="footer-links">
									<li><a href="#"><i className="fa fa-map-marker"></i>XXX XXX XXXXX</a></li>
									<li><a href="#"><i className="fa fa-phone"></i>XX-XXXXX-XXXX</a></li>
									<li><a href="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Categorias</h3>
								<ul className="footer-links">
									<li><a href="#">Mais vendidos</a></li>
									<li><a href="#">Notebooks</a></li>
									<li><a href="#">Celulares</a></li>
									<li><a href="#">Cameras</a></li>
									<li><a href="#">Acessorios</a></li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Informações</h3>
								<ul className="footer-links">
									<li><a href="#">Sobre-nós</a></li>
									<li><a href="#">Contate-nos</a></li>
									<li><a href="#">Politica de privacidade</a></li>
S									<li><a href="#">Termos e condições</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Serviços</h3>
								<ul className="footer-links">
									<li><a href="#">Minha conta</a></li>
									<li><a href="#">Meu carrinho</a></li>
									<li><a href="#">Favoritos</a></li>
									<li><a href="#">Rastrear meu pedido</a></li>
									<li><a href="#">Ajuda</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								<li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
								<li><a href="#"><i className="fa fa-credit-card"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
							</ul>
							<span className="copyright">
								Copyright &copy; DevRoom
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}