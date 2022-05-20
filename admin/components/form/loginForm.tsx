import { useState } from 'react';
import { Form } from 'react-final-form';
import { TextField, makeValidate, makeRequired } from 'mui-rff';
import { LoginValidatorSchema } from "../validator/loginValidatorSchema";
import { Grid, Button, CssBaseline } from '@material-ui/core';

import styles from "../../styles/components/login.module.scss"

export default function LoginForm(props){
    const validate = makeValidate(LoginValidatorSchema); 
    const required = makeRequired(LoginValidatorSchema);
    const [submittedValues, setSubmittedValues] = useState(undefined);

    const formFields = [
        <TextField
            label="Username"
            name="username"
            required={required.username}
            variant="outlined"
        />,
        <TextField
            label="Password"
            name="password"
            type="password"
            required={required.password}
            variant="outlined"
        />
    ];

    return (
        <>
        <CssBaseline />
        <Form     
            onSubmit={props.handleLogin}
            subscription={true}
            initialValues={props.initialValues}
            validate={validate}
            key={true}
            render={({handleSubmit, submitting, form}) => (
                <form
                    onSubmit={handleSubmit}
                    noValidate={true}
                >
                    {formFields.map((field, index) => (
                        <Grid 
                            className={styles.item}
                            item key={index}> 
                            {field}
                        </Grid>
                    ))}
                    <div className={`${styles.login_error} ${!props.loginError ? styles.hidden : undefined}`}>
                        <span>Wrong username or password!</span>
                    </div>
                    <Button
                        className={styles.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting}
                    >
                        Login
                    </Button>
                </form>
            )}
        />
        </>
    )
}