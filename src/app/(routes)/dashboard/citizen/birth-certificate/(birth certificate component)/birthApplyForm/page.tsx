"use client";
import { BirthPlaceInfo } from "@/components/Birthcertificate/BirthPlaceInfo";
import { ChildInfo } from "@/components/Birthcertificate/ChildInfo";
import { ParentsInfo } from "@/components/Birthcertificate/ParentsInfo";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type BirthCertificateForm = {
    // Child Info
    firstNameBangla: string;
    lastNameBangla: string;
    firstNameEnglish: string;
    lastNameEnglish: string;
    gender: "male" | "female" | "thirdGender";
    birthOrder: string;
    customBirthOrder?: string;
    dateOfBirth: string;

    // Place of Birth
    country: string;
    division: string;
    district: string;
    upazila: string;
    unionWard: string;
    postOfficeBangla: string;
    postOfficeEnglish: string;
    villageBangla: string;
    villageEnglish: string;
    houseBangla: string;
    houseEnglish: string;

    // Parents
    fatherNameBangla: string;
    fatherNameEnglish: string;
    motherNameBangla: string;
    motherNameEnglish: string;
    fatherID: string;
    motherID: string;
    fatherBRN?: string;
    motherBRN?: string;
    fatherOccupation: string;
    motherOccupation: string;
    fatherNationality: string;
    motherNationality: string;
    permanentAddress: string;
};

const MultiStepBirthForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const methods = useForm<BirthCertificateForm>({ mode: "onSubmit" });
    const { handleSubmit, trigger } = methods;

    const onSubmit: SubmitHandler<BirthCertificateForm> = (data) => {
        console.log("Final Form Data:", data);
        alert("Form submitted! Check console.");
    };

    const handleNext = async () => {
        let fieldsToValidate: (keyof BirthCertificateForm)[] = [];

        if (step === 1) {
            fieldsToValidate = [
                "firstNameBangla",
                "lastNameBangla",
                "firstNameEnglish",
                "lastNameEnglish",
                "gender",
                "birthOrder",
                "dateOfBirth",
            ];
        } else if (step === 2) {
            fieldsToValidate = [
                "country",
                "division",
                "district",
                "upazila",
                "unionWard",
                "postOfficeBangla",
                "postOfficeEnglish",
                "villageBangla",
                "villageEnglish",
                "houseBangla",
                "houseEnglish",
            ];
        }

        const valid = await trigger(fieldsToValidate);
        if (valid) setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    return (
        <div className="bg-gray-100 min-h-[90vh]">
            <h1 className="text-3xl text-center font-bold pb-20 pt-10">Apply for New Birth Certificate</h1>
            <FormProvider {...methods} >


                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-8 max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md"
                >
                    {/* Step forms */}
                    {step === 1 && <ChildInfo />}
                    {step === 2 && <BirthPlaceInfo />}
                    {step === 3 && <ParentsInfo />}

                    {/* Navigation buttons */}
                    <div className="flex justify-between pt-6 border-t">
                        {step > 1 ? (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleBack}
                                className="w-32"
                            >
                                Back
                            </Button>
                        ) : (
                            <div />
                        )}

                        {step < 3 ? (
                            <Button
                                type="button"
                                onClick={handleNext}
                                className="w-32"
                            >
                                Next
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                variant="default"
                                className="w-32 bg-green-600 hover:bg-green-700"
                            >
                                Submit
                            </Button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default MultiStepBirthForm;
