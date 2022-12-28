import React from 'react'
import styles from './TextError.module.css'
const TextError = (props) => {
  return (
    <div className={styles.texterror}>
         {
            props.children
         }
    </div>
  )
}

export default TextError