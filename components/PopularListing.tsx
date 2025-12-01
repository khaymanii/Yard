"use client";

import { listings } from "@/mockData/Listing";

export default function PopularListing() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Popular <span className="text-[#fa343a]">Listings</span>
        </h2>
        <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
          Browse some of the most popular houses and apartments from around the
          world.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-200"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{listing.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{listing.location}</p>
                <p className="text-[#fa343a] font-bold mt-2">{listing.price}</p>
                <p className="text-gray-600 text-sm mt-1">
                  {listing.bedrooms} Bed • {listing.bathrooms} Bath
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
