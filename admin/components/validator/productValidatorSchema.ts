import * as Yup from 'yup';

export const ProductValidatorSchema = Yup.object().shape({
    title: Yup.string().required("Name is required!"),
    desc : Yup.string().required("Description is required!"),
    img: Yup.string().required("Image is required"),
    price: Yup.number().required("Price is required").min(0, "Minimun price is 0!"),
})