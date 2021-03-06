import SearchIcon from "../assets/logos/right-sidebar-logo"

const RightSideBar = () => (

  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 rounded">
      <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only text-gray-300">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />

        </div>
      </form>
    </div>

    <div>
      <div className="block overflow-hidden w-full text-sm text-gray-900 bg-[#16181c] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
        <h2 className="font-bold text-xl p-5 pl-5 pr-5">İlgini çekebilecek gündemler</h2>
        <ul class="list-none">
          <li className="grid grid-rows-12 mt-3 hover:bg-[#2e3239] pt-2 pl-5 pr-5 pb-2 ">
            <div className="flex">
              <div className="flex-1  w-64">
                <a href="#">
                  <span className="grid grid-rows-12 mb-1.5 text-xs text-slate-400">Türkiye Tarihinde Gündemde</span>
                  <label className="grid grid-rows-12 mb-1.5	">Hasan Mezarcı</label>
                  <span className="grid grid-rows-12 mb-1.5 text-xs text-slate-400">1.267 Tweet</span>
                </a>
              </div>
              <div className="flex-1  w-32">
                ...
              </div>
            </div>
          </li>
          <li className="grid grid-rows-12 mt-3 hover:bg-[#2e3239] pt-2 pl-5 pr-5 pb-2 ">
            <div className="flex">
              <div className="flex-1  w-64">
                <a href="#">
                  <span className="grid grid-rows-12 mb-1.5 text-xs text-slate-400">Türkiye Tarihinde Gündemde</span>
                  <label className="grid grid-rows-12 mb-1.5	">Hasan Mezarcı</label>
                  <span className="grid grid-rows-12 mb-1.5 text-xs text-slate-400">1.267 Tweet</span>
                </a>
              </div>
              <div className="flex-1  w-32">
                ...
              </div>
            </div>
          </li>
          <li className="grid grid-rows-12 mt-3 hover:bg-[#2e3239] pt-2 pl-5 pr-5 pb-2 ">
            <div className="flex">
              <div className="flex-1  w-64">
                <a href="#">
                  <span className="grid grid-rows-12 mb-1.5 text-xs text-slate-400">Türkiye Tarihinde Gündemde</span>
                  <label className="grid grid-rows-12 mb-1.5	">Hasan Mezarcı</label>
                  <span className="grid grid-rows-12 mb-1.5 text-xs text-slate-400">1.267 Tweet</span>
                </a>
              </div>
              <div className="flex-1  w-32">
                ...
              </div>
            </div>
          </li>
          <li className="grid grid-rows-12 mt-3 hover:bg-[#2e3239] pt-2 pl-5 pr-5 pb-2 ">
            <div className="flex">
              <div className="flex-1  w-64">
                <a href="#">
                  <span className="grid grid-rows-12 mb-1.5 text-xs text-slate-400">Türkiye Tarihinde Gündemde</span>
                  <label className="grid grid-rows-12 mb-1.5	">Hasan Mezarcı</label>
                  <span className="grid grid-rows-12 mb-1.5 text-xs text-slate-400">1.267 Tweet</span>
                </a>
              </div>
              <div className="flex-1  w-32">
                ...
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>

)

export default RightSideBar 