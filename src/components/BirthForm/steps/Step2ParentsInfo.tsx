import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Step2ParentsInfo() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const isFatherDead = watch("father.isDead");
  const isMotherDead = watch("mother.isDead");

  return (
    <div className="space-y-6 max-w-6xl">
      <h2 className="text-lg font-semibold">Step 3: Parents' Information</h2>

      <div className="grid grid-cols-2 gap-10">
        {/* Father Information */}
        <div className="space-y-4">
          <div>
            <Label className="mb-1 block">Father's Full Name</Label>
            <Input
              {...register("father.name", { required: "Father's name is required" })}

            />
            {errors.father?.name && (
              <p className="text-red-500 text-sm">{errors.father.name.message as string}</p>
            )}
          </div>

          <div>
            <Label className="mb-1 block">Father's ID (NID/Passport)</Label>
            <Input
              {...register("father.ID", {
                required: "Father's ID is required",
                minLength: { value: 10, message: "ID must be at least 10 digits" },
              })}

            />
            {errors.father?.ID && (
              <p className="text-red-500 text-sm">{errors.father.ID.message as string}</p>
            )}
          </div>

          <div>
            <Label className="mb-1 block">Occupation</Label>
            <Input {...register("father.occupation")} />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isFatherDead}
              onCheckedChange={(checked) => setValue("father.isDead", checked)}
            />
            <Label>Deceased</Label>
          </div>

          {isFatherDead && (
            <div>
              <Label className="mb-1 block">Date of Death</Label>
              <Input
                {...register("father.dateOfDeath")}
                type="date"
                placeholder="Date of Death"
              />
            </div>
          )}
        </div>

        {/* Mother Information */}
        <div className="space-y-4">

          <div>
            <Label className="mb-1 block">Mother's Full Name</Label>
            <Input
              {...register("mother.name", { required: "Mother's name is required" })}

            />
            {errors.mother?.name && (
              <p className="text-red-500 text-sm">{errors.mother.name.message as string}</p>
            )}
          </div>

          <div>
            <Label className="mb-1 block">Mother's ID (NID/Passport)</Label>
            <Input
              {...register("mother.ID", {
                required: "Mother's ID is required",
                minLength: { value: 10, message: "ID must be at least 10 digits" },
              })}

            />
            {errors.mother?.ID && (
              <p className="text-red-500 text-sm">{errors.mother.ID.message as string}</p>
            )}
          </div>

          <div>
            <Label className="mb-1 block">Occupation</Label>
            <Input {...register("mother.occupation")} />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isMotherDead}
              onCheckedChange={(checked) => setValue("mother.isDead", checked)}
            />
            <Label>Deceased</Label>
          </div>

          {isMotherDead && (
            <div>
              <Label className="mb-1 block">Date of Death</Label>
              <Input
                {...register("mother.dateOfDeath")}
                type="date"
                placeholder="Date of Death"
              />
            </div>
          )}
        </div>

        {/* Additional Fields */}
        <div>
          <Label className="mb-1 block">Nationality of Parents</Label>
          <Input {...register("parentsNationality", { required: "Nationality is required" })} />
          {errors.parentsNationality && (
            <p className="text-red-500 text-sm">{errors.parentsNationality.message as string}</p>
          )}
        </div>

        <div>
          <Label className="mb-1 block">Permanent Address</Label>
          <Input {...register("parentPermanentAddress", { required: "Permanent address is required" })} />
          {errors.permanentAddress && (
            <p className="text-red-500 text-sm">{errors.permanentAddress.message as string}</p>
          )}
        </div>

        <div>
          <Label className="mb-1 block">Village / Neighborhood (English)</Label>
          <Input {...register("villageEnglish")} />
        </div>
      </div>
    </div>
  );
}
