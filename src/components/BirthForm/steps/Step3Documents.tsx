import React from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Step3() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6 max-w-6xl">
      <h2 className="text-lg font-semibold">Step 3: Proof & Documents</h2>

      {/* Proof of Birth */}
      <div>
        <Label className="mb-1 block">Proof of Birth</Label>
        <Input
          type="file"
          {...register("proofOfBirth", { required: "Proof of Birth is required" })}
        />
        {errors.proofOfBirth && (
          <p className="text-red-500 text-sm">{errors.proofOfBirth.message as string}</p>
        )}
      </div>

      {/* Proof of Permanent Address */}
      <div>
        <Label className="mb-1 block">Proof of Permanent Address</Label>
        <Input
          type="file"
          {...register("proofOfAddress", { required: "Proof of Address is required" })}
        />
        {errors.proofOfAddress && (
          <p className="text-red-500 text-sm">{errors.proofOfAddress.message as string}</p>
        )}
      </div>

      {/* Additional Documents */}
      <div>
        <Label className="mb-1 block">Additional Documents (if applicable)</Label>
        <Input type="file" multiple {...register("additionalDocs")} />
      </div>

      {/* House No & Street */}
      <div>
        <Label className="mb-1 block">House No & Street (Bangla)</Label>
        <Input
          {...register("houseBangla", { required: "House No & Street (Bangla) is required" })}
          placeholder="বাড়ি নম্বর ও রাস্তা"
        />
        {errors.houseBangla && (
          <p className="text-red-500 text-sm">{errors.houseBangla.message as string}</p>
        )}
      </div>

      <div>
        <Label className="mb-1 block">House No & Street (English)</Label>
        <Input
          {...register("houseEnglish", { required: "House No & Street (English) is required" })}
          placeholder="House & Street"
        />
        {errors.houseEnglish && (
          <p className="text-red-500 text-sm">{errors.houseEnglish.message as string}</p>
        )}
      </div>
    </div>
  );
}
