import React from 'react'

const Speaker = ({ p1, p2 }) => {
    return (
        <>
            <div className='bg-[#F8F8F8]'>
                <div className='flex items-center justify-between h-52  container px-14  mx-auto'>
                    <div>
                        <a className='text-gray-500 hover:text-blue-600 mr-2' href="">Home</a>
                        <a className=' text-gray-400' href="">|</a>
                        <a className='text-blue-600 ml-2' href="">{p1}</a>
                        <h1 className='text-4xl font-semibold text-[#292930] mt-4'>{p2}</h1>
                    </div>
                    <div className="right-part relative z-10">
                        <span className=" before:content-[''] before:absolute before:w-[110px] before:h-[110px] before:bg-white before:rounded-full before:-top-3 before:right-16 before:-z-10"></span>
                        <img  src="./src/assets/shop/shopwithsidebar/asset 2.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speaker
