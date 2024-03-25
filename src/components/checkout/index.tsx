


export default function CheckoutComponent(){
    return(
        <>
            <div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">Checkout</h3>
						<ul className="breadcrumb-tree">
							<li><a href="#">Inicio</a></li>
							<li className="active">Checkout</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
        <div className="section">
			<div className="container">
				<div className="row">

					<div className="col-md-7">
						<div className="billing-details">
							<div className="section-title">
								<h3 className="title">Endereço</h3>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="first-name" placeholder="Nome" />
							</div>
							<div className="form-group">
								<input className="input" type="text" name="last-name" placeholder="Sobrenome"/>
							</div>
							<div className="form-group">
								<input className="input" type="email" name="email" placeholder="Email"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="address" placeholder="Rua"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="city" placeholder="Cidade"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="country" placeholder="Estado"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="zip-code" placeholder="CEP"/>
							</div>
							<div className="form-group">
								<input className="input" type="tel" name="tel" placeholder="Telefone"/>
							</div>
							<div className="form-group">
								<div className="input-checkbox">
									<input type="checkbox" id="create-account"/>
									<label id="create-account">
										<span></span>
										Criar conta
									</label>
									<div className="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										<input className="input" type="password" name="password" placeholder="Enter Your Password" />
									</div>
								</div>
							</div>
						</div>

						<div className="shiping-details">
							<div className="section-title">
								<h3 className="title">Confirmar endereço</h3>
							</div>
							<div className="input-checkbox">
								<input type="checkbox" id="shiping-address"/>
								<label id="shiping-address">
									<span></span>
									Endereço de entrega diferente?
								</label>
								<div className="caption">
									<div className="form-group">
										<input className="input" type="text" name="first-name" placeholder="First Name"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="last-name" placeholder="Last Name"/>
									</div>
									<div className="form-group">
										<input className="input" type="email" name="email" placeholder="Email"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="address" placeholder="Address"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="city" placeholder="City"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="country" placeholder="Country"/>
									</div>
									<div className="form-group">
										<input className="input" type="text" name="zip-code" placeholder="ZIP Code"/>
									</div>
									<div className="form-group">
										<input className="input" type="tel" name="tel" placeholder="Telephone"/>
									</div>
								</div>
							</div>
						</div>

						<div className="order-notes">
							<textarea className="input" placeholder="Order Notes"></textarea>
						</div>
					</div>

					<div className="col-md-5 order-details">
						<div className="section-title text-center">
							<h3 className="title">Alguma informação adicional</h3>
						</div>
						<div className="order-summary">
							<div className="order-col">
								<div><strong>Produto</strong></div>
								<div><strong>TOTAL</strong></div>
							</div>
							<div className="order-products">
								<div className="order-col">
									<div>1x Nome do seu produto</div>
									<div>R$980.00</div>
								</div>
								<div className="order-col">
									<div>2x Nome do seu produto</div>
									<div>R$980.00</div>
								</div>
							</div>
							<div className="order-col">
								<div>Entrega</div>
								<div><strong>Gratis</strong></div>
							</div>
							<div className="order-col">
								<div><strong>TOTAL</strong></div>
								<div><strong className="order-total">R$2940.00</strong></div>
							</div>
						</div>
						<div className="payment-method">
							<div className="input-radio">
								<input type="radio" name="payment" id="payment-1"/>
								<label id="payment-1">
									<span></span>
									Pix
								</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div className="input-radio">
								<input type="radio" name="payment" id="payment-2"/>
								<label id="payment-2">
									<span></span>
									Debito
								</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div className="input-radio">
								<input type="radio" name="payment" id="payment-3"/>
								<label id="payment-3">
									<span></span>
									Credito
								</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div className="input-checkbox">
							<input type="checkbox" id="terms"/>
							<label id="terms">
								<span></span>
								Eu li e aceito <a href="#">Termos de condições</a>
							</label>
						</div>
						<a href="#" className="primary-btn order-submit">Finalizar pedido</a>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}