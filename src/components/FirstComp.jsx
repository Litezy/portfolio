import React from 'react'
import mainImg from '../assets/images/main-img.jpg'

const FirstComp = () => {
    return (
        <div>
            <div className="flex items-center justify-between w-11/12 mx-auto px-24">
                <div className="">
                    <div className="lite shadow-md mb-5">Litezy Bethel,</div>
                    <h1 className="text-5xl w-2/4 font-bold mb-5  ">I Create <span className='text-purple-400 font-bold'>Front-End </span><br /> Web Applications</h1>
                    <p className='w-3/4 pee font-semibold text-lg mb-3'>As a forward-thinking creator, I am actively sculping the digital terrain. My expertise lies in breathing life into captivating Front-End Web Applications, where each click narrates a unique tale.</p>
                    <div className="py-4 mt-8 px-2 cursor-pointer bg-purple-400 font-semibold rounded-md text-center text-white text-xl w-[20%]">Contact Me</div>
                </div>
                <div className=" self-start">
                    <img className='h-[15%] rounded-full' src={mainImg} alt="" />
                </div>
                <div className="bg-white w-[18%] rounded-full absolute flex items-center justify-evenly right-[31%] bottom-[10%] ">
                    <div >
                        <img className="h-14 rounded-full" src={mainImg} alt="" />
                    </div>
                 <div className="flex flex-col mt-2 items-center">
                    <div className="text-black font-bold text-[.7rem]">Litezy Bethel</div>
                     <div className="text-black font-bold text-[.7rem]">@_Litezy</div>
                     <div className="px-4  rounded-full my-1 text-center bg-purple-400">follow</div>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default FirstComp