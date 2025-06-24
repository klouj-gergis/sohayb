

export default function WhyChoseUs() {
  return (
    <section className="w-screen  h-[90vh] p-10 flex flex-col gap-5 justify-start items-start md:items-center ">
      <h3 className="text-3xl text-olive-dark font-semibold">Why Chose Us</h3>
      <div className="flex gap-2 justify-center items-center h-full p-5 overflow-x-scroll">
        <div className="text-olive bg-gray-200 h-full rounded-md w-72 p-5 flex flex-col gap-5">
          <h4 className="text-2xl font-semibold">1. 100% Pure & Natural</h4>
          <p>Free from additives or blends. Pure olive oil straight from our groves in North Sinai, Egypt.</p>
        </div>
        <div className="text-olive bg-gray-200 pb-5 rounded-md w-72 flex flex-col gap-5">
          <img src="/images/natural.jpg" alt="natural" className="rounded-t-md" />
          <div className="px-5">
            <h4 className="text-xl font-semibold">2. From a Proud Family Farm</h4>
            <p>A family-run project since 2017. Every tree is carefully nurtured from planting to harvest to ensure top quality.</p>
          </div>
        </div>
        <div className="text-olive bg-gray-200 h-full rounded-md w-72 p-5 flex flex-col gap-5">
          <h4 className="text-2xl font-semibold">3. Rich Flavor & Balanced Taste</h4>
          <p>Smooth, slightly bitter with a mild peppery finish – perfect for cooking, drizzling, or salad dressings.</p>
        </div>
        <div className=" text-olive bg-gray-200 h-full rounded-md w-72 p-5 flex flex-col gap-5">
          <h4 className="text-2xl font-semibold">4. Rich in Antioxidants</h4>
          <p>Packed with Omega-9, Vitamin E, and polyphenols – great for heart health and immunity.</p>
        </div>
        
      </div>
    </section>
  )
}
