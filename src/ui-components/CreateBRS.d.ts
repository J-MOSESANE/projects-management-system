/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, DividerProps, GridProps, HeadingProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateBRSInputValues = {
    Field3?: string;
    Field0?: boolean;
    Field2?: string;
    Field1?: string;
    Field4?: string;
    Field5?: string;
    Field6?: string;
    Field7?: string;
};
export declare type CreateBRSValidationValues = {
    Field3?: ValidationFunction<string>;
    Field0?: ValidationFunction<boolean>;
    Field2?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field4?: ValidationFunction<string>;
    Field5?: ValidationFunction<string>;
    Field6?: ValidationFunction<string>;
    Field7?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateBRSOverridesProps = {
    CreateBRSGrid?: FormProps<GridProps>;
    SectionalElement0?: FormProps<HeadingProps>;
    Field3?: FormProps<TextFieldProps>;
    Field0?: FormProps<CheckboxFieldProps>;
    Field2?: FormProps<TextFieldProps>;
    SectionalElement1?: FormProps<DividerProps>;
    SectionalElement2?: FormProps<HeadingProps>;
    Field1?: FormProps<TextAreaFieldProps>;
    Field4?: FormProps<TextAreaFieldProps>;
    Field5?: FormProps<TextFieldProps>;
    Field6?: FormProps<TextAreaFieldProps>;
    Field7?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CreateBRSProps = React.PropsWithChildren<{
    overrides?: CreateBRSOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CreateBRSInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateBRSInputValues) => CreateBRSInputValues;
    onValidate?: CreateBRSValidationValues;
}>;
export default function CreateBRS(props: CreateBRSProps): React.ReactElement;
