export default function Title({ title }) {
  return (
    <div className='px-5 py-5'>
      <h2 className='text-center text-2xl tracking-widest uppercase font-semibold leading-snug'>
        {title}
      </h2>
    </div>
  );
}
