import React from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data) {
  //   setUsername('Admin')
  // }else {
  //   setUsername(data.firstName);
  // }

  // console.log("data is", data)
  // console.log("data dot data is",data.data.firstName);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    // window.location.reload();
    props.changeuser('')
  }


  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl font-semibold'>username👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded font-medium text-lg'>Log Out</button>
    </div>
  )
}

export default Header