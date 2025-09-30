"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
}

interface ParentsFormValues {
  fatherNameBangla: string;
  fatherNameEnglish: string;
  motherNameBangla: string;
  motherNameEnglish: string;
  fatherNid: string;
  motherNid: string;
}

const Step2ParentsInfo: React.FC<Step2Props> = ({ nextStep, prevStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ParentsFormValues>();

  const onSubmit: SubmitHandler<ParentsFormValues> = (data) => {
    console.log("Step2 Data:", data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold">Step 2: Parents Information</h2>

      <div>
        <Label htmlFor="fatherNameBangla">Father’s Name (Bangla)</Label>
        <Input id="fatherNameBangla" {...register("fatherNameBangla", { required: true })} />
        {errors.fatherNameBangla && <p className="text-red-500 text-sm">Required</p>}
      </div>

      <div>
        <Label htmlFor="fatherNameEnglish">Father’s Name (English)</Label>
        <Input id="fatherNameEnglish" {...register("fatherNameEnglish", { required: true })} />
      </div>

      <div>
        <Label htmlFor="motherNameBangla">Mother’s Name (Bangla)</Label>
        <Input id="motherNameBangla" {...register("motherNameBangla", { required: true })} />
      </div>

      <div>
        <Label htmlFor="motherNameEnglish">Mother’s Name (English)</Label>
        <Input id="motherNameEnglish" {...register("motherNameEnglish", { required: true })} />
      </div>

      <div>
        <Label htmlFor="fatherNid">Father’s NID/Passport</Label>
        <Input id="fatherNid" {...register("fatherNid", { required: true })} />
      </div>

      <div>
        <Label htmlFor="motherNid">Mother’s NID/Passport</Label>
        <Input id="motherNid" {...register("motherNid", { required: true })} />
      </div>

      <div className="flex justify-between">
        <Button type="button" onClick={prevStep} variant="outline">Back</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Step2ParentsInfo;
