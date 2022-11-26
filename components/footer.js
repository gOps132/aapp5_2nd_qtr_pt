import footer_style from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div className={footer_style.m_footer}>
			<div className={footer_style.m_footer_elm}>
				<h2>Members</h2>
				<h3>GROUP 5</h3>
				<p>Epilan Gian Cedrick G.</p>
				<p>Condor Chino Miguel</p>
				<p>Johann Terence Jumao-as</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>INFO</h2>
				<h3>11-VANDOR</h3>
				<p>2nd Qtr AAPP PT</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>Made by</h2>
				<h3>Gian Cedrick G. Epilan</h3>
				<h3>With Nextjs Framework</h3>
				<p>
					<a href="https://nextjs.org/"><u>here</u></a>
				</p>
			</div>
		</div>
	);
}

export default Footer;