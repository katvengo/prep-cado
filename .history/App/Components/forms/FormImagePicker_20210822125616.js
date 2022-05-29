import React from 'react';
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import ImageInput from "../ImageInput";

function FormImagePicker({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

const handleAdd = (uri) => {
  console.log(uri, "uri handleAdd")
    setFieldValue(name, [...imageUris, uri])
};

const handleRemove = (uri) => {
    setFieldValue(
        name,
        imageUris.filter((imageUri) => imageUri !== uri)
    )
}
  return (
    <>
    <ImageInput
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
    <ErrorMessage error={errors.name]} visible={touched[name]} />
  </>  );
}

export default FormImagePicker;