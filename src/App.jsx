import TwitterLogo from './components/assets/logos/twitter'
import './App.css'
import SideBar from './components/sidebar'
import Tweets from './components/tweets'
function App() {
  return (
    <div className='bg-black'>
      <div className='container mx-auto px-30'>
        <div class="grid grid-cols-3 ">
          <div className='w-64'>
            <ul>
              <li>
                <TwitterLogo />
                <SideBar />
              </li>
            </ul>
          </div>
          <div className='w-[500px]'>
            <ul>
              <li>
              <Tweets/>
              </li>
            </ul>
          </div>
          <div>03</div>
        </div>
      </div>
    </div>
  )
}

export default App
