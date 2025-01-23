export default function SearchBar() {
    return (
        <div className="py-10 ">
            <div className="max-w-7xl mx-auto px-6">
                {/* Search Bar Container */}
                <div className="bg-white rounded-lg shadow-lg p-6 grid gap-6 md:grid-cols-4 md:gap-12 bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300">
                    {/* Zipcode or City Input */}
                    <div className="flex flex-col">
                        <label htmlFor="location" className="text-lg font-semibold text-gray-800 mb-2">
                            Enter Zipcode or City
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Enter a zipcode or city"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Bed Select */}
                    <div className="flex flex-col">
                        <label htmlFor="beds" className="text-lg font-semibold text-gray-800 mb-2">
                            Beds
                        </label>
                        <select
                            id="beds"
                            name="beds"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                        </select>
                    </div>

                    {/* Bath Select */}
                    <div className="flex flex-col">
                        <label htmlFor="baths" className="text-lg font-semibold text-gray-800 mb-2">
                            Baths
                        </label>
                        <select
                            id="baths"
                            name="baths"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                        </select>
                    </div>

                    {/* Search Button */}
                    <div className="justify-center mt-8">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-blue-600 text-white py-2 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
