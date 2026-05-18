import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position : "relative",
    width : "100%",
    border : "2px solid red",
    marginTop: "3rem"
  }
  return (
    
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center my-3">Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
