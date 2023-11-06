import { Item } from 'screens/landing/products.type';
import { useSortable } from '@dnd-kit/sortable';
import { useAppDispatch } from 'redux/hooks';
import { selectItems } from 'redux/features/gallary/gallarySlice';
const Product = ({ featured, item }: { featured: boolean; item: Item }) => {
  const { isDragging, attributes, listeners, setNodeRef, transition } = useSortable({
    id: item.id,
  });
  const dispatch = useAppDispatch();

  const productClass = [
    'flex flex-col text-gray-800 bg-orange',
    featured ? 'col-span-4 row-span-2 gap-y-8 md:gap-y-1' : 'col-span-2',
    isDragging ? 'shadow-sm opacity-50' : 'opacity-100',
  ].join(' ');

  const style = {
    transition: transition || undefined,
  };

  function handletoggleSelect() {
    dispatch(selectItems({ id: item.id }));
  }

  return (
    <div
      ref={setNodeRef}
      className={productClass}
      style={style}
      {...attributes}
      {...listeners}
      onClick={handletoggleSelect}
    >
      <div
        className={`flex bg-secondary w-full h-full mb-2 ${
          featured ? 'rounded-[36px]' : 'rounded-[24px]'
        }
        ${item.isSelected ? 'border-2 border-primary-200' : ''}`}
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
