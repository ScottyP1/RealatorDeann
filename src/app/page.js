import MediaCard from "@/components/MediaCard";
import VideoBackground from "@/components/VideoBackground";
import StyleCard from "@/components/StyleCard";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";

import house from '../../public/house.jpg';
import apartment from '../../public/apartment.jpg';
import Logo from '../../public/Logo.png';

export default function Home() {
  return (
    <div className="text-black bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">

      {/* Header Section */}
      <section className="flex flex-col items-center">
        <VideoBackground />
      </section>

      <section>
        <SearchBar />
      </section>
      {/* Advertisment Section - Rentals */}
      <section>
        <h1 className="text-center text-2xl text-gray-500 mb-2 mt-6">AVAILABLE RENTALS</h1>
        <h2 className="text-xl text-center text-gray-500 mb-6">Solomons, MD</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-16 lg:mx-24">
          <MediaCard imageSrc={house.src} price="$2,300" title="" bed="4" bath="3" />
          <MediaCard imageSrc={apartment.src} price="$1,119" bed="1" bath="1" />
          <MediaCard imageSrc={house.src} price="$1,900" bed="2" bath="1.5" />
        </div>
      </section>

      {/* Advertisment Section */}
      <section className="mt-40 mx-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-32 place-items-center">
          <StyleCard
            title="I AM BUYER"
            description="Imagine owning a piece of the charming waterfront lifestyle in Solomons, MD. Known for its picturesque marinas, vibrant boating culture, and serene views of the Patuxent River and Chesapeake Bay, Solomons offers an ideal blend of relaxation and recreation. As a buyer, you'll have access to a variety of properties ranging from cozy cottages to luxurious waterfront estates. The town boasts a thriving local dining scene, boutique shopping, and cultural gems like the Calvert Marine Museum. With activities like fishing, kayaking, and community events just steps away, investing in Solomons is not just buying a home—it's embracing a coastal lifestyle. Explore the market today and find your dream home in this idyllic Maryland town."
            bgColor="bg-[#FAA39D]"
            align="justify-center"
          />
          <StyleCard
            logo={Logo.src}
            align="justify-top"
            bgImg="https://imageio.forbes.com/specials-images/imageserve/624cb97741e2477a3d4992a3/Matures-trees-and-lawn-surround-the-imposing-residence--which-has-a-swimming-pool/960x0.jpg?height=689&width=711&fit=bounds"
          />
          <StyleCard
            title="I AM SELLER"
            description="Selling your home in Solomons, MD, means offering a slice of paradise to the next lucky owner. Located at the southern tip of Calvert County, Solomons is renowned for its waterfront charm, tranquil neighborhoods, and welcoming community. Highlight the unique features of your property—whether it's breathtaking water views, proximity to local marinas, or easy access to the vibrant downtown area with its shops, restaurants, and museums. The town's appeal to boating enthusiasts, families, and retirees ensures a diverse pool of potential buyers. Showcase the lifestyle your property offers, from weekend sails on the Chesapeake Bay to peaceful evenings by the water. Let your home be the next chapter in someone’s Solomons story."
            align="justify-center"
            bgColor="bg-[#FAA39D]"
          />
        </div>
      </section>

      {/* Advertisment Section - Listings */}
      <section className="mt-40">
        <h1 className="text-center text-2xl text-gray-500 mb-2">AVAILABLE Listings</h1>
        <h2 className="text-xl text-center text-gray-500 mb-6">Solomons, MD</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-16 lg:mx-24">
          <MediaCard imageSrc={house.src} price="$2,300" title="" bed="4" bath="3" />
          <MediaCard imageSrc={apartment.src} price="$1,119" bed="1" bath="1" />
          <MediaCard imageSrc={house.src} price="$1,900" bed="2" bath="1.5" />
        </div>
      </section>

      {/* Advertisment Section - Areas */}
      <section>
        <div
          className="mt-40"
          style={{
            backgroundImage: `url('https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '720px'
          }}
        >
          <h1 className="text-center text-2xl text-white mb-2 pt-12">AREAS I WORK</h1>
          <h2 className="text-xl text-center text-white mb-6">Solomons, MD</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-16 lg:mx-24">
            <MediaCard imageSrc={house.src} price="$2,300" title="" bed="4" bath="3" />
            <MediaCard imageSrc={apartment.src} price="$1,119" bed="1" bath="1" />
            <MediaCard imageSrc={house.src} price="$1,900" bed="2" bath="1.5" />
          </div>
        </div>
      </section>




      <section className="mt-40 py-12" id="About-Deanna">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            About Deanna Rothstein
          </h2>

          {/* Section Content */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">

            {/* Text Content */}
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                My passion for serving the community comes from my deep love for Southern Maryland and the joy of helping others find their sense of home. Having lived in Leonardtown for almost 20 years, I’ve seen firsthand the kindness, generosity, and strong sense of community that make this area so special. Helping families discover that same connection is why I love what I do.
              </p>

              <p>
                As a former military spouse with over 20 years of experience and seven relocations, I understand the unique challenges that come with moving—especially for military families. Those experiences have shaped my mission to be a trusted, knowledgeable, and compassionate guide for my clients, whether they’re buying, selling, or relocating.
              </p>

              <p>
                With a professional background in health and wellness, I’ve developed a leadership style that’s intuitive, trustworthy, and adaptable. These skills, combined with my certifications as a Military Relocation Professional (MRP) and Pricing Strategy Advisor (PSA), allow me to advocate fiercely for my clients while ensuring they feel supported every step of the way.
              </p>

              <p>
                I specialize in residential real estate and military relocations, and I take pride in providing personalized support tailored to my clients’ unique needs. Building strong relationships and helping my clients navigate the real estate process with confidence is what drives me.
              </p>

              <p>
                When I’m not working, you’ll find me boating, teaching or taking fitness classes, and enjoying the river life and community events of St. Mary’s County with my family and our two dogs.
              </p>

              <p>
                Serving my community through the St. Mary’s County office in California, MD, is truly an honor, and I’m here to help you find not just a house, but a place to call home.
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-12 lg:mt-0 flex justify-center items-center">
              <img
                src='https://dtzulyujzhqiu.cloudfront.net/remaxone5413/profiles/1737597406_1773441.jpg'
                alt="Deanna Rothstein"
                className="rounded-lg shadow-xl w-full sm:w-[400px] lg:w-[450px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Ready to find your dream home in Southern Maryland?
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md text-lg transition-all hover:bg-blue-700 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
