import * as React from "react";
import { SubmitHandler } from "react-hook-form";

// API response
type NounInPluralGet = {
  id: string;
  name: string;
  email: string;
};

// Payload for API requests
type NounInPluralInsert = {
  name: string;
  email: string;
};

type NounInPluralPatch = {
  name: string;
  email: string;
};

// Form
type NounInPluralFormInputs = {
  name: string;
  email: string;
};

type NounInPluralFormProps = Omit<
  React.ComponentPropsWithoutRef<"form">,
  "onSubmit"
> & {
  onSubmit?: SubmitHandler<NounInPluralFormInputs>;
  isLoading?: boolean;
  defaultValues?: NounInPluralFormInputs;
};

type NounInPluralFormElement = React.ElementRef<"form">;

export type {
  NounInPluralGet,
  NounInPluralInsert,
  NounInPluralPatch,
  NounInPluralFormElement,
  NounInPluralFormProps,
  NounInPluralFormInputs,
};
