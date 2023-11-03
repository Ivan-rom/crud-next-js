import React from 'react'
import './header.scss'

type Props = {
  openModal: () => void
}

const Header = ({ openModal }: Props) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__entries">
          <div>Show</div>
          <div className="select">
            <select name="entries" id="entries">
              <option value="10">10</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>entries</div>
        </div>
        <div className="header__input input">
          <img
            src="/svg/search.svg"
            alt="search icon"
            className="input__icon"
          />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
      </nav>
      <button className="header__button button-accent" onClick={openModal}>
        <img src="/svg/add.svg" alt="+" /> Add customer
      </button>
    </header>
  )
}

export default Header
