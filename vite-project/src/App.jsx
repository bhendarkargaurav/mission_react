import React from "react";

const App = () => {

  const submitHandler = () => {
    console.log("Hello")
  }

  return (
    <div> 

      <form onSubmit={submitHandler}>
        <input className='px-4 py-3 text-xl m-5 text-white' type="text" placeholder=" Enter your input"/>
        <button className="px-4 py-3 m-5 text-xl font-semibolt bg-emerald-600">Submit</button>
      </form>
     
    </div>
  )
}

export default App


