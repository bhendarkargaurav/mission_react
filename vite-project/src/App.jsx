// import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   const users = [
//   {
//     "id": 1,
//     "name": "Rahul Sharma",
//     "age": 28,
//     "city": "Pune",
//     "profession": "Software Engineer",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
//   },
//   {
//     "id": 2,
//     "name": "Priya Verma",
//     "age": 25,
//     "city": "Mumbai",
//     "profession": "Graphic Designer",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
//   },
//   {
//     "id": 3,
//     "name": "Amit Patel",
//     "age": 32,
//     "city": "Ahmedabad",
//     "profession": "Data Analyst",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
//   },
//   {
//     "id": 4,
//     "name": "Sneha Reddy",
//     "age": 27,
//     "city": "Hyderabad",
//     "profession": "Product Manager",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
//   },
//   {
//     "id": 5,
//     "name": "Vikram Singh",
//     "age": 30,
//     "city": "Delhi",
//     "profession": "Backend Developer",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
//   }
// ]


//   return (
//     <div>
//       <div className='p-10'>

//         {users.map(function(elem, idx) {
//           return <Card kye={idx} username={elem.name} age={elem.age} city={elem.city} prof={elem.profession} photu={elem.profilePhoto}/>
//         })}

//       </div>
//     </div>
//   )
// }

// export default App

// till now integration of catd.jsx


// learn useEffect how can we axios or fetch data from api 
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {

//   const [data, setData]= useState([])

//   const getData = async() => {
//     const res =  await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    
//     setData(res.data);
//     // console.log(data);
//   }

//   useEffect(() => {
//     getData()
//   }, [])


//   return (
//     <div className='p-10'>
//       {/* <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl rounded px-6 py-6 accent-scale-90'>Get Data</button> */}
//       <div className='p-5 bg-gray-950'>
//         {data.map(function(elem, idx) {
//           return <div key={idx} className='bg-gray-50 text-black flex items-center justify-around-between w-full px-7 py-6 rounded mb-3'>
//             <img className='h-50' src={elem.download_url} alt="" />
//             <h1>{elem.author}</h1>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default App









// learning Router Dom how can we switch from page 1 to next
// import React from 'react'
// import { Routes, Route} from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
// import { Contact } from './pages/Contact'
// import Product from './pages/Product'
// import Header from './components/Header'


// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path='/about' element={<About/>} />
//         <Route path='/' element={<Home/>} />
//         <Route path='contact' element={<Contact/>} />
//         <Route path='product' element={<Product/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App



//Learning contect-API
import React, { useContext } from 'react'
import { DataContext } from './context/UserContext'
import Footer from './components/Footer';
import Section from './components/Section';

const App = () => {

const data = useContext(DataContext)
console.log("context data",data);

  return (
    <div>
      {/* <h2>{data}</h2> */}
      <h3>this is app.js {data}</h3>
      <Footer/>
      <Section/>

    </div>
  )
}

export default App