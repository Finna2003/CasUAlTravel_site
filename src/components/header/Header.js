import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Cas<em>U</em><l>A</l>LTravel
					</strong>
				</h1>
				<div className="header__text">
					<p>З «CasUAlTravel» плануй свої найкращі подорожі в декілька кліків</p>
				</div>
				<a href="#!" className="btn">
					Download
				</a>
			</div>
		</header>
	);
}

export default Header;