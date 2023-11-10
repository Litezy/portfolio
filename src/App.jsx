import React, { useState } from 'react'
import Header from './components/Header'
import FirstComp from './components/FirstComp'
import Buttons from './components/Buttons'
import { PROJECT } from './components/Projects'


const App = () => {
  const [show, setShow] = useState('react')
  function handleFunc(selectedBtn) {
    setShow(selectedBtn)
    console.log(selectedBtn)
  }
  return (
    <div>
      <div className="bg-black">
        <Header />
        <FirstComp />
      </div>
     <div className="skills w-[100%] py-10">
     <div className=" w-[90%] mt-10 mb-5 mx-auto bg-black py-10 rounded-md">
        <div className="text-center text-3xl font-bold w-[20%] mx-auto mb-10  shadow-xl bg-white rounded-md py-5 text-teal-900">Projects</div>
        <div className="menu flex list-none w-[90%] mx-auto items-center justify-start gap-20 font-semibold text-lg mt-5 bg-slate-800 py-5 px-2 rounded-sm">
          <Buttons className='' isSelected={show === 'react'} onselect={() => handleFunc('react')}>React</Buttons>
          <Buttons isSelected={show === 'html'} onselect={() => handleFunc('html')}>HTMLCSS </Buttons>
          <Buttons isSelected={show === 'tailwind'} onselect={() => handleFunc('tailwind')}>Tailwind</Buttons>
        </div>
        <hr className='mt-5' />
        <div className="w-[90%] mx-auto bg-black   mt-10 ">
          <div className="">
            <h2>{PROJECT[show].title}</h2>
            <h3>{PROJECT[show].Description}</h3>
            <h4>{PROJECT[show].Features}</h4>
            <p>{PROJECT[show].Technologies}</p>
          </div>
        </div>
      </div>
     </div>


    </div>
  )
}

export default App