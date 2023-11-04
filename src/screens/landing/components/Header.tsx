import DeleteIcon from 'assets/icons/Delete.icon';
import SelectIcon from 'assets/icons/Select.icon';

const Headers = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className=" text-[36px] font-darkerGrotesque font-bold">Accessories</div>
        <p className="text-[20px]">Essentials that pairs perfectly with your favourite device</p>
      </div>
      <div className="flex gap-4 pt-4">
        <div className="flex gap-2 align-middle justify-center">
          <SelectIcon width={20} height={25} />
          <p className="font-inter font-semibold text-md">3 Items Selected</p>
        </div>
        <div className="flex gap-2">
          <DeleteIcon width={20} height={22} />
          <p className="font-inter font-semibold text-md">Delete Items</p>
        </div>
      </div>
    </div>
  );
};

export default Headers;
