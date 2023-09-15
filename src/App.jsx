import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Courses from './components/Courses'
import Header from './components/Header'

function App() {

  const [courses, setCourses] = useState([]);
  const [added, setAdded] = useState([]);
  const [credit, setCredit] = useState(0)

  useEffect(() =>{
    fetch('../public/courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])

const handleAdded = (courseTitle, creditHour) => {
    const newAdded = [...added, courseTitle];
    const newCredit = credit + creditHour;
    setAdded(newAdded);
    setCredit(newCredit);
}

  return (
    <>
    <div className='body'>
    <Header></Header>
    <div className='md:flex'>
      <Courses courses={courses} handleAdded={handleAdded}></Courses>
      <Cart added={added} credit={credit}></Cart>
    </div>
    </div>
    </>
  )
}

export default App
