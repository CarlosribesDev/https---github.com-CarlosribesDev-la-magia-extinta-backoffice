import { FieldErrors, FieldValues } from "react-hook-form";

type InputValidationProps = {
    prop: string;
    errors: FieldErrors<FieldValues>;
    isSubmit: boolean;
  };

export default function InputValidation({ prop, errors, isSubmit }: InputValidationProps) {

    const errorMessage = errors[prop]?.message?.toString();
    return (
    <>
        {
            errorMessage  && <p> { errorMessage } </p>
        }
    </>
    )
}
