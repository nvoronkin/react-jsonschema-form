import React, { PropTypes } from "react";

import { defaultFieldValue, getAlternativeWidget } from "../../utils";
import HiddenWidget from "./../widgets/HiddenWidget";


function HiddenField({schema, name, uiSchema, formData, required, onChange}) {
  const {title, description} = schema;
  const widget = uiSchema["ui:widget"];
  const commonProps = {
    schema,
    label: null,
    placeholder: description,
    onChange,
    value: defaultFieldValue(formData, schema),
    required: required,
    defaultValue: schema.default,
  };
  return <HiddenWidget {...commonProps} />;
}

if (process.env.NODE_ENV !== "production") {
  HiddenField.propTypes = {
    schema: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    required: PropTypes.bool,
  };
}

HiddenField.defaultProps = {
  uiSchema: {}
};

export default HiddenField;
