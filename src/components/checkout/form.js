import { validationSchemaCheckout, INITIAL_STATE } from './constants';
import { formConfig } from './formConfig';
import Title from 'components/title';
import { Formik } from 'formik';
import Input from './input';
import { connect } from 'react-redux';

const CheckoutForm = (props) => {
  const onSubmit = (val) => console.log(val);
  return (
    <>
      <Title title='Checkout' />
      <Formik
        validationSchema={validationSchemaCheckout}
        initialValues={INITIAL_STATE}
        onSubmit={onSubmit}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          isValid,
        }) => {
          return (
            <div className='flex justify-center'>
              <form className='px-5 w-full max-w-lg' onSubmit={handleSubmit}>
                {formConfig.map((item, idx) => {
                  return (
                    <Input
                      key={idx}
                      {...item}
                      value={values[item.name]}
                      error={errors[item.name]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  );
                })}
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
                      name='country'
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      name='zip'
                      value={values.zip}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={100520}
                    />
                  </div>
                </div>
                <div className='px-3 py-5 flex justify-center flex-col items-center'>
                  <button
                    name='checkout'
                    type={'submit'}
                    className='w-full btn btn-wide rounded-sm bg-black text-white hover:text-black hover:bg-white hover:border-4'
                  >
                    CHECKOUT
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => ({ cartData: state.cart.data });

const mapDispatchToprops = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToprops)(CheckoutForm);
