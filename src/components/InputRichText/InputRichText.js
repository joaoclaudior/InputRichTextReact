import React from "react";

import EditorFieldComponent from "./EditorFieldComponent";
import { Field } from "redux-form";

const InputRichText = props => {
  return <Field {...props} component={EditorFieldComponent} width="100%" heigth="300px" />;
};

export default InputRichText;