import React from 'react'
import "./newnav.css";

const Newnav = () => {
  return (
    <div className='new_nav'>
        {/* <!-- Seconday Nav  --> */}
        <nav class="flex bg-navfoot-light h-9 pt-1">
            {/* <!-- Nav Left  --> */}
            <div>
                <a href="" class="flex pb-2 pl-1.5 pr-1.5  ml-4 rounded-sm hover:border text-white font">
                    {/* <i class="fa-solid fa-bars pt-1 text-lg" style="color: #ffffff;"></i> */}
                    <span class="font-bold pl-1 pt-0.5 text-sm">All</span>
                </a>
            </div>
            {/* <!-- Nav Fill  --> */}
            <div class="w-2/3">
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Fresh</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Mobiles</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Amazon miniTV</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Sell</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Amazon Pay</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Buy Again</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Gift Card</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Health, household & Personal Care</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">Gift Ideas</a>
                <a href="" class="pb-2 pl-1.5 pr-1.5 text-sm pt-1 rounded-sm hover:border text-white">AmazonBasics</a>
            </div>
            <div class="w-22"></div>
            {/* <!-- Nav Right  --> */}
            <div class="w-1/3">
              <a href="" class="pb-2 pl-2 pr-2 pt-1 rounded-sm hover:border text-white">New Launches from Mobiles, Electronics & more | Shop Now</a>  
            </div>
        </nav>
    </div>
  )
}

export default Newnav
