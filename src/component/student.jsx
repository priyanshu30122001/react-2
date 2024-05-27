
import React from 'react'

const styles = {
  studentCardStyles: { 
    border: '1px solid black', 
    borderRadius: '10px', 
    padding: '10px',
    width: '306px',
    margin: '10px auto'
  }
}

function Student({fullName,email,batchNo}) {
  // type 1. of destructuring is destructuring inside the function argument
  
  // type 2. of destructuring  
  // const {fullName,email,batchNo}=props
  return (
    <div style={styles.studentCardStyles}>
      <h1>{fullName}</h1>
      <p>{email}</p>
      <p>Batch: {batchNo}</p>
    </div>
  )
}

export default Student
