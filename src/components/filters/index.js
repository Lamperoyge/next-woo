import config from './config';
import Item from './item';
export default function Filters({ onFilterChange = function () {} }) {
  return (
    <div className='flex'>
      {config.map((item, idx) => {
        return <Item onFilterChange={onFilterChange} item={item} key={idx} />;
      })}
    </div>
  );
}
