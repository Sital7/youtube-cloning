// // import React, { useEffect } from 'react'

// // const EffectPractice = () => {


// //     useEffect(()=>{
// //         console.log("Check this use effect")
// //     })

// //     useEffect(()=>{
// //         console.log("Check this use effect after button clicked")
// //     })

// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default EffectPractice



// import React from 'react'
// import { useEffect, useState } from 'react'
// function EffectPractice() {
//     const [number, setNumber] = useState(0);
 
//     const add = ()=>{
//         setNumber(number+1)
//     }
//     useEffect(()=>{
//         console.log("Check this use effect")
//     },[])
 
//     useEffect(()=>{
//         console.log("Check this use effect after button clicked")
//     },[number])
 
 
 
 
 
//   return (
//     <div>
//       This is effect.
//       <h1>{number}</h1>
//       <button onClick={add} >Add</button>
//     </div>
//   )
// }
 
// export default EffectPractice