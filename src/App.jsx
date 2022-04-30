import TwitterLogo from './components/assets/logos/twitter'
import './App.css'

function App() {
  return (
    <div className='bg-black'>
      <div className='container mx-auto px-30'>
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
          <div>
            <ul>
              <li>
                <TwitterLogo />
              </li>
            </ul>
          </div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
    </div>
  )
}

export default App
