import React from 'react'
import './product.scss'
import { IProduct } from '@/interfaces/product.interface'

type Props = {
  product: IProduct
  openModal: (data: IProduct) => void
}

const Product = ({ product, openModal }: Props) => {
  return (
    <li className="products__product products__row product">
      <div className="product__id">#{product.id}</div>
      <div className="product__product">
        <img src={`/png/${product.image}`} alt="hat" />
        <div>{product.title}</div>
      </div>
      <div className="product__customer">{product.customer}</div>
      <div className="product__date">{product.date}</div>
      <div className="product__amout">${product.price}</div>
      <div className="product__mode">{product.mode}</div>
      <div className="product__status">
        <span className={`product__status-${product.status}`}>
          {product.status}
        </span>
      </div>
      <div className="product__action">
        <button
          className="product__edit product__button"
          onClick={() => openModal(product)}
        >
          <img src="/svg/edit.svg" alt="edit" />
        </button>
        <button className="product__trash product__button">
          <img src="/svg/trash.svg" alt="trash" />
        </button>
      </div>
    </li>
  )
}

export default Product
