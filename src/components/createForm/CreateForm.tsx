import { ChangeEvent, FormEvent, useState } from 'react'
import { IProduct } from '@/interfaces/product.interface'
import Image from 'next/image'
import styled from 'styled-components'

type Props = {
  product?: IProduct | null
  addProduct: (newProduct: IProduct) => void
}

const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & h2 {
    margin-bottom: 8px;
  }

  & label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    font-size: 14px;

    & input,
    & select {
      width: 200px;
      &[type='number'] {
        padding-left: 20px;
      }
    }

    & option {
      &[value='delivered'] {
        color: #1f9254;
      }
      &[value='process'] {
        color: #cd6200;
      }
      &[value='canceled'] {
        color: #a30d11;
      }
    }
  }

  .image {
    display: flex;
    align-items: center;
    gap: 8px;

    &__wrapper {
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .input__wrapper {
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
`

const CreateForm = ({ product, addProduct }: Props) => {
  const [customer, setCustomer] = useState(product ? product.customer : '')
  const [productName, setProductName] = useState(product ? product.title : '')
  const [mode, setMode] = useState(product ? product.mode : 'Tranfer Bank')
  const [price, setPrice] = useState(product ? product.price : '')
  const [status, setStatus] = useState(product ? product.status : 'process')
  const [file, setFile] = useState<File>()

  function submitHandler(e: FormEvent) {
    e.preventDefault()
    const date = new Date()

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    const formattedDate = `${day}/${month}/${year}`

    if (file) {
      const newProduct: IProduct = {
        customer,
        title: productName,
        status,
        price,
        mode,
        image: file?.name,
        date: formattedDate,
      }

      addProduct(newProduct)
    }
  }

  return (
    <StyledCreateForm onSubmit={submitHandler}>
      {product ? <h2>Edit #{product.id}</h2> : <h2>Create new product</h2>}

      <label>
        <span>Customer:</span>
        <div className="input">
          <input
            type="text"
            value={customer}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setCustomer(target.value)
            }
            required
            placeholder="Customer name"
          />
        </div>
      </label>

      <label>
        <span>Product name:</span>
        <div className="input">
          <input
            type="text"
            value={productName}
            onInput={({ target }: ChangeEvent<HTMLInputElement>) =>
              setProductName(target.value)
            }
            required
            placeholder="Product name"
          />
        </div>
      </label>

      <label>
        <span>Payment mode:</span>
        <div className="select">
          <select
            defaultValue={mode}
            onChange={({ target }: ChangeEvent<HTMLSelectElement>) =>
              setMode(target.value)
            }
          >
            <option value="Tranfer Bank">Tranfer Bank</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>
      </label>

      <label>
        <span>Price:</span>
        <div className="input">
          <span className="input__icon">$</span>
          <input
            type="number"
            value={price}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setPrice(target.value)
            }
            required
          />
        </div>
      </label>

      <label>
        <span>Iamge:</span>
        <div className="image">
          {(file || product) && (
            <div className="image__wrapper">
              <Image
                src={
                  (file && URL.createObjectURL(file)) ||
                  `/png/${product?.image}`
                }
                alt=""
                width={32}
                height={32}
              />
            </div>
          )}
          <div className="button">
            <div className="button-accent">{file ? 'Change' : 'Choose'}</div>
            <div className="input__wrapper">
              <input
                type="file"
                accept="image/*"
                onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                  target.files && setFile(target.files[0])
                }
                required
              />
            </div>
          </div>
        </div>
      </label>

      {product && (
        <label>
          <span>Status:</span>
          <div className="select">
            <select
              defaultValue={status}
              onChange={({ target }: ChangeEvent<HTMLSelectElement>) =>
                setStatus(target.value)
              }
            >
              <option value="process">Process</option>
              <option value="delivered">Delivered</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>
        </label>
      )}

      <button className="button-accent">Submit</button>
    </StyledCreateForm>
  )
}

export default CreateForm
