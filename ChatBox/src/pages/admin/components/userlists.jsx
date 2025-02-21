const Userlists = ({username,email,id,onclick}) => {

  return (
    <div className='col-12 d-flex align-items-center justify-content-between my-2 '>
        <p className='mb-0'>{username}</p>
        <p className='mb-0'>{email}</p>
        <button className='btn btn-primary' onClick={onclick}>chat</button>
    </div>
  )
}

export default Userlists