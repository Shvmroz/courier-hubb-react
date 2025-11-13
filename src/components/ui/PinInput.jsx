import React, { useState, useRef, useEffect } from 'react';

const PinInput = ({ length = 6, value = '', onChange, onComplete }) => {
  const [pins, setPins] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (value) {
      const valueArray = value.split('').slice(0, length);
      const newPins = [...Array(length)].map((_, i) => valueArray[i] || '');
      setPins(newPins);
    }
  }, [value, length]);

  const handleChange = (index, newValue) => {
    if (newValue.length > 1) return;

    const newPins = [...pins];
    newPins[index] = newValue;
    setPins(newPins);

    const pinValue = newPins.join('');
    onChange?.(pinValue);

    if (newValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (pinValue.length === length && !pinValue.includes('')) {
      onComplete?.(pinValue);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !pins[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);
    const newPins = [...Array(length)].map((_, i) => pastedData[i] || '');
    setPins(newPins);

    const pinValue = newPins.join('');
    onChange?.(pinValue);

    if (pinValue.length === length) {
      onComplete?.(pinValue);
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      {pins.map((pin, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={pin}
          onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, ''))}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-14 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-full focus:border-black focus:outline-none transition-all"
        />
      ))}
    </div>
  );
};

export default PinInput;
