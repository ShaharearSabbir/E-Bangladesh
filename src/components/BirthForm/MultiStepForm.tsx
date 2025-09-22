"use client";
import React, { useState } from "react";
import Step1ChildInfo from "./steps/Step1ChildInfo";
import Step2ParentsInfo from "./steps/Step2ParentsInfo";
import Step3Documents from "./steps/Step3Documents";
import Step4ApplicantInfo from "./steps/Step4ApplicantInfo";



const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <div className="p-6 bg-background rounded-2xl space-y-6 border shadow-2xl">
            <h1 className="text-2xl font-bold text-center mb-6">Birth Certificate Registration</h1>
            {step === 1 && <Step1ChildInfo nextStep={nextStep} />}
            {step === 2 && <Step2ParentsInfo nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <Step3Documents nextStep={nextStep} prevStep={prevStep} />}
            {step === 4 && <Step4ApplicantInfo prevStep={prevStep} />}
        </div>
    );
};

export default MultiStepForm;
