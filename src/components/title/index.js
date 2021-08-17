export default function Title({ title, size = 'text-2xl' }) {
  return (
    <div className='px-5 py-5'>
      <h2
        className={`text-center tracking-widest uppercase font-semibold leading-snug ${size}`}
      >
        {title}
      </h2>
    </div>
  );
}
