import React from "react";
import { useFormStatus } from "react-dom";

interface SubmitProps {
  loadingText: string;
  submitText: string;
  className?: string;
}

const SubmitButton = ({ loadingText, submitText, className }: SubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`keeping temp string if frontend dev wanna add something ${
        className && className
      }`}
      disabled={pending}
    >
      {pending ? loadingText : submitText}
    </button>
  );
};

export default SubmitButton;
