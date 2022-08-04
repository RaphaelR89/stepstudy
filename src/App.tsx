import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRightLong,
  faCheck,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons'
import arrowGrey from './assets/svg/arrowGrey.svg'
import arrowPurple from './assets/svg/arrowPurple.svg'
import checkStep from './assets/svg/checkStep.svg'
import littleArrowGrey from './assets/svg/littleArrowGrey.svg'
import { useState } from 'react'

function App() {
  const [arrow, setArrow] = useState(true)
  const [check, setCheck] = useState(true)
  const [count, setCount] = useState(0)
  const [productChoice, setProductChoice] = useState(false)

  return (
    <>
      <div className='grid-step'>
        <div className='step-product'>Produto</div>
        <div className='circle-step '>
          <img
            src={!check ? checkStep : ''}
            alt='Check'
            className='check-style'
          />
        </div>
        <div className='step-color'>Cor</div>
        <div className='circle-step circle2'></div>
        <div className='circle-step circle3'></div>
        <div className='circle-step circle4'></div>
        <div className='step-accessory'>Acessórios</div>
        <div className='step-review'>Revisão</div>
        <div className='step-user-product'>
          {productChoice ? 'notebook' : 'product'}
        </div>
        <div className='arrow-step'>
          <img
            src={arrow ? arrowGrey : arrowPurple}
            alt='arrowright'
            className='arrow-step-img-disable'
          />
        </div>
        <div className='arrow-step2'>
          <img
            src={arrow ? arrowGrey : arrowPurple}
            alt='arrowright'
            className='arrow-step-img-disable'
          />
        </div>
        <div className='arrow-step3'>
          <img
            src={arrowGrey}
            alt='arrowright'
            className='arrow-step-img-disable'
          />
        </div>
      </div>
      <button
        onClick={() => {
          setArrow(!arrow)
          setCheck(!check)
        }}
      >
        {' '}
        Arrow change {count}
      </button>{' '}
      <button
        onClick={() => {
          setProductChoice(!productChoice)
        }}
      >
        {' '}
        Product change
      </button>{' '}
    </>
  )
}

export default App
