import { useState } from 'react';

export default () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };
  const handleLoginModalClose = () => {
    setIsLoginVisible(false);
  };

  return [isLoginVisible, handleLoginClick, handleLoginModalClose ];
};
