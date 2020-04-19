import { useState, useCallback } from 'react';
import useBoolToggler from './boolToggler';

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default (type = 'text', defaultValue = '') => {
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
      return true;
    }
    if (type === 'email' && (!fieldValue.trim() || !emailRegexp.test(fieldValue))) {
      setHasErrorTrue();
      return true;
    }
    setHasErrorFalse();
    return false;
  }, [fieldValue, setHasErrorTrue, setHasErrorFalse, type]);

  return {
    fieldData: {
      value: fieldValue,
      onChange: handleOnChange,
      type
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
