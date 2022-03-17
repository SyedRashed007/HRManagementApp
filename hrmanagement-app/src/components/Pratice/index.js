import React, { useState } from 'react'


function Practice() {
    const [password, setPassword] = useState("")
    
    /*take 2 input fields and check if the password is same  */

    const check = () => {}

  return (
    <div>
        <input value={password} placeholder='Enter your password'/>
        <input value={password} placeholder='Confirm your password'/>
        <button>Check</button>
    </div>
  )
}

export default Practice