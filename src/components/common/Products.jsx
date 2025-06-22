
import ProductCard from './ProductCard.jsx';
import products from '../../data.json';



export default function Products() {
  return (
    <section
      className="text-black px-4 py-12 bg-stone flex flex-col items-center"
      id="products">
        <h2 className='text-4xl text-olive font-semibold'>Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 w-full place-items-center">
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
