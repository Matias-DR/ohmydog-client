import { StyledImgUploaderContainer } from './img-uploader.styled-components'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface ImgUploaderProps {
    register: UseFormRegister<any>,
    errors: FieldErrors
    file?: string,
}

export default function ImgUploader({
    register,
    errors,
    file
}: ImgUploaderProps) {
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