import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Step2() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6 max-w-6xl">
      <h2 className="text-lg font-semibold">Step 2: Parents’ Information</h2>

      <div className="grid grid-cols-2 gap-10">
        {/* Father Name */}
        <div className="space-y-4">
          <div>
            <Label className="mb-1 block">Father’s Full Name (Bangla)</Label>
            <Input
              {...register("fatherNameBangla", { required: "Father's name (Bangla) is required" })}
              placeholder="পিতার নাম"
            />
            {errors.fatherNameBangla && (
              <p className="text-red-500 text-sm">{errors.fatherNameBangla.message as string}</p>
            )}
          </div>

          <div>
            <Label className="mb-1 block">Father’s Full Name (English)</Label>
            <Input
              {...register("fatherNameEnglish", { required: "Father's name (English) is required" })}
              placeholder="Father's Name"
            />
            {errors.fatherNameEnglish && (
              <p className="text-red-500 text-sm">{errors.fatherNameEnglish.message as string}</p>
            )}
          </div>

          <div>
            <Label className="mb-1 block">Father’s ID (NID/Passport)</Label>
            <Input
              {...register("fatherID", {
                required: "Father’s ID is required",
                minLength: { value: 10, message: "ID must be at least 10 digits" },
              })}
              placeholder="e.g., NID or Passport"
              type="number"
            />
            {errors.fatherID && (
              <p className="text-red-500 text-sm">{errors.fatherID.message as string}</p>
            )}
          </div>
        </div>

        {/* Mother Name */}
        <div className="space-y-4">
          <div>
            <Label className="mb-1 block">Mother’s Full Name (Bangla)</Label>
            <Input
              {...register("motherNameBangla", { required: "Mother's name (Bangla) is required" })}
              placeholder="মায়ের নাম"
            />
            {errors.motherNameBangla && (
              <p className="text-red-500 text-sm">{errors.motherNameBangla.message as string}</p>
            )}
          </div>

          <div>
            <Label className="mb-1 block">Mother’s Full Name (English)</Label>
            <Input
              {...register("motherNameEnglish", { required: "Mother's name (English) is required" })}
              placeholder="Mother's Name"
            />
            {errors.motherNameEnglish && (
              <p className="text-red-500 text-sm">{errors.motherNameEnglish.message as string}</p>
            )}
          </div>

          <div>
            <Label className="mb-1 block">Mother’s ID (NID/Passport)</Label>
            <Input
              {...register("motherID", {
                required: "Mother’s ID is required",
                minLength: { value: 10, message: "ID must be at least 10 digits" },
              })}
              placeholder="e.g., NID or Passport"
              type="number"
            />
            {errors.motherID && (
              <p className="text-red-500 text-sm">{errors.motherID.message as string}</p>
            )}
          </div>
        </div>

        {/* Parent Info */}
        <div>
          <Label className="mb-1 block">Occupation of Father</Label>
          <Input {...register("fatherOccupation")} placeholder="Father Occupation" />
        </div>

        <div>
          <Label className="mb-1 block">Occupation of Mother</Label>
          <Input {...register("motherOccupation")} placeholder="Mother Occupation" />
        </div>

        <div>
          <Label className="mb-1 block">Nationality of Parents</Label>
          <Input {...register("parentsNationality", { required: "Nationality is required" })} placeholder="Nationality" />
          {errors.parentsNationality && (
            <p className="text-red-500 text-sm">{errors.parentsNationality.message as string}</p>
          )}
        </div>

        {/* Permanent Address */}
        <div>
          <Label className="mb-1 block">Permanent Address</Label>
          <Input {...register("permanentAddress", { required: "Permanent address is required" })} placeholder="Village / Neighborhood" />
          {errors.permanentAddress && (
            <p className="text-red-500 text-sm">{errors.permanentAddress.message as string}</p>
          )}
        </div>

        <div>
          <Label className="mb-1 block">Village / Neighborhood (English)</Label>
          <Input {...register("villageEnglish")} placeholder="Village / Neighborhood" />
        </div>
      </div>
    </div>
  );
}
