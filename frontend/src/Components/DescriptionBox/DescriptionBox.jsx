import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews (200)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the
               buying and selling of products or services over the internet.It
               serves as a virtual marketplace where businesses and individual can
               showcase their products, internet with customers, and conduct
               transactions without the needd for a physical presence.E-commerce
               websites have gained immense popularity due to their convenience,
               accessibility, and the global reach they offer.</p>
               <p>E-commerce website typically display products or services along 
                with detailed descriptions,images,prices,and any available variations
                (e.g.,sizes,color).Each product usually has its own dedicated page 
                with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox