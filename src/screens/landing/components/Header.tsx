import DeleteIcon from 'assets/icons/Delete.icon';
import SelectIcon from 'assets/icons/Select.icon';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { deleteItems, deleteAllItems, selectAllItems } from 'redux/features/gallary/gallarySlice';

const Headers = () => {
  const { items } = useAppSelector((state) => state.gallary);
  const dispatch = useAppDispatch();

  // Calculate the number of selected items
  const selectedItemsCount = items.reduce((count, item) => {
    return item.isSelected ? count + 1 : count;
  }, 0);

  //delete selected items
  const handleDelete = () => {
    dispatch(deleteItems());
  };

  const handleDeleteAllItems = () => {
    dispatch(deleteAllItems());
  };
  const handleSelectAllItems = () => {
    dispatch(selectAllItems());
  };

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col">
        <div className=" text-[36px] font-darkerGrotesque font-bold">Accessories</div>
        <p className="text-sm md:text-xl">
          Essentials that pairs perfectly with your favourite device
        </p>
      </div>
      {selectedItemsCount > 0 && (
        <div className="flex gap-4 pt-4 justify-between items-center hover:cursor-pointer">
          <div onClick={handleSelectAllItems} className="flex gap-2 align-middle justify-center">
            <p className="font-inter font-semibold text-md">Select All</p>
          </div>
          <div onClick={handleDeleteAllItems} className="flex gap-2 align-middle justify-center">
            <p className="font-inter font-semibold text-sm lg:text-md">Delete All</p>
          </div>
          <div className="flex gap-2 align-middle justify-center hover:cursor-pointer">
            <SelectIcon width={20} height={25} />
            <p className="font-inter font-semibold text-sm lg:text-md ">
              {selectedItemsCount} Items Selected
            </p>
          </div>
          <div className="flex gap-2 hover:cursor-pointer hover:text-red-400">
            <DeleteIcon width={20} height={22} />
            <p onClick={handleDelete} className="font-inter font-semibold text-sm lg:text-md">
              Delete Items
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Headers;
