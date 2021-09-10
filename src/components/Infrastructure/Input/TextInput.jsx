/** @format */

import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormLabel } from "react-bootstrap";
import styles from "./textInput.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { errorHandling } from "../../../utilities/errorHandling";
const TextInput = ({
  name,
  id,
  inputClassName,
  labelClassName,
  labelText,
  type,
  maxLength,
  hasExtraTag,
  extraTag,
  placeholder,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles["form-group"]}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <>
            {labelText && (
              <FormLabel className={labelClassName} htmlFor={id}>
                {labelText}
              </FormLabel>
            )}
            <FormControl
              id={id}
              type={type}
              name={name}
              value={value}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              className={`${styles["text-input"]} inputClassName`}
              maxLength={maxLength}
              placeholder={placeholder}
            />
            {errors?.[name]?.message && (
              <span className="error-text">
                {errorHandling(errors?.[name].message)}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  ref: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.number,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  hasExtraTag: PropTypes.bool,
  extraTag: PropTypes.node,
  placeholder: PropTypes.string,
};
TextInput.defaultProps = {
  id: "",
  value: "",
  ref: () => {},
  onChange: () => {},
  onBlur: () => {},
  type: "text",
  name: "input",
  className: "",
  maxLength: 50,
  labelClassName: "",
  labelText: "input",
  hasExtraTag: false,
  extraTag: null,
  placeholder: "",
};
export default TextInput;
