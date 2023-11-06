import { useState, useCallback } from 'react';
import { Item } from './products.type';
import Header from 'screens/landing/components/Header';
import Product from 'screens/landing/components/product';
import { initialData } from 'screens/landing/Data/initialData';
import ImageIcon from 'assets/icons/Image.icon';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

const Index = () => {
  const [items, setItems] = useState(initialData);
  // Create a state variable to store the active item
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = (event: DragStartEvent) => {
    const Id = event.active.id;

    // Ensure activeId is not undefined before setting it as the state
    if (Id && Id !== undefined) {
      const activeItemId = Number(Id);
      const foundItem = items.find((item) => item.id === activeItemId);
      if (foundItem) {
        setActiveItem(foundItem);
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    setItems((items) => {
      const activeIndex = items.findIndex((img) => img.id === active.id);
      const overIndex = items.findIndex((img) => img.id === over.id);

      // Make a copy of the array to avoid mutating the state directly
      const newItems = [...items];

      // Remove the activeFile from its original position
      const [activeFile] = newItems.splice(activeIndex, 1);

      // Insert the activeFile at the overIndex
      newItems.splice(overIndex, 0, activeFile);

      return newItems;
    });
    setActiveItem(null);
  };

  const handleDragCancel = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <div className="font-inter px-8 md:px-16 lg:px-20 py-4 py flex flex-col gap-8 mb-12">
      <Header />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
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
        </SortableContext>
        {/* floating abstract element to show on drag */}
        <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }} zIndex={10}>
          {activeItem ? <Product item={activeItem} featured={false} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Index;
