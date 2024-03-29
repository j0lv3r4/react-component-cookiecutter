import * as React from "react";
import * as _ from "lodash-es";
import { SubmitHandler, useForm } from "react-hook-form";
import * as T from "./NounInPlural.types.ts";

const NounInPluralForm = React.forwardRef<
  T.NounInPluralFormElement,
  T.NounInPluralFormProps
>(({ onSubmit, isLoading, defaultValues, ...props }, forwardedRef) => {
  const { handleSubmit, register } = useForm<T.NounInPluralFormInputs>({
    defaultValues: {
      ...defaultValues,
    },
  });

  // If we pass defaultValues then it means we are updating the record.
  const isUpdate = !_.isEmpty(defaultValues);

  const submitHandler: SubmitHandler<T.NounInPluralFormInputs> = (data) => {
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

export { NounInPluralForm };
