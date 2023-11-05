import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

type Props = {
  closeModal: () => void
}

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.bgСolor};
    opacity: 0.5;
    cursor: pointer;
  }

  & .content {
    position: relative;
    z-index: 1;
    padding: 16px;
    background-color: ${(props) => props.theme.darkBgColor};
    border-radius: 8px;
  }
`

const Modal: FC<PropsWithChildren<Props>> = ({ children, closeModal }) => {
  return (
    <StyledModal>
      <div className="backdrop" onClick={closeModal}></div>
      <div className="content">{children}</div>
    </StyledModal>
  )
}

export default Modal
