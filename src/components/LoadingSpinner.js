import React from 'react'

export default function LoadingSpinner() {
  return (
    <>
    <center>
    <div className="spinner-border " style={{height: "5rem", width: "5rem", margin:"150px 0px", }} role="status">
  <span className="visually-hidden ">Loading...</span>
</div>
    </center>
    </>
  )
}
