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



import React from 'react'
import Ex from './components/Ex'

const App = () => {
  return (
    <div>
      <Ex/>
    </div>
  )
}

export default App