import Header from 'screens/landing/components/Header';
import Product from 'screens/landing/components/product';
import { items } from 'screens/landing/components/items';
import ImageIcon from 'assets/icons/Image.icon';

const index = () => {
  return (
    <div className="font-inter px-8 md:px-16 lg:px-20 py-4 py flex flex-col gap-8 mb-12">
      <Header />
      <div className="w-full h-full grid  grid-cols-4 md:grid-cols-6 lg:grid-cols-12 grid-rows-3 gap-y-12 gap-x-8">
        {items.map((item, index) => (
          <Product key={index} featured={index === 0} item={item} />
        ))}
        <div className="aspect-square col-span-2 flex flex-col gap-4 bg-secondary rounded-[24px] items-center justify-center">
          <ImageIcon />
          <div className="col-span-2 text-center px-6 py-2 bg-primary-200 text-white text-sm md:text-lg font-bold rounded-2xl">
            Add More
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
