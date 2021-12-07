import bag from "./images/bag.png";
import wearingBag from "./images/wearing-bag.png";
import arrow from "./images/arrow.png";

const Ecommerce = () => {
	return (
		<div className="box-border mx-auto py-9 px-4 flex flex-col-reverse md:max-w-3xl relative max-w-sm items-center md:items-start gap-6 md:flex-row lg:justify-center lg:p-0">
			<div className="w-full lg:mt-14">
				<img src={bag} className="e-bag-phone mx-auto lg:e-bag " />
				<div className="relative -top-16 text-center">
					<p className="text-base font-semibold text-heading">Backpack</p>
					<p className="text-sub-heading text-sm mt-2">$129</p>
				</div>
				<div className="relative -top-4 w-full lg:gap-8 flex items-center flex-col lg:flex-row">
					<button className="w-full border h-10 border-heading md:e-bag-phone hover:bg-heading hover:text-white">
						Learn More <img className="inline-block" src={arrow} />
					</button>
					<button className="w-full border h-10 hover:bg-white hover:text-heading border-heading lg:m-0 bg-heading text-white mt-4 md:e-bag-phone ">
						Buy Now
					</button>
				</div>
			</div>
			<div className="">
				<img src={wearingBag} className="md:m-image-tab lg:wearing-bag-full" />
			</div>
		</div>
	);
};
export default Ecommerce;
