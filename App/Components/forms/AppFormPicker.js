import React from 'react';
 
import AppPicker from '../AppPicker'
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';

function AppFormPicker ({items, name, placeholder}) { 
 const {errors, setFieldValue, touched, values} = useFormikContext()

    return ( 
     <>
 <AppPicker 
 items={items}
 placeholder={placeholder}
 onSelectItem={(item) => setFieldValue(name, item)}
 selectedItem={values[name]} />
<ErrorMessage error={errors.name} />
</>
 );
 }
 
 export default AppFormPicker