import React from 'react'
import styled from 'styled-components'

type Props = {}

const StyledNavigation = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: center;
  gap: 12px;
  & .text {
    color: ${(props) =>
      props.theme.theme === 'light' ? '#9E9E9E' : props.theme.textColor};
    &:hover {
      text-decoration: underline;
    }
  }

  & .buttons {
    display: flex;
    gap: 12px;
  }

  & .element {
    border-radius: 8px;
    background-color: ${(props) => props.theme.uiColor};
    transition: 0.2s;
    &-active {
      background-color: #624de3;
    }

    &:hover {
      box-shadow: 0px 0px 10px ${(props) => props.theme.accentColor};
    }
  }

  & .button {
    width: 31px;
    height: 31px;
    padding: 8px 9px;
  }
`

const Navigation = (props: Props) => {
  return (
    <StyledNavigation className="main__navigation">
      <button className="text">Previous</button>
      <ul className="buttons">
        <li className="element">
          <button className="button button-accent">1</button>
        </li>
        <li className="element">
          <button className="button">2</button>
        </li>
        <li className="element">
          <button className="button">3</button>
        </li>
      </ul>
      <button className="text">Next</button>
    </StyledNavigation>
  )
}

export default Navigation
