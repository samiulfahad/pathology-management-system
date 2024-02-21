import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <section>
        <div className='flexCol text-lg h-screen w-full -mt-28 font-bold'>
            <p>NOT Found</p>
            <Link to={"/"} className='btn'> Home </Link>
            <Link to={"/create-invoice"} className='btn'> Create Invoice </Link>
        </div>
    </section>
  )
}

export default Page404