import React from 'react'

const Homepage = () => {
    return (
        <div className='flex flex-col items-center'>
            <section>
                <div className='flex flex-col items-center mb-5'>
                    <span className='text-[36px] font-bold mb-2'>BRANDS</span>
                    <img src='/assets/colorfulBorder.png' />
                </div>
                <div className='flex flex-row items-center'>
                    <img src='/assets/Brand1.png' />
                    <img src='/assets/Brand2.png' className='mb-[-25px]' />
                    <img src='/assets/Brand3.png' />
                    <img src='/assets/Brand4.png' />
                    <img src='/assets/Brand5.png' />
                    <img src='/assets/Brand6.png' />
                </div>
            </section>

            <section className='mb-[-70px] z-10'>
                <div className='flex flex-col items-center mb-5'>
                    <span className='text-[36px] font-bold mb-2'>WHY US</span>
                    <img src='/assets/colorfulBorder.png' />
                </div>
                <div className='flex flex-row items-center space-x-5'>
                    <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#796AB81A] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg'>
                        <img src='/assets/homeTreatement.png' />
                        <div className='mt-[-20px]'>
                            <span className='font-semibold text-[17px] text-[#3F3F3F]'>Home treatments</span>
                            <p className='text-[14px] text-[#3F3F3F] mt-3'>We are focused on bringing affordable, and quality healthcare to your doorstep,</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg'>
                        <img src='/assets/clinicTreatment.png' />
                        <div className='mt-[-20px]'>
                            <span className='font-semibold text-[17px] text-[#3F3F3F]'>Clinic Treatments</span>
                            <p className='text-[14px] text-[#3F3F3F] mt-3'>Fancy for a walk in central of London, come and visit us to own your look.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg'>
                        <img src='/assets/ukShipping.png' />
                        <div className='mt-[-20px]'>
                            <span className='font-semibold text-[17px] text-[#3F3F3F]'>UK Shipping</span>
                            <p className='text-[14px] text-[#3F3F3F] mt-3'>Our products are available for delivery anywhere in United Kingdom.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg'>
                        <img src='/assets/2languages.png' />
                        <div className='mt-[-20px]'>
                            <span className='font-semibold text-[17px] text-[#3F3F3F]'>2 Languages</span>
                            <p className='text-[14px] text-[#3F3F3F] mt-3'>English and Romanian</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-row items-center justify-between space-x-10 w-[85%] bg-[#FBFBFB] rounded-[25px] pt-[90px] pb-[30px] px-[40px] mb-10'>
                <img src='/assets/treatmentHome.png' className='w-[40%]' />

                <div className='w-[60%]'>
                    <div className='flex flex-col items-start mb-5'>
                        <span className='text-[36px] font-bold mb-2'>Home Treatments</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <p className='mb-20'>
                        We can offer your treatments at your house. Just look for the treatment you wish and book your favourite day and hour to get it done.
                        <br /> <br /> <span className='font-bold text-[20px]'>Note! </span><br /> The treatmts at your house tent to be more expensive then in the clinic. For <span className='font-bold'>traveling outside of London </span>will be <span className='font-bold'>additional charges </span> in top of the treatment/s price. 
                    </p>
                        <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[22px] w-[325px] py-3 rounded-lg'>CHECK TREATMENTS</button>
                </div>
            </section>

                <section className='flex flex-col items-center'>
                    <div className='flex flex-col items-center mb-5'>
                        <span className='text-[36px] font-bold mb-2'>PRODUCTS</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-row items-center w-fit bg-[#FBFBFB] p-3 mb-10'>
                        <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[22px] w-[225px] px-5 py-3 rounded-lg'>NEW ARRIVALS</button>
                        <button className='bg-[#FBFBFB] text-[#000] font-medium text-[22px] w-[225px] px-5 py-3 rounded-lg'>MOST POPULAR</button>
                    </div>
                    <div className='flex flex-row items-center bg-[#FCFCFC]'>
                        <img src='/assets/backIcon.png' />
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 bg-[#E1C75C1A] rounded-[20px] border-[1px] border-[#E1C75C] mr-[50px]'>
                            <img src='/assets/sunScreen.png' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[22px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[200px] px-4 py-2 rounded-lg'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 bg-[#fff] rounded-[20px] mr-[50px]'>
                            <img src='/assets/sunScreen.png' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[22px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[200px] px-4 py-2 rounded-lg'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 bg-[#fff]'>
                            <img src='/assets/sunScreen.png' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[22px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[200px] px-4 py-2 rounded-lg'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <img src='/assets/forwardIcon.png' />
                    </div>
                </section>
        </div>
    )
}

export default Homepage