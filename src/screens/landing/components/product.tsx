import { Item } from 'screens/landing/products.type';
import { useSortable } from '@dnd-kit/sortable';
const Product = ({ featured, item }: { featured: boolean; item: Item }) => {
  const { isDragging, attributes, listeners, setNodeRef, transition } = useSortable({
    id: item.id,
  });

  const productClass = [
    'flex flex-col text-gray-800',
    featured ? 'col-span-4 row-span-2 gap-y-8 md:gap-y-1' : 'col-span-2',
    isDragging ? 'shadow-sm opacity-50' : 'opacity-100',
  ].join(' ');

  const style = {
    transition: transition || undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className={productClass} {...attributes} {...listeners}>
      <div
        className={`flex bg-secondary w-full h-full ${
          featured ? 'rounded-[36px]' : 'rounded-[24px]'
        } mb-2`}
      >
        <img className={`w-sm p-6`} src={item.image} alt="product image" />
      </div>
      <div className={`h-full flex flex-col mx-2`}>
        <div
          className={`flex ${featured ? '' : 'flex-col md:flex-row'} justify-between items-center`}
        >
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
