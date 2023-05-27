import {
    StyledImageContainer,
    StyledGrid,
    StyledAddPhotoIcon,
    StyledImage
} from './custom-inputs.styled-components'
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputBaseProps
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { imgToB64 } from '@/utilities/img-to-b64.utility'
import {
    FieldError,
    UseFormRegister,
    UseFormSetValue,
    UseFormTrigger,
    UseFormClearErrors,
} from 'react-hook-form'
import { useEffect, useState } from 'react'

export interface ImgUploaderProps {
    name: string
    required?: boolean
    defaultValue?: string
    register: UseFormRegister<any>
    trigger?: UseFormTrigger<any>
    error?: FieldError
    inputProps?: InputBaseProps['inputProps']
    setValue: UseFormSetValue<any>
    value?: string
    clearErrors?: UseFormClearErrors<any>
}

export default function ImgUploader({
    name,
    required = false,
    defaultValue,
    register,
    trigger,
    error,
    setValue,
    value,
    clearErrors,
}: ImgUploaderProps) {
    const [hasImage, setHasImage] = useState(false)

    useEffect(() => {
        setHasImage(!!(value && value[0]))
        console.log(value, hasImage)
        if (hasImage) {
            clearErrors && clearErrors(name)
        }
    }, [register, value])

    const validate = (event: any) => {
        if (!['string', 'undefined', '', 'null', undefined].includes(typeof event)) {
            const file = event[0]
            if (file) {
                if (file.size < 3 * 1024 ** 2) {
                    imgToB64(file)
                        .then(res => {
                            setValue(name, res)
                            return true
                        })
                        .catch(err => {
                            setValue(name, '')
                            return 'Error al cargar el archivo'
                        })
                }
                else {
                    setValue(name, '')
                    return 'Máximo 3mb'
                }
            }
            else setValue(name, '')
        }
        return true
    }

    const handleChange = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            if (file.size < 3 * 1024 ** 2) {
                imgToB64(file)
                    .then(res => {
                        setValue(name, res)
                        clearErrors && clearErrors(name)
                    })
                    .catch(err => setValue(name, ''))
            }
        } else setValue(name, '')
        trigger && trigger(name)
    }

    return <FormControl fullWidth error={!!error}>
        <StyledGrid>
            <StyledGrid xs={12}>
                <IconButton
                    component='label'
                    sx={{ color: 'var(--ohmydog-lightblue-color)' }}
                >
                    <input
                        required={required}
                        hidden
                        accept='image/*'
                        type='file'
                        {...register(name, {
                            required: required ?
                            (() => {
                                if (hasImage) return false
                                return 'Campo requerido'
                            })()
                            : false,
                            validate: validate,
                            onChange: handleChange
                        })}
                    />
                    {
                        hasImage ?
                            <StyledImageContainer>
                                <StyledImage src={value} alt='pet-photo' />
                            </StyledImageContainer>
                            : <StyledAddPhotoIcon />
                    }
                </IconButton>
            </StyledGrid>
            <StyledGrid xs={12}>
                <FormHelperText >
                    {
                        error?.message ? error.message :
                            hasImage ?
                                'Imagen seleccionada' :
                                'Imagen no seleccionada'
                    }
                </FormHelperText>
                {
                    hasImage ? <IconButton
                        aria-label='delete'
                        size='small'
                        onClick={() => setValue(name, '')}
                    >
                        <DeleteIcon sx={{ color: 'lightcoral' }} />
                    </IconButton> : null
                }
            </StyledGrid>
        </StyledGrid>
    </FormControl>
}