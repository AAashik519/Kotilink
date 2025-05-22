import Image from "next/image"
import { Calendar, Minus, Plus, Info } from "lucide-react"

const PropertyDetails = () => {
  return (
     <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Property Images Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
        <div className="md:col-span-2 relative rounded-lg overflow-hidden h-80 md:h-[400px]">
          <Image src="/assets/property/properties 1.png" alt="Main bedroom view" fill className="object-cover" />
          <button className="absolute bottom-4 left-4 bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
            View all photos
          </button>
        </div>
        <div className="hidden md:grid grid-cols-2 grid-rows-3 gap-2">
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/assets/property/properties 2.png" alt="Kitchen view" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/assets/property/properties 3.png" alt="Living area" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/assets/property/properties 1.png" alt="Living room" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/assets/property/properties 1.png" alt="Bathroom" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/assets/property/properties 1.png" alt="Bedroom detail" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/assets/property/properties 1.png" alt="Bathroom detail" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Property Details */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-1">Rhoncus suspendisse</h1>
          <p className="text-gray-600 mb-4">London, Notting Hill</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-sm">2 bedroom</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h1a2 2 0 012 2v8a2 2 0 01-2 2h-1v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3H4a2 2 0 01-2-2V5a2 2 0 012-2h1V2zm4 2H6v1h3V4zm5 0h-3v1h3V4zM4 8h12v3H4V8zm7 4v4h3v-4h-3zm-5 0v4h3v-4H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">2 bath</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">500 sq ft</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">City view</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">3rd floor</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
              </svg>
              <span className="text-sm">Elevator</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 mb-4">
              A truly global city, London has long been considered a cutting-edge metropolis and hub for culture, style
              and finance. With each borough, high street and neighborhood of London sporting its own vibe and lifestyle
              advantages, it can be downright difficult to settle on where to look for a furnished apartment in London.
              Whether you're planning a short-term booking or a long-term stay, Flex Living has a range of options to
              suit your needs. Our team at Bluepound has you covered.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">In bed</h2>
            <p className="text-gray-700 mb-4">
              In rutrum eget urna suspendisse odio nunc. Eu sodales vestibulum, donec rutrum justo, amet porttitor nibh
              et. Interdum consectetur dictum netus placerat sed vulputate. Tempus sagittis urna sagittis viverra erat
              purus duis etiam.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Adipiscing risus, fermentum</h2>
            <p className="text-gray-700 mb-4">
              Laoreet duis accumsan pellentesque lacus. In nullis eu elementum. Mollis enim fringilla aenean diam felis
              diam morbi ipsum placerat.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>TV</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                </svg>
                <span>Fireplace</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Phone</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span>Work desk</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                <span>Fridge</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
                <span>Kettle</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Coffee machine</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <span>Dishes</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span>Washing machine</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
                <span>Dryer</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Iron</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <span>Wardrobe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">£3990 / Month</h2>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Move in</span>
                <span className="font-medium">Move out</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="border rounded-md p-3 flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm">31.12.2021</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="border rounded-md p-3 flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm">31.02.2022</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Guests</span>
              </div>
              <div className="flex items-center border rounded-md p-3">
                <span className="flex-grow">1</span>
                <div className="flex items-center gap-3">
                  <button className="p-1 rounded-full border">
                    <Minus className="h-4 w-4" />
                  </button>
                  <button className="p-1 rounded-full border">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-6 flex items-center">
              <span>All utilities are included</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Average monthly rent</span>
                <div>
                  <div className="text-right">£3700</div>
                  <div className="text-xs text-gray-500">incl. VAT</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span>Pay upon booking</span>
                  <Info className="h-4 w-4 ml-1 text-gray-400" />
                </div>
                <div>
                  <div className="text-right">£3990</div>
                  <div className="text-xs text-gray-500">incl. VAT</div>
                </div>
              </div>
              <div className="flex justify-between font-semibold">
                <div className="flex items-center">
                  <span>Total costs</span>
                  <Info className="h-4 w-4 ml-1 text-gray-400" />
                </div>
                <div>
                  <div className="text-right">£4001.70</div>
                  <div className="text-xs text-gray-500">incl. VAT</div>
                </div>
              </div>
              <button className="text-sm text-teal-700 hover:underline">Show more</button>
            </div>

            <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-md transition-colors">
              Continue booking
            </button>
            <p className="text-xs text-center mt-4 text-gray-500">
              When you book this apartment, your reservation will be confirmed instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
