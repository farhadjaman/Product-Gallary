import { Item } from 'screens/landing/products.type';

const Product = ({ featured, item }: { featured: boolean; item: Item }) => {
  const productClass = [
    'flex flex-col gap-y-2',
    featured ? 'col-span-4 row-span-2' : 'col-span-2',
  ].join(' ');
  return (
    <div className={productClass}>
      <div
        className={`flex bg-secondary w-full h-full ${
          featured ? 'rounded-[36px]' : 'rounded-[24px]'
        } mb-2`}
      >
        <img className={`w-sm p-6`} src={item.image} alt="product image" />
      </div>
      <div className={`h-full flex flex-col mx-2`}>
        <div className="flex justify-between items-center">
          <div className={`font-inter font-bold ${featured ? 'text-xl' : 'text-md'}`}>
            {item.name}
          </div>
          <div className="font-inter text-md font-semibold">${item.price}</div>
        </div>
        {featured && <div className="font-inter text-md text-gray-700">{item.description}</div>}
      </div>
    </div>
  );
};

export default Product;
