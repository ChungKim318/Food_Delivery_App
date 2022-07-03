import React, {useState, useCallback} from 'react';
const useFormInput = initial => {
  const [value, setValue] = useState(initial.value);
  const onChange = useCallback(text => setValue(text), []);
  return {
    value,
    onChange,
  };
};

export default useFormInput;
