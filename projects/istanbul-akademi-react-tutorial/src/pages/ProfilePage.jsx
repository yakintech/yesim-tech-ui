import React from 'react'
import Detail from '../components/Detail'

function ProfilePage() {


  let user = {
    name: "John Doe",
    email: "john@mail.com",
    phone: "5554443322",
  }


  let points = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

  return <>
      <h1>Profile Detail</h1>
      <Detail name={user.name} email={user.email} phone={user.phone} points={points} />
  </>
}

export default ProfilePage

