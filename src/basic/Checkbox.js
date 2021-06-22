import React from 'react';

export const Checkbox = ({ input, label, type, meta, className, disabled, initialValue, onChange, meta: { touched, error } }) => (
  <span style={{ border: touched && error ? "1px solid red" : "none" }}>
    <input type="checkbox" className={className} {...input} />
    <label className="form-check-label labelclass">{label}</label>
  </span>
)