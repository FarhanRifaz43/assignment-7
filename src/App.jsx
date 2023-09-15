import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Courses from './components/Courses'
import Header from './components/Header'

function App() {

  const [courses, setCourses] = useState([]);
  const [added, setAdded] = useState([]);

  useEffect(() =>{
    fetch('../public/courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])

const handleAdded = courseTitle => {
    const newAdded = [...added, courseTitle];
    setAdded(newAdded);
}

  return (
    <>
    <div className='body'>
    <Header></Header>
    <div className='md:flex'>
      <Courses courses={courses} handleAdded={handleAdded}></Courses>
      <Cart added={added}></Cart>
    </div>
    </div>
    </>
  )
}

export default App
