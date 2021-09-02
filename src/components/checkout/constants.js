import * as yup from 'yup';
export const validationSchemaCheckout = yup.object().shape({
  email: yup
    .string()
    .email('Introdu o adresa de e-mail valida')
    .required('Introdu email-ul tau'),
  first_name: yup.string().required('Introdu prenumele tau'),
  last_name: yup.string().required('Introdu numele tau'),
  address_1: yup.string().required('Este necesar sa introduci adresa'),
  address_2: yup.string(),
  city: yup.string().required('Introdu orasul tau'),
  state: yup.string(),
  postcode: yup.string().required('Introdu codul postal'),
  phone: yup.string().required('Introdu numarul de telefon'),
});

export const INITIAL_STATE = {
  email: '',
};
