import { useState } from 'react';

import { Form } from 'react-final-form';
import { TextField, Select, makeValidate, makeRequired } from 'mui-rff';
import { Grid, Button, MenuItem, CssBaseline, Typography } from '@material-ui/core';

import { ProductValidatorSchema } from '../validator/productValidatorSchema'
import styles from '../../styles/components/form.module.scss'

export default function ProductForm(props){
    const validate = makeValidate(ProductValidatorSchema);
    const required = makeRequired(ProductValidatorSchema);

    const [submittedValues, setSubmittedValues] = useState(undefined)

    const formFields = [
        <TextField
            label="Image URL"
            name="img"
            required={required.img}
            variant="outlined"
        />,
        <TextField
            label="Title"
            name="title"
            required={required.title}
            variant="outlined"
        />,
        <TextField
            label="Description"
            name="description"
            required={required.description}
            variant="outlined"
        />,
        <TextField
            label="Description"
            name="description"
            required={required.description}
            variant="outlined"
        />,
        <TextField
            label="Categories"
            name="cat"
            variant="outlined"
        />,
        <TextField
            label="Version"
            name="version"
            variant="outlined"
        />,
        <TextField
            label="Method"
            name="method"
            variant="outlined"
        />,
        <TextField
            label="Price"
            name="price"
            type="number"
            required={required.price}
            variant="outlined"
        />,
        <Select name="inStock" label="In stock" formControlProps={{ margin: 'normal' }}>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
        </Select>
    ];

    return (
        <>
        <CssBaseline />
        <Form
            onSubmit={props.handleSubmitProduct}
            subscription={true}
            initialValues={props.selectedProduct}
            validate={validate}
            key={true}
            render={({handleSubmit, submitting, form}) => (
                <form
                    onSubmit={handleSubmit}
                    noValidate={true}
                >   
                    <Typography variant="h6" className={styles.title}>
                        Product Form
                    </Typography>
                    {formFields.map((field, index) => (
                        <Grid 
                            className={styles.item}
                            item key={index}> 
                            {field}
                        </Grid>
                    ))}
                    <Button
                        className={styles.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting}
                    >
                        Confirm
                    </Button>
                    <Button
                        className={styles.button}
                        variant="contained"
                        disabled={submitting}
                        onClick={props.toggleProductForm}
                    >
                        Cancel
                    </Button>
                </form>
            )}
        />
        </>
    );
}