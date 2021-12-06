import facebook from "./images/facebook.png";
import pintrest from "./images/pintrest.png";
import youtube from "./images/youtube.png";
import twitter from "./images/twitter.png";

const Footer = () => {
	return (
		<div className="h-phone mx-auto px-5 md:flex md:flex-col md:items-center py-9 md:max-w-3xl justify-center lg:flex-row lg:max-h-80 lg:max-w-full">
			<div>
				<h1 className="text-xl font-bold text-heading text-center lg:text-4xl">
					Join Our Mailing List
				</h1>
				<p className="text-sm text-sub-heading text-center mt-4 max-w-sm">
					Subscribe to your newsletter to stay in the loop. Our newsletter is
					sent once in a week on every friday to get latest news and updates.{" "}
				</p>
				<div className="flex mt-10 items-center">
					<input
						className="px-3 py-3 md:w-64  h-10 border border-sub-heading "
						placeholder="Enter your Email"
					/>
					<button className="w-32 h-10  bg-heading text-white">
						Subscribe
					</button>
				</div>
			</div>
			<div className="text-center flex flex-col md:flex-row flex-wrap gap-7 mt-9 md:text-left justify-center lg:flex-row lg:justify-evenly lg:max-w-3xl ">
				<div className="flex flex-col gap-4 items-center md:items-start">
					<img src={facebook} className="w-5 lg:w-9 " />
					<h1 className="text-base font-medium text-heading lg:text-2xl">
						Facebook
					</h1>
					<p className="text-sm text-sub-heading md:w-72">
						Dolor sit amet, consectetur adipi elit. auctor nunc tristique semper
						at eget sit
					</p>
				</div>
				<div className="flex flex-col gap-4 items-center md:items-start">
					<img src={youtube} className="w-5 lg:w-9" />
					<h1 className="text-base font-medium lg:text-2xl text-heading">
						Youtube
					</h1>
					<p className="text-sm text-sub-heading md:w-72">
						Dolor sit amet, consectetur adipi elit. auctor nunc tristique semper
						at eget sit
					</p>
				</div>
				<div className="flex flex-col gap-4 items-center md:items-start">
					<img src={pintrest} className="w-5 lg:w-9" />
					<h1 className="text-base font-medium lg:text-2xl text-heading">
						Pinterest
					</h1>
					<p className="text-sm text-sub-heading md:w-72">
						Dolor sit amet, consectetur adipi elit. auctor nunc tristique semper
						at eget sit
					</p>
				</div>
				<div className="flex flex-col gap-4 items-center md:items-start">
					<img src={twitter} className="w-5 lg:w-9" />
					<h1 className="text-base font-medium lg:text-2xl text-heading">
						Twitter
					</h1>
					<p className="text-sm text-sub-heading md:w-72">
						Dolor sit amet, consectetur adipi elit. auctor nunc tristique semper
						at eget sit
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
