import './App.css'
import arrowGrey from './assets/svg/arrowGrey.svg'
import arrowPurple from './assets/svg/arrowPurple.svg'
import checkStep from './assets/svg/checkStep.svg'
import React, { useState, useRef } from 'react'

const progressSteps = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
//ta recriando 4 x a estrutura map e sobrepondo por isso n muda a cor, so no 4

function App() {
  const [arrow, setArrow] = useState(true)
  const [check, setCheck] = useState(true)
  const [count, setCount] = useState(0)
  const [productChoice, setProductChoice] = useState(false)
  const [step, setStep] = useState(1)

  const handleChangeStep = (e: any) => {
    e.target.value === 'prev' && step > 0 && setStep(step - 1)
    e.target.value === 'next' &&
      step < progressSteps.length &&
      setStep(step + 1)
  }

  return (
    <>
      <div className='grid-step'>
        <div className='step-product'>Produto</div>
        {progressSteps.map((_, index) => (
          <React.Fragment key={index}>
            {index <= step ? (
              index === step ? (
                <>
                  <div className='circle-step '>
                    <img src='' alt='' className='check-style' />
                  </div>
                  <div className='arrow-step'>
                    <img
                      src={arrow ? arrowGrey : arrowPurple}
                      alt='arrowright'
                      className='arrow-step-img-disable'
                    />
                  </div>
                  <div id='2' className='circle-step circle2'>
                    <img src='' alt='' className='check-style' />
                  </div>
                  <div className='arrow-step2'>
                    <img
                      src={arrowGrey}
                      alt='arrowright'
                      className='arrow-step-img-disable'
                    />
                  </div>
                  <div id='3' className='circle-step circle3'>
                    <img src='' alt='' className='check-style' />
                  </div>
                  <div className='arrow-step3'>
                    <img
                      src={arrowGrey}
                      alt='arrowright'
                      className='arrow-step-img-disable'
                    />
                  </div>
                  <div id='4' className='circle-step circle4'>
                    <img src='' alt='' className='check-style' />
                  </div>
                </>
              ) : (
                <>
                  <div className='circle-step '>
                    <img src={checkStep} alt='' className='check-style' />
                  </div>
                  <div className='arrow-step'>
                    <img
                      src={arrowPurple}
                      alt='arrowright'
                      className='arrow-step-img-disable'
                    />
                  </div>
                  <div className='circle-step circle2 '>
                    <img src={checkStep} alt='' className='check-style' />
                  </div>
                  <div className='arrow-step2'>
                    <img
                      src={arrowPurple}
                      alt='arrowright'
                      className='arrow-step-img-disable'
                    />
                  </div>
                  <div className='circle-step circle3'>
                    <img src={checkStep} alt='' className='check-style' />
                  </div>
                  <div className='arrow-step3'>
                    <img
                      src={arrowPurple}
                      alt='arrowright'
                      className='arrow-step-img-disable'
                    />
                  </div>
                  <div className='circle-step circle4'>
                    <img src={checkStep} alt='' className='check-style ' />
                  </div>
                </>
              )
            ) : null}
          </React.Fragment>
        ))}
        <hr />
        Step:{step}
        <br />
        <button value='prev' onClick={handleChangeStep}>
          Previous
        </button>
        <button value='next' onClick={handleChangeStep}>
          Next Step
        </button>
      </div>
    </>
  )
}

export default App
