import config from './config';
import Item from './item';
export default function Filters() {
  return (
    <>
      {config.map((item, idx) => {
        return <Item item={item} key={idx} />;
      })}
    </>
  );
}
