import React from "react"

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          marginTop: `2rem`,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://github.com/sophiasagan">Sophia J.</a> using React &
        Gatsby.
      </footer>
    </div>
  )
}

export default Footer
