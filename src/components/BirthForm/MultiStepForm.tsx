"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1ChildInfo from "./steps/Step1ChildInfo";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Step2ParentsInfo from "./steps/Step2ParentsInfo";
import Step3Documents from "./steps/Step3Documents";
import Step4ApplicantInfo from "./steps/Step4ApplicantInfo";

export type FormValues = {
    // Step 1
    firstNameBangla: string;
    lastNameBangla: string;
    firstNameEnglish: string;
    lastNameEnglish: string;
    dateOfBirth: string;
    gender: string;
    birthOrder: string;
    country: string;
    division: string;
    district: string;
    upazila: string;
    union: string;
    postOfficeBangla: string;
    postOfficeEnglish: string;

    // Step 2
    fatherNameBangla: string;
    fatherNameEnglish: string;
    motherNameBangla: string;
    motherNameEnglish: string;
    fatherId: number;
    motherId: number;
    parentsBirthReg: string;
    parentsOccupation: string;
    parentsNationality: string;
    permanentAddress: string;
    villageBangla: string;
    villageEnglish: string;

    // Step 3
    proofOfBirth: string;
    proofOfAddress: string;
    additionalDocs: string;
    houseNoBangla: string;
    houseNoEnglish: string;

    // Step 4
    applicantName: string;
    applicantRelation: string;
    applicantId: string;
    contactNumber: string;
    email: string;
    signature: string;
};

const MultiStepForm = () => {
    const methods = useForm<FormValues>();
    const [step, setStep] = useState(1);

    const nextStep = async () => {
        const valid = await methods.trigger();
        if (valid) setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep((prev) => prev - 1);

    const onSubmit = (data: FormValues) => {
        console.log("✅ Final Data:", data);

        if(data.dateOfBirth )

        toast.success("Form submitted successfully!");
    };

    return (
        <FormProvider {...methods}>
            <div className="p-6  bg-background rounded-2xl space-y-6 border shadow-2xl  mx-auto">
                <h1 className="text-2xl font-bold text-center">
                    Birth Certificate Registration
                </h1>

                <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                    {step === 1 && <Step1ChildInfo />}
                    {step === 2 && <Step2ParentsInfo />}
                    {step === 3 && <Step3Documents />}
                    {step === 4 && <Step4ApplicantInfo />}

                    <div className={`flex items-center ${step === 1 ? "justify-end" : "justify-between"} pt-6`}>
                        {step > 1 && (
                            <Button type="button" variant="outline" onClick={prevStep}>
                                Back
                            </Button>
                        )}
                        {step < 4 && (
                            <Button type="button" onClick={nextStep}>
                                Next
                            </Button>
                        )}
                        {step === 4 && <Button type="submit">Submit</Button>}
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default MultiStepForm;
