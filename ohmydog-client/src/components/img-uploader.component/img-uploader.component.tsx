import { Signup } from '@/pages/signup/signup.model';
import { StyledImgUploaderContainer } from './img-uploader.styled-components'
import { IconButton } from '@mui/material';
import {
    FieldErrors,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form';
import DoneIcon from '@mui/icons-material/Done';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export interface ImgUploaderProps {
    register: UseFormRegister<any>,
    errors: FieldErrors
    file?: string,
    setValue: UseFormSetValue<Signup>
}

export default function ImgUploader({
    register,
    errors,
    file,
    setValue
}: ImgUploaderProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setValue('mascota.foto', selectedFile);
        }
    };

    return <StyledImgUploaderContainer>
        <IconButton
            component='label'
            sx={{ color: 'var(--ohmydog-lightblue-color)' }}
        >
            <input
                hidden
                accept='image/*'
                type='file'
                {...register('mascota.foto')}
                onChange={handleFileChange}
            />
            {file ? <DoneIcon
                sx={{ width: '3rem', height: '3rem', color: 'green' }}
            ></DoneIcon> : <AddPhotoAlternateIcon
                sx={{ width: '3rem', height: '3rem' }}
            />}
        </IconButton>
        {file ? <p>Foto añadida</p> : null}
    </StyledImgUploaderContainer>
}