import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function ProductCard({ name, size, price, imageUrl, index }) {

  const { t, i18n } = useTranslation('global');

  const queryParams = new URLSearchParams({
    name,
    size,
    price: price.replace('$', ''),
    imageUrl,
  }).toString()

  return (
    <motion.div 
    layout
    style={{ willChange: 'transform, opacity' }}
    className="bg-white border-2 border-olive rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 w-72 text-center flex flex-col items-center hover:border-olive-light"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: index * 0.2 }}
    viewport={{ once: true }}
    >
      <img
        src={imageUrl}
        alt={t('product.name')}
        className="w-full h-48 object-contain mb-4 rounded-md"
      />
      <h2 className="text-lg font-semibold text-olive mb-1">{t('product.name')}</h2>
      <p className="text-sm text-gray-600 mb-1">{size}</p>
      <p className="text-base font-bold text-olive-dark mb-4">{price} EGP</p>
      <a href={`/checkout?${queryParams}`} className="mt-auto bg-olive text-white px-4 py-2 rounded-lg hover:bg-olive-dark hover:cursor-pointer">
        Buy Now
      </a>
    </motion.div>
  );
}

