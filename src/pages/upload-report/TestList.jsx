import React from 'react'
import { Link } from 'react-router-dom'

const TestList = () => {
    const testList = ["cbc", "rbs", "lipid profile", "xray"]
  return (
    <div className='flexCol'>
        {testList.map(test=> (
            <Link to={`/upload-report/${test}`} key={test} > {test.toUpperCase()} </Link>
        ))}
    </div>
  )
}

export default TestList