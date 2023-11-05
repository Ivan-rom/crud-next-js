import React from 'react'
import styled from 'styled-components'

type Props = {
  openModal: () => void
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  & .entries {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & .nav {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  & .button {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
  }

  & .input {
    input {
      padding: 9px 8px 9px 33px;
    }
  }
`

const Header = ({ openModal }: Props) => {
  return (
    <StyledHeader>
      <nav className="nav">
        <div className="entries">
          <div>Show</div>
          <div className="select">
            <select name="entries" id="entries">
              <option value="10">10</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>entries</div>
        </div>
        <div className="input">
          {/* <img
            src="/svg/search.svg"
            alt="search icon"
            className="input__icon"
          /> */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="input__icon"
          >
            <g id="akar-icons:search">
              <path
                id="Vector"
                d="M14 14L11.0093 11.004L14 14ZM12.6667 7.00001C12.6667 8.5029 12.0696 9.94424 11.0069 11.0069C9.94423 12.0697 8.50289 12.6667 7 12.6667C5.4971 12.6667 4.05576 12.0697 2.99306 11.0069C1.93035 9.94424 1.33333 8.5029 1.33333 7.00001C1.33333 5.49712 1.93035 4.05578 2.99306 2.99307C4.05576 1.93037 5.4971 1.33334 7 1.33334C8.50289 1.33334 9.94423 1.93037 11.0069 2.99307C12.0696 4.05578 12.6667 5.49712 12.6667 7.00001V7.00001Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
      </nav>
      <button className="button button-accent" onClick={openModal}>
        <img src="/svg/add.svg" alt="+" /> Add customer
      </button>
    </StyledHeader>
  )
}

export default Header
