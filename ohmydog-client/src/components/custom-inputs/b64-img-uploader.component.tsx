import {
    StyledImageContainer,
    StyledFormControl,
    StyledErrorText,
    StyledImage
} from './custom-inputs.styled-components'
import {
    FormHelperText,
    InputBaseProps
} from '@mui/material'
import { imgToB64 } from '@/utilities/img-to-b64.utility'
import { Patterns } from '@/models/patterns.model'
import {
    FieldError,
    UseFormRegister,
    UseFormSetValue,
    UseFormClearErrors,
    RegisterOptions,
} from 'react-hook-form'
import { useState } from 'react'
import { MuiFileInput } from 'mui-file-input'

export interface ImgUploaderProps {
    name: string
    required?: boolean
    register: UseFormRegister<any>
    registerOptions?: RegisterOptions<any>
    error?: FieldError
    inputProps?: InputBaseProps['inputProps']
    setValue: UseFormSetValue<any>
    value?: string
    clearErrors?: UseFormClearErrors<any>
}

export default function ImgUploader({
    name,
    required = false,
    register,
    registerOptions,
    error,
    setValue,
    value,
    clearErrors,
}: ImgUploaderProps) {
    const [file, setFile] = useState<File | null>(null)

    const handleChange = (newValue: any) => {
        if (newValue === null) {
            setValue(name, undefined)
            setFile(null)
            return
        }
        if (Patterns.image.test(newValue.name)) {
            if (newValue.size < 3 * 1024 ** 2) {
                imgToB64(newValue)
                    .then(res => {
                        setValue(name, res)
                        setFile(newValue)
                        clearErrors && clearErrors(name)
                    })
                    .catch(err => {
                        setValue(name, undefined)
                    })
            }
            else {
                setValue(name, undefined)
                setFile(newValue)
            }
        }
    }

    const validation = (newValue: any): any => {
        if (Patterns.image.test(newValue.name)) {
            if (newValue.size < 3 * 1024 ** 2) {
                return 'Seleccionada'
            }
            else {
                return <StyledErrorText>Tamaño máximo 3mb</StyledErrorText>
            }
        }
        else return <StyledErrorText>Formato no válido</StyledErrorText>
    }

    return <StyledFormControl fullWidth error={!!error}>
        <MuiFileInput
            value={file}
            inputProps={{ accept: '.png,.jpg,.jpeg' }}
            label='Foto'
            getInputText={newValue => { return validation(newValue) }}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : false,
                    ...registerOptions && registerOptions
                }
            ))}
            onChange={handleChange}
        />
        {
            value ?
                <StyledImageContainer>
                    <StyledImage src={value} alt='pet-photo' />
                </StyledImageContainer>
                : null
        }
        <FormHelperText >
            {
                error?.message ? error.message :
                    file ?
                        null :
                        'Imagen no seleccionada'
            }
        </FormHelperText>
    </StyledFormControl>
}