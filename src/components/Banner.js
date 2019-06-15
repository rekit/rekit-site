import React from "react"
import "./Banner.less"

function Banner(props) {
  return (
    <section className="components-Banner">
      <h1>Rekit Studio</h1>
      <h2>An IDE That Truly Understands Your Projects</h2>
      <p>
        Rekit is a highly extensible IDE focus on visualized development of web applications. It 
        organizes source files into meaningful elements.
      </p>
      <div className="buttons">
        <a href="#">Download v3.0.0</a>
        <a href="#">Get Started</a>
      </div>
      <img src={require('../images/rekit-studio.png')} />
    </section>
  )
}

export default Banner
