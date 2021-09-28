// import styled from 'styled-components';
import Title from 'components/title';
const GeneralForm = ({
  handleFormSubmit,
  formConfig,
  errors,
  touched,
  handleChange,
  handleBlur,
  values,
}) => {
  const onSubmit = (values) => {
    handleFormSubmit(values);
  };

  return (
    <>
      <Title title='Checkout' />

      <form className='w-full max-w-lg'>
        <div className='w-full md:w-full px-3 py-2 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-email'
          >
            Email
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-email'
            type='email'
            placeholder='you@email.com'
          />
          <p className='text-red-500 text-xs italic'>
            Please fill out this field.
          </p>
        </div>
        <div className='w-full md:w-full py-2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-phone'
          >
            Phone
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-phone'
            type='text'
            placeholder='(0726) 123 456'
          />
          <p className='text-red-500 text-xs italic'>
            Please fill out this field.
          </p>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 px-3 py-2 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              First Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-first-name'
              type='text'
              placeholder='Jane'
            />
            <p className='text-red-500 text-xs italic'>
              Please fill out this field.
            </p>
          </div>
          <div className='w-full md:w-1/2 px-3 py-2'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-last-name'
            >
              Last Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='text'
              placeholder='Doe'
            />
          </div>
        </div>
        <div className='w-full md:w-full px-3 py-2'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-company'
          >
            Company (required for business adresses)
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-company'
            type='text'
            placeholder='Business LLC'
          />
        </div>
        <div className='w-full md:w-full px-3 py-2'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-address'
          >
            Adress
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-address'
            type='text'
            name='address'
            placeholder='Unirii 52'
          />
        </div>
        <div className='w-full md:w-full px-3 py-2'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-address-2'
          >
            Apartment, suite, etc (optional)
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-address-2'
            type='text'
            name='address 2 (apartment, suite etc)'
            placeholder='52th floor'
          />
        </div>

        <div className='w-full md:w-full px-3 py-2'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='grid-city'
          >
            City
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-city'
            name='city'
            type='text'
            placeholder='Bucharest'
          />
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 px-3 py-2 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-country'
            >
              Country
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-country'
              type='text'
              placeholder='Romania'
            />
          </div>

          <div className='w-full md:w-1/2 px-3 py-2 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-zip'
            >
              Zip
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-zip'
              type='text'
              placeholder={100520}
            />
          </div>
        </div>
        <div className='px-3 py-5 flex justify-center flex-col items-center'>
          <button
            name='checkout'
            type={'button'}
            onClick={onSubmit}
            className='w-full btn btn-wide rounded-sm bg-black text-white hover:text-black hover:bg-white hover:border-4'
          >
            CHECKOUT
          </button>
        </div>
      </form>
    </>
  );
};

export default GeneralForm;
