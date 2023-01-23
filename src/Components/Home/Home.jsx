import React from 'react'

const cards = [
  {
    title :"Introducing New Wireless GO II Firmware: Camera Presets, Nested Recordings and More",
    img:"https://edge.rode.com/images/page/1/modules/7288/rode-wireless-go-II-insitu-girl-working-by-window-desk-jan-2021-580x509-54af56a.jpg",
    para:"Here’s everything you need to know about the new Wireless GO II and RØDE Central updates"
  },
  {
    title :"How to Use VideoMicro II with an iPhone or Android Smartphone",
    img:"https://edge.rode.com/images/page/1/modules/7232/rode-videomicro-II-girl-vlogging-mona-vale-9-2022-580x509-rgb-6090x5344-ad52c48.jpg",
    para:"In this article we take a look at how to mount and connect your VideoMicro II to your smartphone."
  },
  {
    title :"Introducing the VideoMicro II Ultra-compact On-camera Microphone",
    img:"https://edge.rode.com/images/page/1/modules/7218/rode-videomicro-II-girl-holding-camera-mona-vale-9-2022-8192x5464-rgb-580x509-cfb11a3.jpg",
    para:"The VideoMicro II ultra-compact microphone builds on the iconic original with next-generation features for enhanced performance."
  },
  {
    title :"Introducing the NT-USB+ Professional USB Microphone",
    img:"https://edge.rode.com/images/page/1/modules/7095/rode-nt-usb-plus-insitu-girl-livingroom-musician-guitar-580x509.jpg",
    para:"Based on the legendary NT-USB, the NT-USB+ is a professional-grade USB microphone loaded with next-generation features."
  },

]

const Home = () => {

const change = ()=>{
  console.log(window.scrollY)
}
window.addEventListener("scroll",change)


  return (
    <>
    <div className="home lg:ml-[244px] ml-[72px] flex   overflow-scroll justify-center  bg-black pt-10 text-main-font " >
    <div className="feed   w-3/4  flex  "> 
    
    <div className="left-side   w-3/5 ml-16 ">
     <div className="carousel    mb-6 h-20  bg-fuchsia-500 ">
        Story feed Comming soon...
     </div>
    {
            cards && (
              cards.map((item,i)=>{
                return(
                  <div className="card py-6  border-2 border-dark-gray  mb-16   text-center flex flex-col items-center" key={i}>
                  <div className="text-center text-3xl">{item.title} </div>
                  <div className="img  ">
                    <img src={item.img} className=" " alt="" />
                  </div>
                  <div className="para px-2 py-9 ">{item.para}</div>
                 <div className="btn uppercase p-2  w-36 bg-golden rounded-full hover:bg-transparent cursor-pointer hover:text-golden font-semibold hover:outline outline-offset-2 outline-2 text-white ">Learn More</div>
                 </div>
                )
              })
            )
          }
    </div>

    <div className="right-side-profile text-main-font">

    </div>
    </div>
     </div>
    
    </>
  )
}

export default Home