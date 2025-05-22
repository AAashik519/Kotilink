
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Search, Users } from "lucide-react"
 

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
    

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
       
          <div className="container mx-auto">
            <div className="relative">
              {/* Hero Image */}
              <div className="w-full h-[450px] relative">
                <Image
                  src="/assets/banner.png"
                  alt="Couple relaxing on couch"
                  fill
                  className="object-cover"
                  priority
                />
              
              </div>

              {/* Text Overlay */}
              <div className="absolute top-24 left-4 md:left-12 bg-white rounded-3xl p-8 max-w-xs md:max-w-sm ">
                <h1 className="text-3xl font-bold mb-4">We rent your property</h1>
                <p className="text-gray-600 text-sm">
                  Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus.
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="container mx-auto px-4 -mt-8 relative z-10">
            <div className="bg-white rounded-full border shadow-md flex items-center overflow-hidden">
              <div className="flex-1 border-r px-4 py-3 flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Select a city</span>
              </div>
              <div className="flex-1 border-r px-4 py-3 flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Move in</span>
              </div>
              <div className="flex-1 border-r px-4 py-3 flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Move out</span>
              </div>
              <div className="flex-1 border-r px-4 py-3 flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Guests</span>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 flex items-center">
                <Search className="h-5 w-5 mr-2" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </section>

        {/* Flexible Section */}
        <section className="container mx-auto px-4 py-16 mt-12">
  <div className="bg-gray-50 rounded-3xl overflow-hidden">
    <div className="flex flex-col md:flex-row">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2 p-4 h-[400px] md:w-1/2 place-content-center">
        {[
          "/assets/image 13.png",
          "/assets/image 14.png",
          "/assets/image 15.png",
          "/assets/Rectangle 225.png",
        ].map((src, index) => (
          <div key={index} className="aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold mb-6">The future is flexible</h2>
          <p className="text-gray-600">
            We believe in a world where finding a home is just a click away. Whether you're selling your home,
            traveling for work or moving to a new city. Just bring your bags, and we'll handle the rest.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Blog Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Read our blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
         src="/assets/cardimage.png"
                  alt="Apartment building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Dictum</h3>
                <p className="text-gray-600 text-sm mb-4">Orci momentum tincidunt</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-black rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-[8px]">⏱</span>
                  </div>
                  <span>1 min read</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image  src="/assets/cardimage.png" alt="Modern kitchen" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Turpis elit in dictum eget eget</h3>
                <p className="text-gray-600 text-sm mb-4">Convallis eu vel fames feugiat et venenatis nulla ipsum.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-black rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-[8px]">⏱</span>
                  </div>
                  <span>1 min read</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
   src="/assets/cardimage.png"
                  alt="Desk with coffee and keyboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Faucibus egestas ut sit purus ultricies at eu</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Viverra tellus risus lacus commodo urna fringilla cursus nulla amet.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-black rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-[8px]">⏱</span>
                  </div>
                  <span>3 min read</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                 src="/assets/cardimage.png"
                  alt="Person using laptop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Feugiat gravida sed lacus sagittis</h3>
                <p className="text-gray-600 text-sm mb-4">Pellentesque ultrices hendrerit lacus lectus.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 bg-black rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-[8px]">⏱</span>
                  </div>
                  <span>3 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>


          <section className=" container mx-auto relative my-16">
          <div className="w-full h-[350px] relative">
            <Image
              src="/assets/indoor.avif"
              alt="Modern living space with white sofa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
              <div className="container mx-auto h-full flex items-center">
                <div className="max-w-md p-12 ml-5">
                  <h2 className="text-4xl font-bold text-white mb-4">Bespoke spaces</h2>
                  <p className="text-white/90 mb-8">
                    Expertly designed to create extraordinary spaces with the flexible renter in mind
                  </p>
                  <button className="bg-[#2ECC71] hover:[#27AE60] text-white px-6 py-3 rounded-md transition-colors">
                    Start booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
