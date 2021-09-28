import * as yup from 'yup';
export const validationSchemaCheckout = yup.object().shape({
  email: yup
    .string()
    .email('Introdu o adresa de e-mail valida')
    .required('Introdu email-ul tau'),
  firstName: yup.string().required('Introdu prenumele tau'),
  lastName: yup.string().required('Introdu numele tau'),
  addres: yup.string().required('Este necesar sa introduci adresa'),
  addressTwo: yup.string(),
  city: yup.string().required('Introdu orasul tau'),
  zip: yup.string().required('Introdu codul postal'),
  phone: yup.string().required('Introdu numarul de telefon'),
});

export const INITIAL_STATE = {
  email: '',
  firstName: '',
  lastName: '',
  addres: '',
  addressTwo: '',
  city: '',
  zip: '',
  country: '',
  phone: '',
};
