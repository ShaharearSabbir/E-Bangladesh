import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label"; 

export const ParentsInfo = () => {
    const { register } = useFormContext();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Label htmlFor="fatherNameBangla">Father Full Name (Bangla)</Label>
                <Input
                    id="fatherNameBangla"
                    {...register("fatherNameBangla", { required: true })}
                    className="w-full"
                />
            </div>

            <div>
                <Label htmlFor="fatherNameEnglish">Father Full Name (English)</Label>
                <Input
                    id="fatherNameEnglish"
                    {...register("fatherNameEnglish", { required: true })}
                    className="w-full"
                />
            </div>

            <div>
                <Label htmlFor="motherNameBangla">Mother Full Name (Bangla)</Label>
                <Input
                    id="motherNameBangla"
                    {...register("motherNameBangla", { required: true })}
                    className="w-full"
                />
            </div>

            <div>
                <Label htmlFor="motherNameEnglish">Mother Full Name (English)</Label>
                <Input
                    id="motherNameEnglish"
                    {...register("motherNameEnglish", { required: true })}
                    className="w-full"
                />
            </div>

            <div>
                <Label htmlFor="fatherId">Father ID (NID / Passport)</Label>
                <Input id="fatherId" {...register("fatherId")} className="w-full" />
            </div>

            <div>
                <Label htmlFor="motherId">Mother ID (NID / Passport)</Label>
                <Input id="motherId" {...register("motherId")} className="w-full" />
            </div>

            <div className="md:col-span-2">
                <Label htmlFor="parentsBirthRegNo">
                    Parents Birth Registration Numbers (if available)
                </Label>
                <Input
                    id="parentsBirthRegNo"
                    {...register("parentsBirthRegNo")}
                    className="w-full"
                />
            </div>

            <div>
                <Label htmlFor="parentsOccupation">Parents Occupation</Label>
                <Input
                    id="parentsOccupation"
                    {...register("parentsOccupation")}
                    className="w-full"
                />
            </div>

            <div>
                <Label htmlFor="parentsNationality">Parents Nationality</Label>
                <Input
                    id="parentsNationality"
                    {...register("parentsNationality")}
                    className="w-full"
                />
            </div>

            <div className="md:col-span-2">
                <Label htmlFor="permanentAddress">Permanent Address</Label>
                <Input
                    id="permanentAddress"
                    {...register("permanentAddress", { required: true })}
                    className="w-full"
                />
            </div>
        </div>
    );
};
