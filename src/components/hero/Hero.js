import headphone from "./images/headphone.png";
import arrow from "./images/arrow.png";

const Hero = () => {
	const removerd = "h-phone md:max-w-3xl";
	return (
		<div className="w-full mx-auto flex flex-col-reverse bg-heading py-9 px-4  md:flex-row lg:max-w-full lg:px-20 lg:py-20">
			<div className="mx-auto text-white">
				<h1 className=" text-2xl font-extrabold mt-16 md:text-4xl lg:text-5xl">
					Big Savings.
				</h1>
				<h1 className="text-2xl font-light mt-4 md:text-5xl lg:text-5xl">
					Big Adventures.
				</h1>
				<p className="text-sm mt-4 md:max-w-xs md:text-base">
					A random paragraph can also be an excellent way for a writer to tackle
					writers' block. Writing block can often happen due to being stuck.
				</p>
				<button className="text-white border border-white w-40 h-10 mt-6 text-sm text-base">
					Shop Sale <img className="inline-block" src={arrow} alt="products" />
				</button>
			</div>
			<div className="bg-sub-heading overflow-visible headphone-bg mx-auto headphone-full">
				<img src={headphone} className="headphone mx-auto" alt="headphone" />
			</div>
		</div>
	);
};

export default Hero;
