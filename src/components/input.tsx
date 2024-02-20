import React from "react";

type InputButtonProps = {
  onClick: () => void;
  inputValue: string;
  onChange: (value: string) => void;
};

const InputButton: React.FC<InputButtonProps> = ({
  onClick,
  inputValue,
  onChange,
}) => {
  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder='количество звёзд, (1-5)'
      />
      <button onClick={onClick}>press me</button>
    </div>
  );
};

export default InputButton;
