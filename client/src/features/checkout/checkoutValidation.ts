import * as yup from "yup";

export enum AddressFields {
  fullName = "fullName",
  address1 = "address1",
  address2 = "address2",
  city = "city",
  state = "state",
  zip = "zip",
  country = "country",
  saveAddress = "saveAddress",
}

export enum PaymentFields {
  nameOnCard = "nameOnCard",
  cardNumber = "cardNumber",
  expirationDate = "expirationDate",
  cvv = "cvv",
}

export interface CheckoutFields {
  [AddressFields.fullName]: string;
  [AddressFields.address1]: string;
  [AddressFields.address2]: string;
  [AddressFields.city]: string;
  [AddressFields.state]: string;
  [AddressFields.zip]: string;
  [AddressFields.country]: string;
  [AddressFields.saveAddress]: boolean;
  [PaymentFields.nameOnCard]: string;
  [PaymentFields.cardNumber]: string;
  [PaymentFields.expirationDate]: string;
  [PaymentFields.cvv]: string;
}

export const validationSchema = [
  yup.object({
    [AddressFields.fullName]: yup.string().required("Full name is required"),
    [AddressFields.address1]: yup
      .string()
      .required("Address line 1 is required"),
    [AddressFields.address2]: yup
      .string()
      .required("Address line 2 is required"),
    [AddressFields.city]: yup.string().required("City is required"),
    [AddressFields.state]: yup.string().required("State is required"),
    [AddressFields.zip]: yup.string().required("Zip code is required"),
    [AddressFields.country]: yup.string().required("Country is required"),
  }),
  yup.object(),
  yup.object({
    [PaymentFields.nameOnCard]: yup
      .string()
      .required("Name on card is required"),
    // rest will be handled by separate Stripe validation in CheckoutPage state
  }),
];
