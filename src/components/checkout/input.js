export default function Input({
  htmlFor,
  text,
  type,
  value = '',
  name,
  onChange,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <div className='w-full md:w-full px-3 py-2 mb-6 md:mb-0'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={htmlFor}
      >
        {text}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
          error ? 'border-red-500' : ''
        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id={htmlFor}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error ? <p className='text-red-500 text-xs italic'>{error}</p> : null}
    </div>
  );
}
