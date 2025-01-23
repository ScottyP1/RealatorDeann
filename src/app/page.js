import MediaCard from "@/components/MediaCard";
import VideoBackground from "@/components/VideoBackground";
import StyleCard from "@/components/StyleCard";
import Footer from "@/components/Footer";

import house from '../../public/house.jpg';
import apartment from '../../public/apartment.jpg';
import Logo from '../../public/Logo.png';

export default function Home() {
  return (
    <div className="text-black">

      {/* Header Section */}
      <section className="flex flex-col items-center" id="profile">
        <VideoBackground />
      </section>

      {/* Advertisment Section - Rentals */}
      <section>
        <h1 className="text-center text-2xl text-gray-500 mb-2 mt-12">AVAILABLE RENTALS</h1>
        <h2 className="text-xl text-center text-gray-500 mb-6">Solomons, MD</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-16 lg:mx-24">
          <MediaCard imageSrc={house.src} price="$2,300" title="" bed="4" bath="3" />
          <MediaCard imageSrc={apartment.src} price="$1,119" bed="1" bath="1" />
          <MediaCard imageSrc={house.src} price="$1,900" bed="2" bath="1.5" />
        </div>
      </section>

      {/* Advertisment Section */}
      <section className="mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-16 place-items-center">
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
      <section className="mt-12">
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
          className="mt-20"
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




      <section className="mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-16 place-items-center">
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

      <Footer />
    </div>
  );
}
