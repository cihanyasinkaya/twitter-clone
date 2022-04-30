import TwitterLogo from './components/assets/logos/twitter'
import './App.css'
import SideBar from './components/sidebar'
import Tweets from './components/tweets'
import TweetsArea from './components/tweets/tweets-area'
import RightSideBar from './components/right-sidebar'

import NavbarMobile from './components/mobil/navbar'
import TweetsMobile from './components/mobil/tweets'

function App() {
  const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];
  return (
    <div className='bg-black overflow-hidden'>
      <NavbarMobile />

      {animals.map(_animal => (
        <TweetsMobile />
      ))}
      <div className='invisible lg:visible container mx-auto px-30'>
        <div class="grid grid-cols-3 ">
          <div className='w-64 '>
            <ul className='fixed'>
              <li>
                <TwitterLogo />
                <SideBar />
              </li>
            </ul>
          </div>
          <div className='w-[500px]'>
            <ul>
              <li>
                <Tweets />
              </li>
              {animals.map(animal => (
                <li>
                  <TweetsArea />
                </li>
              ))}


            </ul>
          </div>
          <div className='w-[291px] ml-[66%] fixed'>
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
