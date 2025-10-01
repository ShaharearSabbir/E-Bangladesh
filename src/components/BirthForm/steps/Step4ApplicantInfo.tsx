import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup } from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";

export default function Step4() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-semibold">Step 4: Applicant Information</h2>

            {/* Applicant Name */}
            <div>
                <Label className="mb-1 block">Name of Applicant</Label>
                <Input
                    {...register("applicantName", { required: "Applicant's name is required" })}
                    placeholder="Applicant's Full Name"
                />
                {errors.applicantName && (
                    <p className="text-red-500 text-sm">{errors.applicantName.message as string}</p>
                )}
            </div>

            {/* Relation to Child */}
            <div>
                <Label className="mb-1 block">Relation to Child</Label>
                <Controller
                    control={control}
                    name="relationToChild"
                    rules={{ required: "Relation to child is required" }}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Relation" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Relation</SelectLabel>
                                    <SelectItem value="father">Father</SelectItem>
                                    <SelectItem value="mother">Mother</SelectItem>
                                    <SelectItem value="guardian">Guardian</SelectItem>
                                    <SelectItem value="self">Self (18+)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.relationToChild && (
                    <p className="text-red-500 text-sm">{errors.relationToChild.message as string}</p>
                )}
            </div>

            {/* ID Number */}
            <div>
                <Label className="mb-1 block">ID Number (NID or Passport)</Label>
                <Input
                    {...register("applicantID", { required: "ID number is required" })}
                    placeholder="NID / Passport"
                />
                {errors.applicantID && (
                    <p className="text-red-500 text-sm">{errors.applicantID.message as string}</p>
                )}
            </div>

            {/* Contact Number */}
            <div>
                <Label className="mb-1 block">Contact Number</Label>
                <Input
                    {...register("contactNumber", { required: "Contact number is required" })}
                    placeholder="Phone number"
                />
                {errors.contactNumber && (
                    <p className="text-red-500 text-sm">{errors.contactNumber.message as string}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <Label className="mb-1 block">Email</Label>
                <Input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                    })}
                    placeholder="email@example.com"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message as string}</p>
                )}
            </div>

            {/* Signature */}
            <div>
                <Label className="mb-1 block">Signature</Label>
                <Input
                    type="file"
                    {...register("signature", { required: "Signature is required" })}
                />
                {errors.signature && (
                    <p className="text-red-500 text-sm">{errors.signature.message as string}</p>
                )}
            </div>
        </div>
    );
}
