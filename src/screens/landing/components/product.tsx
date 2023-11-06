import { Item } from 'screens/landing/products.type';
import { useSortable } from '@dnd-kit/sortable';
import { useAppDispatch } from 'redux/hooks';
import { selectItems } from 'redux/features/gallary/gallarySlice';
import SelectIcon from 'assets/icons/Select.icon';
const Product = ({ featured, item }: { featured: boolean; item: Item }) => {
  const { attributes, listeners, setNodeRef, transition, isDragging } = useSortable({
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

  // console.log(isDragging);

  function handletoggleSelect() {
    dispatch(selectItems({ id: item.id }));
  }

  return (
    <div ref={setNodeRef} className={productClass} style={style} {...attributes} {...listeners}>
      <div
        className={`flex bg-secondary w-full h-full mb-2 relative ${
          featured && !isDragging ? 'rounded-[36px]' : 'rounded-[24px]'
        }
        ${item.isSelected ? 'border-2 border-primary-200' : ''}`}
      >
        <div
          onMouseDown={handletoggleSelect}
          className={`absolute ${featured ? 'top-5 right-7' : 'top-3 right-3'}`}
        >
          {item.isSelected ? (
            <SelectIcon width={20} height={20} />
          ) : (
            <SelectIcon width={20} height={20} fill="#D3D3D3" />
          )}
        </div>
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
