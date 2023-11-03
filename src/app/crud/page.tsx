'use client'
import React, { useEffect, useState } from 'react'
import { IProduct } from '@/interfaces/product.interface'
import Header from '@/components/header/Header'
import Navigation from '@/components/navigation/Navigation'
import Modal from '@/components/modal/Modal'
import CreateForm from '@/components/createForm/CreateForm'
import Products from '@/components/Products/Products'

const data: IProduct[] = [
  {
    id: 20462,
    title: 'Hat',
    customer: 'Matt Dickerson',
    date: '13/05/2022',
    mode: 'Tranfer Bank',
    status: 'delivered',
    price: '2.95',
    image: 'hat.png',
  },
  {
    id: 18933,
    title: 'Laptop',
    customer: 'Matt Dickerson',
    date: '13/05/2022',
    mode: 'Cash on Delivery',
    status: 'process',
    price: '4.95',
    image: 'laptop.png',
  },
  {
    id: 20461,
    title: 'Hat',
    customer: 'Matt Dickerson',
    date: '13/05/2022',
    mode: 'Tranfer Bank',
    status: 'canceled',
    price: '4.05',
    image: 'hat.png',
  },
]

const CrudPage = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  const [currentProduct, setCurrentProduct] = useState<null | IProduct>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    setProducts(data)
  }, [data])

  function closeModal() {
    setIsModalOpen(false)
    setCurrentProduct(null)
  }

  function openModalWithProduct(product: IProduct) {
    setCurrentProduct(product)
    setIsModalOpen(true)
  }

  function addProduct(newProduct: IProduct) {
    console.log(newProduct)
    data.push(newProduct)

    setProducts([...products, newProduct])
    setIsModalOpen(false)
  }

  return (
    <>
      <Header openModal={() => setIsModalOpen(true)} />
      <main className="main">
        {products.length ? (
          <Products products={products} openModal={openModalWithProduct} />
        ) : (
          <h2 className="empty">Here is nothing yet</h2>
        )}
        <Navigation />
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <CreateForm product={currentProduct} addProduct={addProduct} />
          </Modal>
        )}
      </main>
    </>
  )
}

export default CrudPage
