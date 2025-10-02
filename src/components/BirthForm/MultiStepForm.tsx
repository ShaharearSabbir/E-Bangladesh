"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";

import { UserOnDatabase } from "../../type/userType";
import Step1ChildInfo from "./steps/Step1ChildInfo";
import AddressForm from "./steps/AddressForm";
import Step2ParentsInfo from "./steps/Step2ParentsInfo";
import Step3Documents from "./steps/Step3Documents";
import Step4ApplicantInfo from "./steps/Step4ApplicantInfo";
import { Button } from "../ui/button";

const MultiStepForm = () => {
    const methods = useForm({ mode: "onChange" });
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const nextStep = async () => {
        const valid = await methods.trigger();
        if (valid) setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep((prev) => prev - 1);

    const onSubmit = async (formData: any) => {
        setIsSubmitting(true);

        const payload: Partial<UserOnDatabase> = {
            UID: formData.applicantID || "",
            email: formData.email,
            role: "citizen", // default role
            createdAt: new Date().toISOString(),
            isVerified: false,

            // Personal Information
            firstName: formData.firstName || formData.firstNameBn,
            lastName: formData.lastName || formData.lastNameBn,
            gender: formData.gender,
            bloodGroup: formData.bloodGroup,
            DOB: formData.DOB,
            placeOfBirth: formData.placeOfBirth,
            religion: formData.religion,
            disabilities: formData.disabilities,
            birthMark: formData.birthMark,

            // Contact
            mobileNumber: formData.contactNumber,

            // Addresses
            presentAddress: formData.presentAddress
                ? {
                    division: formData.presentAddress.division,
                    district: formData.presentAddress.district,
                    upazila: formData.presentAddress.upazila,
                    union: formData.presentAddress.union,
                    village: formData.presentAddress.village,
                    postOffice: formData.presentAddress.postOffice,
                    postCode: formData.presentAddress.postCode,
                    holdingNumber: formData.presentAddress.holdingNumber,
                    word: formData.presentAddress.word,
                    voterArea: formData.presentAddress.voterArea,
                    mouza: formData.presentAddress.mouza,
                }
                : undefined,

            permanentAddress: formData.permanentAddress
                ? {
                    division: formData.permanentAddress.division,
                    district: formData.permanentAddress.district,
                    upazila: formData.permanentAddress.upazila,
                    union: formData.permanentAddress.union,
                    village: formData.permanentAddress.village,
                    postOffice: formData.permanentAddress.postOffice,
                    postCode: formData.permanentAddress.postCode,
                    holdingNumber: formData.permanentAddress.holdingNumber,
                    word: formData.permanentAddress.word,
                    voterArea: formData.permanentAddress.voterArea,
                    mouza: formData.permanentAddress.mouza,
                }
                : undefined,

            // Parents
            father: formData.father
                ? {
                    name: formData.father.name,
                    ID: formData.father.ID,
                    relation: "father",
                    isDead: formData.father.isDead,
                    dateOfDeath: formData.father.dateOfDeath,
                    occupation: formData.father.occupation,
                }
                : undefined,

            mother: formData.mother
                ? {
                    name: formData.mother.name,
                    ID: formData.mother.ID,
                    relation: "mother",
                    isDead: formData.mother.isDead,
                    dateOfDeath: formData.mother.dateOfDeath,
                    occupation: formData.mother.occupation,
                }
                : undefined,

            updatedAt: new Date().toISOString(),
        };

        console.log(payload);
        toast.success("Form submitted successfully!");
        setIsSubmitting(false);
    };

    return (
        <FormProvider {...methods}>
            <div className="p-6 bg-background rounded-2xl space-y-6 border shadow-2xl mx-auto">
                <h1 className="text-2xl font-bold text-center">
                    Birth Certificate Registration
                </h1>

                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    {step === 1 && <Step1ChildInfo />}
                    {step === 2 && <AddressForm />}
                    {step === 3 && <Step2ParentsInfo />}
                    {step === 4 && <Step3Documents />}
                    {step === 5 && <Step4ApplicantInfo />}

                    <div
                        className={`flex items-center ${step === 1 ? "justify-end" : "justify-between"
                            } pt-6`}
                    >
                        {step > 1 && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={prevStep}
                            >
                                Back
                            </Button>
                        )}
                        {step < 5 && (
                            <Button type="button" onClick={nextStep}>
                                Next
                            </Button>
                        )}
                        {step === 5 && (
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default MultiStepForm;
