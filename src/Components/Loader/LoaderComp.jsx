import React from 'react'
import styles from './Loader.module.css'
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie';
import animationData from '../../assets/img/98195-loader.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const LoaderComp = () => {
  const loader = useSelector((state)=> state.load.loader)
  return (
    <div>
        {loader ? <div  className={styles.loaderMain} >
            <div className={styles.loaderSubDiv}>
            <Lottie options={defaultOptions}
              height={300}
              width={300}
            />
        </div> </div>: null}
    </div>
  )
}

export default LoaderComp