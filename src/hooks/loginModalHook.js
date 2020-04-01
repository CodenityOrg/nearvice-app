import { useState, useCallback } from 'react';

export default () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginClick = useCallback(() => {
    setIsLoginVisible(true);
  }, [setIsLoginVisible]);

  const handleLoginModalClose = useCallback(() => {
    setIsLoginVisible(false);
  }, [setIsLoginVisible]);

  return [isLoginVisible, handleLoginClick, handleLoginModalClose ];
};
