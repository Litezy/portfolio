import React from 'react'

const Header = () => {
  return (
    <>
    <div className="">
        <div className="flex items-center justify-between w-full px-10 py-5 shadow-xl">
            <div className="text-lg">liteZy</div>
            <div className=" w-3/4">
                <ul className=' gap-10 flex items-center font-semibold justify-between mx-auto w-[45%] text-lg transition-all'>
                    <li><a className=' hove  ' href="#">Home</a></li>
                    <li><a className=' hove' href="#">Service</a></li>
                    <li><a className=' hove' href="#">About me</a></li>
                    <li><a className=' hove' href="#">Blog</a></li>
                </ul>
            </div>
            <div className="py-4 px-10 bg-purple-400 cursor-pointer font-semibold rounded-md text-white text-xl">Contact Me</div>
        </div>
        <hr  className='w-[95%] mx-auto bg-white mb-10 shadow-2xl'/>
    </div>
    </>
  )
}

export default Header