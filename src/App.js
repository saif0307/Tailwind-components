import Marketing from "./components/Marketing/Marketing";
import Ecommerce from "./components/ecommerce/Ecommerce";
import Banner from "./components/banner-ecommerce/Banner";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/footer";

const App = () => {
	return (
		<>
			<Hero />
			<br />
			<br />
			<br />
			<Ecommerce />
			<br />
			<Banner />
			<br />
			<Marketing />
			<br />
			<Footer />
		</>
	);
};

export default App;
