// import styled from 'styled-components';
import Input from 'components/UIs/input.js';
import formFactory from './formFactory';
const componentsMap = {
  TextField: Input,
};

const GeneralForm = ({
  handleFormSubmit,
  formConfig,
  errors,
  touched,
  handleChange,
  handleBlur,
  values,
}) => {
  const onSubmit = (values, { resetForm }) => {
    handleFormSubmit(values);
    resetForm();
  };

  return (
    <div className='flex flex-col'>
      {formConfig.map((field, idx) => {
        const addonProps = {
          value: values[field.key],
          onBlur: handleBlur,
          onChange: handleChange,
          key: field.key,
        };

        Object.assign(field.typeProps[0], addonProps);

        return (
          <div
            key={idx}
            variant='outlined'
            className='form-control-order'
            style={{ marginTop: '20px' }}
            error={touched[field.key] && !!errors[field.key]}
          >
            {formFactory(
              componentsMap[field.type],
              ...field.typeProps,
              field.children
            )}
            <span>{touched[field.key] && errors[field.key]}</span>
          </div>
        );
      })}
      <div
        className='form-control-order order-checkout-form'
        style={{ marginTop: '20px', width: '100% !important' }}
      ></div>
    </div>
  );
};

export default GeneralForm;
