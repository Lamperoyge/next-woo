import { Formik } from 'formik';
export default function withFormHOC(WrappedComponent, AdditionalComponent) {
  return function (props) {
    return (
      <Formik
        validationSchema={props.validationSchema}
        onSubmit={props.onSubmit}
        initialValues={props.initialState}
        validateOnMount={true}
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
            <>
              <WrappedComponent
                {...props}
                errors={errors}
                touched={touched}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                isValid={isValid}
              />
              {<AdditionalComponent />}
            </>
          );
        }}
      </Formik>
    );
  };
}
