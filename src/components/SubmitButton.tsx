import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

interface SubmitProps {
  loadingText: string;
  submitText: string;
  className?: string;
}

const SubmitButton = ({ loadingText, submitText, className }: SubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`bg-primary ${className && className
        }`}
      disabled={pending}
    >
      {pending ? loadingText : submitText}
    </Button>
  );
};

export default SubmitButton;
