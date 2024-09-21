import React, {useState} from 'react'
import { FaCheck, FaTimes, FaPlus } from 'react-icons/fa'

const AttendanceForm = () => {

  let students = [{
    id: 1,
    name: 'Jhon Doe',
    isPresent: true
  }]
  // Se convierte la fecha del dia a String para poder mostrarla en la página. 
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [newStudentName, setNewStudentNane] = useState('')
  const [newStudentAttendance, setNewStudentAttendance] = useState('')

  const addNewStudent = (e) => {

    e.preventDefault()

    students = [...students, 
        {
            id: students.length + 1, 
            name: newStudentName,
            isPresent: newStudentAttendance
        }        
    ]

    console.log(' students  ', students)

    setNewStudentNane('')
    setNewStudentAttendance(false)
    
}

const attendaceCount = students.filter((student) => student.isPresent).length;


  return (
    
    <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-6 text-center text-indigo-600'> Asistencia a Clase de Yoga {date} </h1>
{/* Formulario */}                
        <form onSubmit={addNewStudent} className='mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8 '>
{/* student name*/ }
            <div className="mb-4">
                    <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>
                        Nombre del Alumno
                    </label>

                    <select name="name" id="" className='shadow appearance-none border rounded w-full py-2 px-3'>
                        <option value="Carlos García"> Carlos García </option>
                        <option value="María López"> María López </option>
                        <option value="Javier Fernández"> Javier Fernández </option>
                        <option value="Lucía Martínez"> Lucía Martínez </option>
                        <option value="Sergio González"> Sergio González </option>
                    </select>
{/* student attendance*/ }        
            </div>  
{/* Attendance checkbox*/ }              
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Asistencia
                </label>
                <div className='mt-2'>
                  <label className='inline-flex items-center'> 
                    <input 
                    type="checkbox" 
                    className='form-checkbox h-5 w-5 text-indigo-600'
                    checked={newStudentAttendance}
                    onChange={(e) => setNewStudentAttendance(e.target.checked)}
                    />
                    <span className='ml-2 text-gray-700'> Asisto </span>
                  </label>
                </div>
            </div>
{/* Save Button */ }                      

          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            
            Confirmar
          </button>
        </form>

    </div> // Container

  )
}








export default AttendanceForm