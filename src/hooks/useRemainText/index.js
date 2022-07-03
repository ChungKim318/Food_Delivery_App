import React, {useEffect, useState} from 'react';

const useRemainText = (maxLength, lengthValue = 0) => {
  const [value, setValue] = useState({remainText: maxLength, errorMessage: ''});
  useEffect(() => {
    setValue({
      remainText: maxLength - lengthValue,
      errorMessage:
        maxLength - lengthValue < 0 && 'Nhập quá số lượng ký tự cho phép',
    });
  }, [lengthValue]);

  return value;
};

export default useRemainText;
