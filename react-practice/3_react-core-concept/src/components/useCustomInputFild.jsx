import React, { useState } from 'react'

export default function useCustomInputFild(defultValue) {
  const [customValue, setCustomValue] = useState(defultValue);

  const handleCustomHook = (e) => {
    setCustomValue(e.target.value);
  }

  return [customValue, handleCustomHook]
}
