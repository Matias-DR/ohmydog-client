import { Signup } from '@/pages/signup/signup.model'
import {
    StyledImgUploaderContainer,
    StyledDoneIcon,
    StyledAddPhotoIcon,
    StyledHelperText,
} from './b64-img-uploader.styled-components'
import { IconButton } from '@mui/material'
import { imgToB64 } from '@/utilities/img-to-b64.utility'
import {
    FieldErrors,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form'
import { useState } from 'react'

export interface ImgUploaderProps {
    register: UseFormRegister<any>
    errors: FieldErrors<any>
    setValue: UseFormSetValue<any>
    setImage?: (img: string) => void
}

export default function ImgUploader({
    register,
    errors,
    setValue,
    setImage
}: ImgUploaderProps) {
    const [fileUploaded, setFileUploaded] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file && file.size < 3 * 1024 ** 2) {
            const base64Img = imgToB64(file)
                .then(res => {
                    setValue('mascota.foto', res)
                    setImage && setImage(res)
                })
            setFileUploaded(true)
        } else {
            setValue('mascota.foto', undefined)
            setFileUploaded(false)
            setErrorMessage('Peso máximo 3mb')
            setImage && setImage('')
        }
    }

    return <StyledImgUploaderContainer>
        <IconButton
            component='label'
            sx={{ color: 'var(--ohmydog-lightblue-color)' }}
        >
            <input
                hidden
                accept='image/*'
                type='file'
                onChange={handleFileChange}
            />
            {fileUploaded ? <StyledDoneIcon /> : <StyledAddPhotoIcon />}
        </IconButton>
        <StyledHelperText color={fileUploaded ? 'black' : 'red'}>
            {fileUploaded ? 'Foto añadida' : errorMessage}
        </StyledHelperText>
    </StyledImgUploaderContainer>
}