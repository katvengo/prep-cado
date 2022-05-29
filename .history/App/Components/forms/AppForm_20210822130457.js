import React from 'react';

import { Formik } from 'formik'

function AppForm ({initialValues, onSubmit, validationSchema, children, ...otherProps
}) { 
return ( 
<Formik
initialValues={initialValues}
onSubmit={onSubmit}
validationSchema={validationSchema}
{...otherProps}
{meta.touched && meta.error ? (
    <div className="error">{meta.error}</div>
  ) : null}
>
{() => (
    <>
    {children}
    </>
)}
</Formik>
);
}

export default AppForm