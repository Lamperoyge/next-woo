import { useState } from 'react';

export default function Input({ label, placeholder, type }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='input input-bordered'
      />
    </div>
  );
}
