'use client'
import React, { useEffect, useState } from 'react'
import { IProduct } from '@/interfaces/product.interface'
import Header from '@/components/header/Header'
import Navigation from '@/components/navigation/Navigation'
import Modal from '@/components/modal/Modal'
import CreateForm from '@/components/createForm/CreateForm'
import Products from '@/components/Products/Products'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

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

const darkTheme = {
  theme: 'dark',
  bgСolor: '#1d1e42',
  textColor: '#ffffff',
  accentColor: '#624de3',
  uiColor: '#141432',
  borderColor: '#fff',
  darkBgColor: '#26264F',
}

const lightTheme = {
  theme: 'light',
  bgСolor: '#ffffff',
  textColor: '#000000',
  accentColor: '#624de3',
  uiColor: '#E0E0E0',
  borderColor: '#E0E0E0',
  darkBgColor: '#F7F6FE',
}

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  background: ${(props) => props.theme.bgСolor};
  color: ${(props) => props.theme.textColor};
  font-weight: 500;
  font-size: 12px;
  min-height: 100vh;
}

ul {
  list-style: none;
}

button {
  font-size: inherit;
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
}

select {
  cursor: pointer;
  font-family: inherit;
  appearance: none;
  border: none;
  outline: none;
}

input {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.select {
  position: relative;

  &::after {
    content: '';
    pointer-events: none;

    position: absolute;
    top: 50%;
    right: 9px;
    transform: translateY(-50%);

    width: 8px;
    height: 8px;
    background-image: url('/svg/arrow.svg');
  }

  select {
    color: ${(props) => props.theme.textColor};
    font-size: inherit;
    background-color: ${(props) => props.theme.uiColor};
    padding: 8px 21px 8px 9px;
    border-radius: 8px;

    transition: 0.2s;

    &:hover {
      box-shadow: 0px 0px 10px ${(props) => props.theme.accentColor};
    }
  }
}

.input {
  position: relative;

  &__icon {
    position: absolute;
    left: 9px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    stroke: ${(props) =>
      props.theme.theme === 'light'
        ? props.theme.uiColor
        : props.theme.textColor};
    color: ${(props) =>
      props.theme.theme === 'light'
        ? props.theme.uiColor
        : props.theme.textColor};
  }

  input {
    padding: 9px 8px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.borderColor};
    background: none;
    font-family: inherit;
    color: inherit;
    transition: 0.2s;

    &::placeholder {
      color: inherit;
    }

    &:hover,
    &:focus {
      box-shadow: 0px 0px 10px ${(props) => props.theme.textColor};
    }
  }
}

.button-accent {
  text-align: center;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 8px;
  transition: 0.2s;
  color: #fff;

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.accentColor};
  }
}
`

const CrudPage = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  const [currentProduct, setCurrentProduct] = useState<null | IProduct>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [isDark, setisDark] = useState(false)

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
    setProducts([...products, newProduct])
    setIsModalOpen(false)
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="body">
        <Header openModal={() => setIsModalOpen(true)} />
        <main>
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
      </div>
    </ThemeProvider>
  )
}

export default CrudPage
