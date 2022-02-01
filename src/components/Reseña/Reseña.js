import React, { useState,useEffect} from 'react';
import '../../App.css';


const Reseña = () =>  {
  const [newUser,setNewUser] = useState({id: undefined, descripcion:''})
  const [users,setUsers] = useState()
  const endpoint = 'http://localhost:3001/api/v1/criticas'
  const fetchUsers= async () =>{
    const response =  await  fetch(endpoint)
    const responseJSON = await response.json()
    console.log(responseJSON)
    setUsers(responseJSON)
  }

const handleNameInput = e =>{
  setNewUser({...newUser, descripcion: e.target.value})};

const handleAddUser = () =>{
  setUsers([...users,newUser])
}
useEffect(() => {
  fetchUsers()

},[])

  return (
    <div className='denver'>
    <h3 className='letra'>Puede comentar sobre el servicio recibido </h3>
      <div className="contComment">
    <input className='cuadro'type='text' onChange={handleNameInput} value={newUser.descripcion} placeholder='Ingrese un comentario'/>
    <button className='bo' onClick={handleAddUser} > Agregar comentario </button>
      </div>
    <ul className="lista">
      {!users ? 'Cargando los comentarios ...' :
      users.map((user,index) => {
        let date = new Date(user.created_at)
      return<button className='btn2' key ={index}><span className='titulo'>Comentario:</span> {user.descripcion}.  <span className='titulo'>Fecha:</span> {date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} </button>
      })}

    </ul>
    </div>
              );
}
export default  Reseña;
