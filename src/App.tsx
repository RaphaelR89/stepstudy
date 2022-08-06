import './App.css'
import arrowGrey from './assets/svg/arrowGrey.svg'
import arrowPurple from './assets/svg/arrowPurple.svg'
import checkStep from './assets/svg/checkStep.svg'
import { useState, useRef } from 'react'

const progressSteps = [
  { id: 1, name: 'step1' },
  { id: 2, name: 'step2' },
  { id: 3, name: 'step3' },
  { id: 4, name: 'step4' },
]

function App() {
  const [arrow, setArrow] = useState(true)
  const [check, setCheck] = useState(true)
  const [count, setCount] = useState(0)
  const [productChoice, setProductChoice] = useState(false)
  const [step, setStep] = useState(0)

  const handleChangeStep = (e: any) => {
    e.target.value === 'prev' && setStep(step - 1)
    e.target.value === 'next' &&
      step < progressSteps.length &&
      setStep(step + 1)
  }

  return (
    <>
      <div className='grid-step'>
        <div className='step-product'>Produto</div>
        
        <div className='circle-step '>
          <img src={!check ? checkStep : ''} alt='' className='check-style' />
        </div>
        <div className='step-color'>Cor</div>
        <div className='circle-step circle2'>
          <img src={!check ? checkStep : ''} alt='' className='check-style' />
        </div>
        <div className='circle-step circle3'>
          <img src={!check ? checkStep : ''} alt='' className='check-style' />
        </div>
        <div className='circle-step circle4'>
          <img src={!check ? checkStep : ''} alt='' className='check-style' />
        </div>
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
            src={arrow ? arrowGrey : arrowPurple}
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
        Check e arrow true e false teste {count}
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
