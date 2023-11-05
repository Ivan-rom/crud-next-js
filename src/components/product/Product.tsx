import React from 'react'
import { IProduct } from '@/interfaces/product.interface'
import styled from 'styled-components'

type Props = {
  product: IProduct
  openModal: (data: IProduct) => void
}

const StyledProduct = styled.li`
  position: relative;
  z-index: 0;
  transition: box-shadow 0.2s;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.darkBgColor};
  }

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.accentColor};
    z-index: 1;
  }

  & .id {
    text-align: center;
  }

  & .product {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  & .status {
    font-size: 12px;
    span {
      padding: 8px 12px;
      border-radius: 22px;
      text-transform: capitalize;
    }

    &-delivered {
      color: #1f9254;
      background: #ebf9f1;
    }
    &-process {
      color: #cd6200;
      background: #fef2e5;
    }
    &-canceled {
      color: #a30d11;
      background: #fbe7e8;
    }
  }

  & .action {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
  & .button {
    transition: 0.2s;
    filter: drop-shadow(0 0 0 transparent);
  }

  & .edit {
    &:hover {
      filter: drop-shadow(0 0 10px ${(props) => props.theme.accentColor});
    }
  }

  & .trash {
    &:hover {
      filter: drop-shadow(0 0 10px #a30d11);
    }
  }
`

const Product = ({ product, openModal }: Props) => {
  return (
    <StyledProduct className="products__product row">
      <div className="id">#{product.id}</div>
      <div className="product">
        <img src={`/png/${product.image}`} alt="hat" />
        <div>{product.title}</div>
      </div>
      <div className="customer">{product.customer}</div>
      <div className="date">{product.date}</div>
      <div className="amout">${product.price}</div>
      <div className="mode">{product.mode}</div>
      <div className="status">
        <span className={`status-${product.status}`}>{product.status}</span>
      </div>
      <div className="action">
        <button className="edit button" onClick={() => openModal(product)}>
          <img src="/svg/edit.svg" alt="edit" />
        </button>
        <button className="trash button">
          <img src="/svg/trash.svg" alt="trash" />
        </button>
      </div>
    </StyledProduct>
  )
}

export default Product
