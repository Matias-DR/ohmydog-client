import {
    StyledFormSection,
    StyledForm,
    StyledTitle,
    StyledFieldset,
    StyledLegend,
    StyledImage,
    StyledSubmitButton,
    StyledGrid
} from '../styled-components/form.styled-components'
import {
    UsernameInput,
    EmailInput,
    PasswordInput,
    RepeatPasswordInput,
    AgeInput,
    DniInput,
    LastnameInput,
    TelephoneInput,
} from '@/components'
import ohmydogB64Image from '@/assets/images/ohmydog-b64-image'
import { User } from '@/models/user.model'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { dispatchUtility } from '@/utilities/dispatch.utility'
import { signup } from '@/pages/signup/services/signup.service'
import { useForm } from 'react-hook-form'

export interface FormProps extends User {
    repeatPassword: string,
}

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<FormProps>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const { dispatchCreateUser } = dispatchUtility()

    const onSubmit = async (user: User) => {
        const res = await callEndpoint(signup(user))
        console.log(res.data)
        if (res.status === 200) {
            dispatchCreateUser(user)
        } else {
            console.log('Error al crear el usuario: ', res)
        }
    }

    return <StyledFormSection>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledFieldset>
                <StyledLegend>
                    <StyledImage
                        src={`data:image/jpeg;base64,${ohmydogB64Image}`}
                        alt="Oh My Dog!"
                    />
                    <StyledTitle>
                        Registro de usuario
                    </StyledTitle>
                </StyledLegend>
                <StyledGrid container spacing={2}>
                    <StyledGrid sm={6}>
                        <UsernameInput
                            register={register}
                            errors={errors}
                        />
                    </StyledGrid>
                    <StyledGrid sm={6}>
                        <LastnameInput
                            register={register}
                            errors={errors}
                        />
                    </StyledGrid>
                    <StyledGrid sm={6}>
                        <AgeInput
                            register={register}
                            errors={errors}
                        />
                    </StyledGrid>
                    <StyledGrid sm={6}>
                        <DniInput
                            register={register}
                            errors={errors}
                        />
                    </StyledGrid>
                    <StyledGrid sm={6}>
                        <EmailInput
                            register={register}
                            errors={errors}
                        />
                    </StyledGrid>
                    <StyledGrid sm={6}>
                        <TelephoneInput
                            register={register}
                            errors={errors}
                        />
                    </StyledGrid>
                    <StyledGrid sm={6}>
                        <PasswordInput
                            register={register}
                            errors={errors}
                        />
                    </StyledGrid>
                    <StyledGrid sm={6}>
                        <RepeatPasswordInput
                            register={register}
                            errors={errors}
                            password={watch('password')}
                        />
                    </StyledGrid>
                </StyledGrid>
            </StyledFieldset>
            <StyledSubmitButton
                type='submit'
                variant='contained'
                color='primary'
                loading={loading}
            >
                Registrarse
            </StyledSubmitButton>
        </StyledForm>
    </StyledFormSection>
}