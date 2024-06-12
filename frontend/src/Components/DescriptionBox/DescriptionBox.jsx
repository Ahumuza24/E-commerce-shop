import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator"> 
            <div className="descriptionbox-nav-box"> Description</div>
            <div className="descriptionbox-nav-box fade"> Reviews(122)</div>
            </div>
            <div className="descriptionbox-description"> 
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Culpa dolor eum eius,
                 vitae dolores impedit? Quaerat cupiditate,
                  sint eos illo veritatis esse autem possimus 
                  accusantium, sequi aliquid mollitia inventore perferendis.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Est suscipit nemo beatae 
                    vitae nostrum consequuntur facilis iusto,
                     asperiores recusandae perspiciatis doloremque, 
                     error porro sint maxime quas sunt et veritatis animi!
                  </p>
            </div>

    </div>
  )
}

export default DescriptionBox