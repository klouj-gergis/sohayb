
import ProductCard from './ProductCard.jsx';
import products from '../../data.json';



export default function Products() {
  return (
    <section
      className="text-black px-4 py-12 bg-stone flex flex-col items-center"
      id="products">
        <h2 className='text-4xl text-olive font-semibold'>Products</h2>
        <div className="flex flex-col gap-4 mt-5 items-center w-full min-h-screen justify-around  md:flex-row">
        {
          products.map((product, index) => {
            return (
              <ProductCard 
                key={product.id}  
                name={product.name} 
                price={product.price} 
                size={product.size} 
                imageUrl={product.imageUrl} 
                index={index}
              />
            )
          })
        }
          </div>
      
    </section>
  );
}
