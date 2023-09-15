import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Courses from './components/Courses'
import Header from './components/Header'



function App() {
  const name = JSON.parse(localStorage.getItem("courseName"));
  const hour = JSON.parse(localStorage.getItem("totalHour"));
  const [courses, setCourses] = useState([]);
  const [added, setAdded] = useState(name);
  const [credit, setCredit] = useState(hour);
  const addedString = JSON.stringify(added ? added : []);
  localStorage.setItem("courseName", addedString);
  const creditString = JSON.stringify(credit ? credit : 0);
  localStorage.setItem("totalHour", creditString);


  useEffect(() => {
    fetch('../public/courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])


  const handleAdded = (courseTitle, creditHour) => {
    const newAdded = [...added, courseTitle];
    const newCredit = credit + creditHour;
    if (newCredit <= 20) {
      setAdded(newAdded);
      setCredit(newCredit);
    }
    else {
      alert('Not enough credits!')
    }
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
