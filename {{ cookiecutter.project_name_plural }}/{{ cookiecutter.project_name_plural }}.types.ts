import * as React from "react";
import { SubmitHandler } from "react-hook-form";

// API response
type {{ cookiecutter.project_name_plural }}Get = {
  id: string;
  name: string;
  email: string;
};

// Payload for API requests
type {{ cookiecutter.project_name_plural }}Insert = {
  name: string;
  email: string;
};

type {{ cookiecutter.project_name_plural }}Patch = {
  name: string;
  email: string;
};

// Form
type {{ cookiecutter.project_name_plural }}FormInputs = {
  name: string;
  email: string;
};

type {{ cookiecutter.project_name_plural }}FormProps = Omit<
  React.ComponentPropsWithoutRef<"form">,
  "onSubmit"
> & {
  onSubmit?: SubmitHandler<{{ cookiecutter.project_name_plural }}FormInputs>;
  isLoading?: boolean;
  defaultValues?: {{ cookiecutter.project_name_plural }}FormInputs;
};

type {{ cookiecutter.project_name_plural }}FormElement = React.ElementRef<"form">;

export type {
  {{ cookiecutter.project_name_plural }}Get,
  {{ cookiecutter.project_name_plural }}Insert,
  {{ cookiecutter.project_name_plural }}Patch,
  {{ cookiecutter.project_name_plural }}FormElement,
  {{ cookiecutter.project_name_plural }}FormProps,
  {{ cookiecutter.project_name_plural }}FormInputs,
};
