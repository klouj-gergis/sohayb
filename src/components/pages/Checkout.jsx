
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { sendOrderEmail } from "../../utils/emailService";


export default function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const query = new URLSearchParams(location.search);


  let product = {
    name: query.get('name'),
    price: query.get('price'),
    size: query.get('size'),
    image: query.get('imageUrl'),
  }

  const [order, setOrder] = useState({
    product_name: product.name,
      price: product.price,
      size: product.size,
      count: 1,
      total: product.price,
      customer_name: '',
      customer_email: '',
      address: '',
  })


  
  
  const total = order.count * product.price;

  function handlePayment(){
    sendOrderEmail(order).then(navigate('/thank-you'))
    
  }

  return (
    <div className="flex flex-col justify-start items-center bg-olive-dark h-[100vh] gap-5">
      <div className="w-full flex flex-col gap-5 items-center">
      <div className="flex flex-col md:flex-row  mt-10 items-center w-full md:justify-center gap-5 md:w-7/12">

        <div id="productDetails" className="bg-stone text-olive-dark md:w-5/12 rounded-md p-10 flex flex-col justify-around">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Name: {product.name}</h3>
            <p>Size: {product.size}</p>
            <p>Price: {product.price}</p>
            <div>
              <label>Count: </label>
              <input value={order.count} onChange={(event) => {
                setOrder({...order, count: event.target.value, total: order.price * event.target.value})
              }} type="number" name="count" id="count" className="bg-white w-12 focus:outline-none border p-1" />
            </div>
            </div>

            <div className="text-end">
              <p className="font-bold">Total: <span>{total}</span></p>
            </div>
        </div>

        <div id="productImage" className="hidden w-3/12 bg-stone md:flex justify-center rounded-md p-2">
          <img src={product.image} alt={product.name} className="w-52" />
        </div>
      </div>



      <div className="bg-stone text-olive-dark p-10 rounded-md w-7/12">
        <div className="flex flex-col items-center md:grid  md:grid-cols-2 gap-5">
          <div className="name">
            <label>Name</label>
            <input onChange={(event) => {
                setOrder({ ...order , customer_name: event.target.value})
              }} type="text" className="border border-olive-light focus:outline-olive focus:bg-olive-light flex flex-col" />
          </div>
          <div className="email">
            <label>E-Mail</label>
            <input onChange={(event) => {
                setOrder({ ...order , customer_email: event.target.value})
              }} type="email" className="border border-olive-light focus:outline-olive focus:bg-olive-light flex flex-col" />
          </div>
          <div className="address">
            <label>Address</label>
            <input onChange={(event) => {
                setOrder({ ...order , address: event.target.value})
              }} type="text" className="border border-olive-light focus:outline-olive focus:bg-olive-light flex flex-col" />
          </div>
          <div className="paypal">
            <button onClick={handlePayment} className="bg-olive-dark text-white px-15 py-1 font-semibold">checkout</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
