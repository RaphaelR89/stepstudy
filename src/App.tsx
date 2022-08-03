import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRightLong,
  faCheck,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <div className='container-stepper'>
        <div className='wrapper'>
          <div className='text-step'>
            <p>Produto</p>
            <div className='circle-step'>
              <div className='check-icon'>
                <FontAwesomeIcon
                  icon={faCheck}
                  className='facheck'
                ></FontAwesomeIcon>
              </div>
            </div>
            <p>Box</p>
          </div>
          <div className='arrow-icon'>
            <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
          </div>
          <div className='text-step'>
            <p>Produto</p>
            <div className='circle-step'>
              <div className='check-icon'></div>
              <div className='arrow-icon'></div>
            </div>
            <p>Box</p>
          </div>
          <div className='text-step'>
            <p>Produto</p>
            <div className='circle-step'>
              <div className='check-icon'></div>
              <div className='arrow-icon'></div>
            </div>
            <p>Box</p>
          </div>{' '}
          <div className='text-step'>
            <p>Produto</p>
            <div className='circle-step'>
              <div className='check-icon'></div>
              <div className='arrow-icon'></div>
            </div>
            <p>Box</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
