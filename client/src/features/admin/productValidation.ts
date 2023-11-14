import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  brand: yup.string().required("Brand is required"),
  type: yup.string().required("Type is required"),
  price: yup.number().required("Price is required").moreThan(100),
  quantityInStock: yup.number().required().min(0),
  description: yup.string().required("Description is required"),
  file: yup.mixed().when("pictureUrl", {
    is: (value: string) => !value,
    then: (schema) => schema.required("Picture is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
