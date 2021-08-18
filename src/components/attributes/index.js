import { useState } from 'react';
import Item from 'components/attributes/item';

export default function Attributes({ options, handleAttrSelect = () => {} }) {
  return (
    <div className=''>
      {options.map((option, idx) => {
        return (
          <Item
            handleAttrSelect={handleAttrSelect}
            attribute={option}
            key={idx}
          />
        );
      })}
    </div>
  );
}
