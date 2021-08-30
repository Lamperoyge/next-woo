import Title from 'components/title';
import { useState } from 'react';

const ListItem = ({ onClick, selectedAttributeValue, option }) => {
  return (
    <li
      className='flex items-center justify-center'
      onClick={() => onClick(option)}
    >
      <span
        className={`capitalize text-center cursor-pointer mx-1 ${
          selectedAttributeValue === option
            ? 'bg-black text-white'
            : 'bg-white text-black'
        } hover:bg-black hover:text-white py-2 px-4 block whitespace-no-wrap`}
      >
        {option}
      </span>
    </li>
  );
};

export default function Item({ attribute, handleAttrSelect }) {
  const [selectedAttributeValue, setSelectedAttributeValue] = useState('');
  const handleAttrClick = (option) => {
    setSelectedAttributeValue(option);
    handleAttrSelect({ [attribute.name]: option });
  };
  return (
    <div className='flex  align-center'>
      <Title size='text-sm' title={attribute.name + ':'} />
      <ul className='text-gray-700 flex justify-center align-center'>
        {attribute.options ? (
          attribute.options.map((option, idx) => {
            return (
              <ListItem
                option={option}
                key={idx}
                selectedAttributeValue={selectedAttributeValue}
                onClick={handleAttrClick}
              />
            );
          })
        ) : (
          <ListItem
            option={attribute.option}
            selectedAttributeValue={selectedAttributeValue}
            onClick={handleAttrClick}
          />
        )}
      </ul>
    </div>
  );
}
