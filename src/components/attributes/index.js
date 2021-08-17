import { useState } from 'react';
import Item from 'components/filters/item';

const DEFAULT_ITEM_PROPS = {
  title: 'name',
  values: 'options',
};

export default function Attributes({ options }) {
  return (
    <div className='flex'>
      {options.map((option, idx) => {
        return (
          <Item
            onFilterChange={() => {}}
            item={option}
            key={idx}
            border={false}
            itemProps={DEFAULT_ITEM_PROPS}
          />
        );
      })}
    </div>
  );
}
