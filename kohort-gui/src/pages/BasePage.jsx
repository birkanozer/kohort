import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./BasePage.css";

// <Navbar />;
const BasePage = (props) => {
  return (
    <div id='base-grid'>
      <div class='min-h-screen flex relative lg:static surface-ground'>
        <div
          id='app-sidebar-5'
          class='bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-7rem select-none'>
          <div class='flex flex-column h-full'>
            <div class='flex align-items-center justify-content-center flex-shrink-0 bg-orange-500'>
              <img
                src='assets/images/blocks/logos/hyper-light.svg'
                alt='hyper-light'
                height='30'
              />
            </div>
            <div class='mt-3'>
              <ul class='list-none p-3 m-0'>
                <li>
                  <a class='p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                    <i class='pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg'></i>
                    <span class='font-medium inline text-base lg:text-xs lg:block'>
                      Home
                    </span>
                    <span role='presentation' class='p-ink'></span>
                  </a>
                </li>
                <li>
                  <a class='p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                    <i class='pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg'></i>
                    <span class='font-medium inline text-base lg:text-xs lg:block'>
                      Search
                    </span>
                    <span role='presentation' class='p-ink'></span>
                  </a>
                </li>
                <li>
                  <a class='p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                    <i class='pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg'></i>
                    <span class='font-medium inline text-base lg:text-xs lg:block'>
                      Team
                    </span>
                    <span role='presentation' class='p-ink'></span>
                  </a>
                </li>
                <li class='relative'>
                  <a class='p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                    <i class='pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg p-overlay-badge'>
                      <span class='p-badge p-component p-badge-dot p-badge-danger'></span>
                    </i>
                    <span class='font-medium inline text-base lg:text-xs lg:block'>
                      Reports
                    </span>
                    <i class='pi pi-chevron-down ml-auto lg:hidden'></i>
                    <span role='presentation' class='p-ink'></span>
                  </a>
                  <ul class='list-none pl-3 pr-0 py-0 lg:p-3 m-0 lg:ml-3 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static lg:absolute left-100 top-0 z-1 bg-gray-900 shadow-none lg:shadow-2 w-full lg:w-15rem'>
                    <li>
                      <a class='p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                        <i class='pi pi-chart-line mr-2'></i>
                        <span class='font-medium'>Revenue</span>
                        <i class='pi pi-chevron-down ml-auto'></i>
                        <span role='presentation' class='p-ink'></span>
                      </a>
                      <ul class='list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out'>
                        <li>
                          <a class='p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                            <i class='pi pi-table mr-2'></i>
                            <span class='font-medium'>View</span>
                            <span role='presentation' class='p-ink'></span>
                          </a>
                        </li>
                        <li>
                          <a class='p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                            <i class='pi pi-search mr-2'></i>
                            <span class='font-medium'>Search</span>
                            <span role='presentation' class='p-ink'></span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class='p-ripple flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                        <i class='pi pi-chart-line mr-2'></i>
                        <span class='font-medium'>Expenses</span>
                        <span role='presentation' class='p-ink'></span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class='p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                    <i class='pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg'></i>
                    <span class='font-medium inline text-base lg:text-xs lg:block'>
                      Events
                    </span>
                    <span role='presentation' class='p-ink'></span>
                  </a>
                </li>
                <li>
                  <a class='p-ripple flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                    <i class='pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg'></i>
                    <span class='font-medium inline text-base lg:text-xs lg:block'>
                      Options
                    </span>
                    <span role='presentation' class='p-ink'></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class='mt-auto mx-3'>
              <hr class='mb-3 border-top-1 border-gray-800' />
              <a class='p-ripple my-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors w-full'>
                <img
                  src='assets/images/blocks/avatars/circle/avatar-f-1.png'
                  alt='avatar-f-1'
                  class='mr-2 lg:mr-0'
                />
                <span class='font-medium inline lg:hidden'>Amy Elsner</span>
                <span role='presentation' class='p-ink'></span>
              </a>
            </div>
          </div>
        </div>
        <div class='min-h-screen flex flex-column relative flex-auto'>
          <div class='flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border'>
            <div class='flex'>
              <a class='p-ripple cursor-pointer block lg:hidden text-700 mr-3'>
                <i class='pi pi-bars text-4xl'></i>
                <span role='presentation' class='p-ink'></span>
              </a>
              <span class='p-input-icon-left'>
                <i class='pi pi-search'></i>
                <input
                  type='search'
                  class='p-inputtext p-component border-none'
                  placeholder='Search'
                />
              </span>
            </div>
            <a class='p-ripple cursor-pointer block lg:hidden text-700'>
              <i class='pi pi-ellipsis-v text-2xl'></i>
              <span role='presentation' class='p-ink'></span>
            </a>
            <ul class='list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static'>
              <li>
                <a class='p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors'>
                  <i class='pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0'></i>
                  <span class='block lg:hidden font-medium'>Inbox</span>
                  <span role='presentation' class='p-ink'></span>
                </a>
              </li>
              <li>
                <a class='p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors'>
                  <i class='pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge'>
                    <span class='p-badge p-component p-badge-dot p-badge-danger'></span>
                  </i>
                  <span class='block lg:hidden font-medium'>Notifications</span>
                  <span role='presentation' class='p-ink'></span>
                </a>
              </li>
              <li class='border-top-1 surface-border lg:border-top-none'>
                <a class='p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors'>
                  <img
                    src='assets/images/blocks/avatars/circle/avatar-f-1.png'
                    alt='avatar-f-1'
                    class='mr-3 lg:mr-0'
                  />
                  <div class='block lg:hidden'>
                    <div class='text-900 font-medium'>Josephine Lillard</div>
                    <span class='text-600 font-medium text-sm'>
                      Marketing Specialist
                    </span>
                  </div>
                  <span role='presentation' class='p-ink'></span>
                </a>
              </li>
            </ul>
          </div>
          <div class='p-5 flex flex-column flex-auto'>
            <div class='border-2 border-dashed surface-border border-round surface-section flex-auto'></div>
          </div>
        </div>
      </div>

      <div className='grid'>
        <div className='col mx-auto'>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default BasePage;
