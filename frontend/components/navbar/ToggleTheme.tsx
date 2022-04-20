import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function ToggleTheme() {

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <div title="Change Theme" className="dropdown dropdown-end ">
      <div tabIndex={0} className="btn gap-1 normal-case btn-ghost">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
        <span className="hidden md:inline">Theme</span>
        <svg width="12px" height="12px" className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <div
        className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="light" data-act-class="outline">
            <div data-theme="light" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">light</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
               data-set-theme="dark" data-act-class="outline">
            <div data-theme="dark" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">dark</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="cupcake" data-act-class="outline">
            <div data-theme="cupcake" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">cupcake</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="bumblebee" data-act-class="outline">
            <div data-theme="bumblebee" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">bumblebee</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="emerald" data-act-class="outline">
            <div data-theme="emerald" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">emerald</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="corporate" data-act-class="outline">
            <div data-theme="corporate" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">corporate</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="synthwave" data-act-class="outline">
            <div data-theme="synthwave" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">synthwave</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="retro" data-act-class="outline">
            <div data-theme="retro" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">retro</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="cyberpunk" data-act-class="outline">
            <div data-theme="cyberpunk" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">cyberpunk</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="valentine" data-act-class="outline">
            <div data-theme="valentine" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">valentine</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="halloween" data-act-class="outline">
            <div data-theme="halloween" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">halloween</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="garden" data-act-class="outline">
            <div data-theme="garden" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">garden</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="forest" data-act-class="outline">
            <div data-theme="forest" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">forest</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="aqua" data-act-class="outline">
            <div data-theme="aqua" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">aqua</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="lofi" data-act-class="outline">
            <div data-theme="lofi" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">lofi</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="pastel" data-act-class="outline">
            <div data-theme="pastel" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">pastel</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="fantasy" data-act-class="outline">
            <div data-theme="fantasy" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">fantasy</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="wireframe" data-act-class="outline">
            <div data-theme="wireframe" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">wireframe</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="black" data-act-class="outline">
            <div data-theme="black" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">black</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="luxury" data-act-class="outline">
            <div data-theme="luxury" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">luxury</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="dracula" data-act-class="outline">
            <div data-theme="dracula" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">dracula</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="cmyk" data-act-class="outline">
            <div data-theme="cmyk" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">cmyk</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="autumn" data-act-class="outline">
            <div data-theme="autumn" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">autumn</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="business" data-act-class="outline">
            <div data-theme="business" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">business</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="acid" data-act-class="outline">
            <div data-theme="acid" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">acid</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="lemonade" data-act-class="outline">
            <div data-theme="lemonade" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">lemonade</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="night" data-act-class="outline">
            <div data-theme="night" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">night</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="coffee" data-act-class="outline">
            <div data-theme="coffee" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">coffee</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
               data-set-theme="winter" data-act-class="outline">
            <div data-theme="winter" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">winter</div>
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>
                    <div className="bg-secondary w-2 rounded"></div>
                    <div className="bg-accent w-2 rounded"></div>
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="outline-base-content overflow-hidden rounded-lg" href="/theme-generator/">
            <div className="hover:bg-neutral hover:text-neutral-content w-full cursor-pointer font-sans">
              <div className="flex gap-2 p-3">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"
                     viewBox="0 0 512 512">
                  <path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path>
                  <line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line>
                  <path
                    d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"></path>
                  <path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"></path>
                  <line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line>
                  <path
                    d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"></path>
                  <line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line>
                  <path
                    d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"></path>
                  <path
                    d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"></path>
                  <path
                    d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"></path>
                </svg>
                <div className="flex-grow text-sm font-bold">Make your theme!</div>
              </div>
            </div>
          </a></div>
      </div>
    </div>

  )
}

export default ToggleTheme
