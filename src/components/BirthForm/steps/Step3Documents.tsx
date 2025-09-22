"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step3Props {
  nextStep: () => void;
  prevStep: () => void;
}

interface DocumentFormValues {
  birthProof: FileList;
  addressProof: FileList;
}

const Step3Documents: React.FC<Step3Props> = ({ nextStep, prevStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<DocumentFormValues>();

  const onSubmit: SubmitHandler<DocumentFormValues> = (data) => {
    console.log("Step3 Data:", data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold">Step 3: Documents</h2>

      <div>
        <Label htmlFor="birthProof">Proof of Birth</Label>
        <Input type="file" id="birthProof" {...register("birthProof", { required: true })} />
        {errors.birthProof && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div>
        <Label htmlFor="addressProof">Proof of Permanent Address</Label>
        <Input type="file" id="addressProof" {...register("addressProof", { required: true })} />
        {errors.addressProof && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div className="flex justify-between">
        <Button type="button" onClick={prevStep} variant="outline">Back</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Step3Documents;
