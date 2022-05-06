

  const Header = () => {
  return (
    <div className="md:h-[80px] h-[50px] bg-white">
      <div className="flex content-center justify-between">
        <div className="md:basis-2/4">
            <div class="relative w-1/2 rounded-lg mx-auto">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 h-12 text-sm text-blue-700  rounded-l-lg rounded-r-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" />
            <button type="submit" class="absolute top-0 h-12 right-0 p-2.5 px-3 text-sm font-medium border-l rounded-r-lg bg-vien-primary hover:bg-teal-800 text-white focus:ring-1 border border-gray-300 focus:outline-none focus:ring-teal-600-300">
            <box-icon color="white" name='search-alt-2'></box-icon>
                </button>
        </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-evenly">
            <div>Udwell Now</div>
            <div>Sell Property</div>
            <div>
            <box-icon size="lg" name='menu-alt-left'></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
