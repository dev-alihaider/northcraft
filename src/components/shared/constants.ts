import * as yup from 'yup';

export const buttons = [
  "All Works",
  "Renovations",
  "Extensions",
  "New builds",
  "Decks",
  "Fences",
  "Retaining walls",
  "Heritage works",
  "Maintenance",
  "Contracting",
];

export const initialFormData = {
  name: "",
  email: "",
  phoneNumber: "",
  service: "",
  description: "",
};

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber: yup.string().min(6, "Please enter a valid phone number").required("Phone number is required"),
  service: yup.string().required("Service is required"),
  description: yup.string().min(50, "Please enter atleast 50 characters").required("Description is required"),
});
