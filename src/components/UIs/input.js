import { useState } from 'react';

export default function Input({}) {
  const [value, setValue] = useState('');
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>Normal</span>
      </label>
      <input
        type='text'
        value={value}
        placeholder='username'
        className='input input-bordered'
      />
    </div>
  );
}
