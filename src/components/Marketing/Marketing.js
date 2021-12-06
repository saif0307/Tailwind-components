import mission from "./images/mission.png";
import story from "./images/story.png";

const Marketing = () => {
	return (
		<div className="flex flex-col items-center py-9 px-4 xl:px-20 xl:py-12 w-full">
			<h1 className="text-4xl font-extrabold text-heading">Who we are</h1>
			<p className="font-normal max-w-xs mt-4 text-base text-sub-heading text-center md:max-w-2xl">
				We are designers, developer, and testers. We provide best design
				solution to our clients. Working perfectly with our clients.
			</p>

			<div className="flex flex-col md:flex-row gap-8 mt-12">
				<div className="md:m-image-tab xl:m-image sm:m-image-phone">
					<img
						src={mission}
						className="md:m-image-tab xl:m-image sm:m-image-phone "
					/>
					<h1 className="text-heading  mt-6 font-bold text-xl">Our Mission</h1>
					<p className="text-base mt-4 marketing-p font-normal text-sub-heading lg:m-paragraph  p-1">
						As technology disrupts all established norms – bringing complexity
						and uncertainty, alongside new opportunities to improve the world –
						our mission is to help businesses harness technological change to
						successfully deliver innovation. We help our clients gain a
						competitive advantage and improve the lives of people around the
						globe.
					</p>
				</div>
				<div className="md:m-image-tab xl:m-image sm:m-image-phone">
					<img
						src={story}
						className="md:m-image-tab xl:m-image sm:m-image-phone "
					/>
					<h1 className="text-heading mt-6 font-bold text-xl">Our Story</h1>
					<p className="text-base mt-4 marketing-p font-normal text-sub-heading lg:m-paragraph  p-1">
						As technology disrupts all established norms – bringing complexity
						and uncertainty, alongside new opportunities to improve the world –
						our mission is to help businesses harness technological change to
						successfully deliver innovation.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Marketing;
