import { validationSchemaCheckout, INITIAL_STATE } from './constants';
import config from './formConfig';
import withFormHOC from 'components/form/withFormHOC';
import Form from 'components/form';

const CheckoutForm = () => {
  const AddComponents = () => {
    return (
      <>
        <div>1</div>
        <div>2</div>
      </>
    );
  };
  const WrappedForm = withFormHOC(Form, AddComponents);
  //TODO
  const handleSubmit = (val) => console.log(val);
  return (
    <div className='px-10'>
      <WrappedForm
        validationSchema={validationSchemaCheckout}
        handleFormSubmit={handleSubmit}
        initialState={INITIAL_STATE}
        formConfig={config}
      />
    </div>
  );
};

export default CheckoutForm;
