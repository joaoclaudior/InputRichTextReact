import React from "react";

import RichText from "./RichText";

const EditorFieldComponent = props => {
  const { input: { onChange, value }, heigth, width} = props;

  return (
    <RichText onChange={onChange} value={value} width={width} heigth={heigth}/>
  );
};

export default EditorFieldComponent;