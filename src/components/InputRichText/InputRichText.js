import React from "react";

import EditorFieldComponent from "./EditorFieldComponent";
import { Field } from "redux-form";


const InputRichText = props => {
  const {heigth, width} = props;
  return <Field {...props} component={EditorFieldComponent} width={width} heigth={heigth} />;
};

export default InputRichText;