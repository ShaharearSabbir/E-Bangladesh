"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Step4Props {
    prevStep: () => void;
}

interface ApplicantFormValues {
    applicantName: string;
    relation: string; // Father, Mother, Guardian, Self
    applicantNid: string;
    contact: string;
    email: string;
}

const Step4ApplicantInfo: React.FC<Step4Props> = ({ prevStep }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ApplicantFormValues>();

    const onSubmit: SubmitHandler<ApplicantFormValues> = (data) => {
        console.log("Step4 Data:", data);
        toast.success("Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-xl font-semibold">Step 4: Applicant Information</h2>

            <div>
                <Label htmlFor="applicantName">Applicant Name</Label>
                <Input id="applicantName" {...register("applicantName", { required: true })} />
                {errors.applicantName && <p className="text-red-500 text-sm">Required</p>}
            </div>

            <div>
                <Label htmlFor="relation">Relation to Child</Label>
                <Input id="relation" placeholder="Father / Mother / Guardian / Self" {...register("relation", { required: true })} />
            </div>

            <div>
                <Label htmlFor="applicantNid">Applicant NID/Passport</Label>
                <Input id="applicantNid" {...register("applicantNid", { required: true })} />
            </div>

            <div>
                <Label htmlFor="contact">Contact Number</Label>
                <Input id="contact" {...register("contact", { required: true })} />
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" {...register("email", { required: true })} />
            </div>

            <div className="flex justify-between">
                <Button type="button" onClick={prevStep} variant="outline">Back</Button>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
};

export default Step4ApplicantInfo;
