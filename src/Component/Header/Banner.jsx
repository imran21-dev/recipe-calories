

const Banner = () => {
    return (
        <div className="bg-bannerImg bg-blend-overlay  bg-cover bg-no-repeat text-center my-4 rounded-3xl py-40 text-white">
            <h1 className="leading-[50px] text-4xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="text-sm py-6">
            Join our personalized cooking class and master delicious dishes <br /> with expert guidance, tailored just for you!
            </p>
            <div className="pt-4">
                <button className="bg-pColor border-pColor border text-secondaryTextColor mx-2 py-3 px-6 font-semibold rounded-full">Explore</button>
                <button className="border border-white/70 mx-2 py-3 px-6 font-semibold rounded-full">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;