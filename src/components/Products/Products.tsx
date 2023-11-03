import { IProduct } from '@/interfaces/product.interface'
import React, { useEffect, useState } from 'react'
import Product from '../product/Product'

type Props = {
  products: IProduct[]
  openModal: (data: IProduct) => void
}

const Products = (props: Props) => {
  const [sortedProducts, setSortedProducts] = useState<IProduct[]>(
    props.products
  )
  const [filter, setFilter] = useState('')

  function sortFunction(a: IProduct, b: IProduct) {
    if (a[filter] > b[filter]) {
      return 1
    } else if (a[filter] < b[filter]) {
      return -1
    } else {
      return 0
    }
  }

  useEffect(() => {
    setSortedProducts([...props.products])
  }, [props.products])

  useEffect(() => {
    setSortedProducts((prev) => [...prev.sort((a, b) => sortFunction(a, b))])
  }, [filter])

  return (
    <ul className="main__products products">
      <li className="products__row products__head head">
        <div className="head__id">Tracking ID</div>
        <button className="head__product" onClick={() => setFilter('title')}>
          Product <img src="/svg/arrows.svg" />
        </button>
        <button
          className="head__customer"
          onClick={() => setFilter('customer')}
        >
          Customer
          <img src="/svg/arrows.svg" />
        </button>
        <button className="head__date" onClick={() => setFilter('date')}>
          Date <img src="/svg/arrows.svg" />
        </button>
        <button className="head__amout" onClick={() => setFilter('price')}>
          Amount <img src="/svg/arrows.svg" />
        </button>
        <div className="head__mode">Payment Mode</div>
        <button className="head__status" onClick={() => setFilter('status')}>
          Status <img src="/svg/arrows.svg" />
        </button>
        <div className="head__action">Action</div>
      </li>
      {sortedProducts?.map((product) => (
        <Product
          product={product}
          key={product.id}
          openModal={props.openModal}
        />
      ))}
    </ul>
  )
}

export default Products
