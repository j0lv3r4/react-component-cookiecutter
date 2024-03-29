import * as React from "react";
import * as _ from "lodash-es";
import { SubmitHandler, useForm } from "react-hook-form";
import * as T from "./{{ cookiecutter.project_name_plural }}.types.ts";

const {{ cookiecutter.project_name_plural }}Form = React.forwardRef<
  T.{{ cookiecutter.project_name_plural }}FormElement,
  T.{{ cookiecutter.project_name_plural }}FormProps
>(({ onSubmit, isLoading, defaultValues, ...props }, forwardedRef) => {
  const { handleSubmit, register } = useForm<T.{{ cookiecutter.project_name_plural }}FormInputs>({
    defaultValues: {
      ...defaultValues,
    },
  });

  // If we pass defaultValues then it means we are updating the record.
  const isUpdate = !_.isEmpty(defaultValues);

  const submitHandler: SubmitHandler<T.{{ cookiecutter.project_name_plural }}FormInputs> = (data) => {
    onSubmit?.(data);
  };

  console.log("is loading", isLoading);

  return (
    <form {...props} onSubmit={handleSubmit(submitHandler)} ref={forwardedRef}>
      <input type="email" {...register("email", { required: true })} />
      <button type="submit">{isUpdate ? "Update" : "Create"}</button>
    </form>
  );
});

export { {{ cookiecutter.project_name_plural }}Form };
