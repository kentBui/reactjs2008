import { useState } from "react";

export default function useInputHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
}
