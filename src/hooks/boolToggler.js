import { useState, useCallback } from 'react';

export default (defaultValue) => {
  const [isTrue, setIsTrue] = useState(defaultValue || false);

  const handleSetTrue = useCallback(() => {
    setIsTrue(true);
  }, [setIsTrue]);

  const handleSetFalse = useCallback(() => {
    setIsTrue(false);
  }, [setIsTrue]);

  const toggle = useCallback(() => {
      setIsTrue(value => !value)
    },
    [setIsTrue],
  );

  return [isTrue, handleSetTrue, handleSetFalse, toggle ];
};
