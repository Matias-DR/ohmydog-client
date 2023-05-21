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
    name: string
    register: UseFormRegister<any>
    errors: FieldErrors<any>
    setValue: UseFormSetValue<any>
    setImage?: (img: string) => void
}

export default function ImgUploader({
    name,
    setValue,
    setImage
}: ImgUploaderProps) {
    const [fileUploaded, setFileUploaded] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            if (file.size < 3 * 1024 ** 2) {
                imgToB64(file)
                    .then(res => {
                        setValue(name, res)
                        setImage && setImage(res)
                    })
                setFileUploaded(true)
            } else {
                setValue(name, undefined)
                setFileUploaded(false)
                setErrorMessage(': Peso máximo 3mb')
                setImage && setImage('')
            }
        } else {
            setFileUploaded(false)
            setErrorMessage('')
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
        <StyledHelperText color={errorMessage === '' ? 'black' : 'red'}>
            Foto de la mascota{fileUploaded ? ': Añadida' : errorMessage}
        </StyledHelperText>
    </StyledImgUploaderContainer>
}