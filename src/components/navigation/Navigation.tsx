import React from 'react'
import './navigation.scss'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <nav className="main__navigation navigation">
      <button className="navigation__text">Previous</button>
      <ul className="navigation__buttons">
        <li className="navigation__element navigation__element-active">
          <button className="navigation__button">1</button>
        </li>
        <li className="navigation__element">
          <button className="navigation__button">2</button>
        </li>
        <li className="navigation__element">
          <button className="navigation__button">3</button>
        </li>
      </ul>
      <button className="navigation__text">Next</button>
    </nav>
  )
}

export default Navigation
