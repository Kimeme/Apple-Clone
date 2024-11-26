import React from 'react'
import watch from '../../images/icons/watch-series5-logo.png'
import applecardlogo from '../../images/icons/apple-card-logo.png'
import applecard from '../../images/home/apple-card.jpg'


export default function Sectionfourth() {
  return (
    <div>
       <section className="fourth-heghlight-wrapper">
        <div className="left-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={watch} />
            </div>
          </div>
          <div className="description-wrapper">
             With the new Always-On Retina display.<br />
            You’ve never seen a watch like this.
          </div>
          <div className="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul>
          </div>
          {/* <!-- <div className="product-image-wrapper">
            <img src="../Apple-Websit/images/home/watch-series-5.jpg" alt="">
          </div> --> */}
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={applecardlogo} />
            </div>
          </div>
           
          <div className="description-wrapper"> Get 3% Daily Cash on purchases from Apple using Apple Card.</div>
          <div className="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul></div>
          <div className="product-image-wrapper">
            <img src={applecard} />
          </div>
        </div>
      </section>
    </div>
  )
}
