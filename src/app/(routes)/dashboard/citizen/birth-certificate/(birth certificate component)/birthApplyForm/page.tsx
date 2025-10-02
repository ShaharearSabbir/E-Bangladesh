"use client";

import MultiStepForm from "@/components/BirthForm/MultiStepForm";

const MultiStepBirthForm: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-[90vh] flex items-center justify-center p-4">
            <div className="w-full max-w-6xl  rounded-xl p-4 sm:p-6 md:p-8">
                <MultiStepForm />
            </div>
        </div>
    );
};

export default MultiStepBirthForm;
