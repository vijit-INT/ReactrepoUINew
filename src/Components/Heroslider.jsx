import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
// import ic4 from '../Assets/img/ic4.png'
// import ic5 from '../Assets/img/ic5.png'
const images = [
    { url: '../Assets/img/ic4.png' },
    { url: '../Assets/img/ic5.png' }
  ];
const HeroSlider = () => {
  
  
  return (
    <div>
       <SimpleImageSlider
        width={1360}
        height={604}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default HeroSlider