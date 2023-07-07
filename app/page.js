"use client";
import Image from 'next/image';
import Nav from '../components/Nav';




export default function Home() {
  return (
    <main>
    <section className="w-full flex ">
       <div className="flex flex-col ml-[15%]">
      <div className="flex flex-row intro ">

       
        <div className="flex flex-row ml-[20%]">
          
          <div><h1 className="text-blue-400 font-medium text-3xl ">HELLO</h1></div>
          <div><p className="text-white text-lg ml-5 mt-3 ">I'm</p></div>
          

              </div>
              </div>
           

         <div><h1 className="text-blue-400 font-bold text-7xl ml-[20%] mt-5  bg-gradient-to-b from-blue-700 to-indigo-900 text-transparent bg-clip-text"
            >IRA DAWN</h1></div>
       
       

      <div className="flex flex-row gap-2 ml-[21%] mt-4 ">
          <div><h1 className="text-white font-semi text-3xl font-bold">Front-End</h1></div>
          <div><h1 className="text-blue-600 font-semi text-3xl font-bold">Developer</h1></div>
          </div>

          <p className="text-white w-[45%] text-sm ml-[20%] mt-7">I am passionate about creating visually stunning and highly functional websites that leave a lasting impression on users. With a keen eye for design and a deep understanding of user experience, I strive to craft intuitive and seamless interfaces.</p>
            
            <div className="flex flex-row gap-4 ml-[20%] mt-7">
            <img src='./fb.svg' alt='next' className="w-7 h-7 bg-white rounded-lg mt-1" />
            <img src='./ig.svg' alt='next' className="w-9 h-9 " />
            <img src='./li.svg' alt='next' className="w-7 h-8 " />
            <img src='./git.svg' alt='next' className="w-9 h-9 " />


            </div>
            </div>
          
            <img src='./portImg.png' alt='next' className="scale-75 -mt-20 -translate-x-60" />
            
            
         

    </section>
    </main>


  

    



  )
}
