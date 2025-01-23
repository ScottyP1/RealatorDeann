export default function VideoBackground() {
    return (
        <div className="relative h-[300px] md:h-[500px] w-screen mt-16">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-screen h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/headerBG.jpg"
            >
                <source src="/BGVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay with semi-transparent background */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

            {/* Content on top of the video */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-4xl text-white tracking-[5px] text-center">FIND YOUR DREAM HOME</h1>
            </div>
        </div>
    );
}
