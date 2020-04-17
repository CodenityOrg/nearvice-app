import { useState, useCallback } from 'react';
import useBoolToggler from './boolToggler';

export default (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);
  const [hasError, setHasErrorTrue, setHasErrorFalse] = useBoolToggler();

  const handleOnChange = useCallback(e => {
    setFieldValue(e.target.value);
  }, [setFieldValue]);

  const reset = useCallback(() => {
    setFieldValue(defaultValue);
    setHasErrorFalse();
  }, [setFieldValue, defaultValue, setHasErrorFalse]);

  const checkError = useCallback(() => {
    if (!fieldValue.trim()) {
      setHasErrorTrue();
    } else {
      setHasErrorFalse();
    }
  }, [fieldValue, setHasErrorTrue, setHasErrorFalse]);

  return {
    fieldData: {
      value: fieldValue,
      onChange: handleOnChange
    },
    errorData: {
      value: hasError,
      checkError,
      setHasErrorTrue,
      setHasErrorFalse
    },
    reset
  };
};
