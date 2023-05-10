import {
    StyledSection,
    StyledImage,
    StyledTitle,
    StyledForm,
    StyledFieldset,
    StyledLegend,
    StyledSubmitButton,
} from '@/pages/signup/styled-components/form.styled-components'
import {
    UserInputs,
    PetInputs
} from './'
import ohmydogB64Image from '@/assets/images/ohmydog-b64-image'
import { User } from '@/models/user.model'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { dispatchUtility } from '@/utilities/dispatch.utility'
import { SignupBodyProps, signup } from '@/pages/signup/services/signup.service'
import { useForm } from 'react-hook-form'
import createUserAdapter from '../adapters/create-user.adapter'
import createPetAdapter from '../adapters/create-pet-adapter'

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

    const onSubmit = async (data: any) => {
        const user = createUserAdapter(data)
        const pet = createPetAdapter(data)
        const body: SignupBodyProps = {
            cliente: user,
            mascota: pet
        }
        const res = await callEndpoint(signup(body))
        if (res.status === 200) {
            dispatchCreateUser(user)
        } else {
            console.log('Error al crear el usuario: ', res)
        }
    }

    return <StyledSection>
        <StyledImage
            src={`data:image/jpeg;base64,${ohmydogB64Image}`}
            alt="Oh My Dog!"
        />
        <StyledTitle>
            CREACIÓN DE CUENTA
        </StyledTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledFieldset>
                <StyledLegend>
                    <StyledTitle>
                        Datos del usuario
                    </StyledTitle>
                </StyledLegend>
                <UserInputs
                    register={register}
                    errors={errors}
                    password={watch('password')}
                ></UserInputs>
            </StyledFieldset>
            <StyledFieldset>
                <StyledLegend>
                    <StyledTitle>
                        Datos de la mascota
                    </StyledTitle>
                </StyledLegend>
                <PetInputs
                    register={register}
                    errors={errors}
                ></PetInputs>
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

        {/* <StyledGrid container spacing={2}>
                <StyledSideGrid xs={12} sm={6}>
                    <StyledUserFieldSetAndButtonContainer>
                        <StyledFieldset>
                            <StyledLegend>
                                <StyledTitle>
                                    Datos del usuario
                                </StyledTitle>
                            </StyledLegend>
                            <UserInputs
                                register={register}
                                errors={errors}
                                password={watch('password')}
                            ></UserInputs>
                        </StyledFieldset>
                        <StyledButtonContainer sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <StyledSubmitButton
                                type='submit'
                                variant='contained'
                                color='primary'
                                loading={loading}
                            >
                                Registrarse
                            </StyledSubmitButton>
                        </StyledButtonContainer>
                    </StyledUserFieldSetAndButtonContainer>
                </StyledSideGrid>
                <StyledSideGrid xs={12} sm={6}>
                    <StyledFieldset>
                        <StyledLegend>
                            <StyledTitle>
                                Datos de la mascota
                            </StyledTitle>
                        </StyledLegend>
                        <PetInputs
                            register={register}
                            errors={errors}
                        ></PetInputs>
                    </StyledFieldset>
                </StyledSideGrid>
            </StyledGrid>
            <StyledButtonContainer sx={{ display: { xs: 'block', sm: 'none' } }}>
                <StyledSubmitButton
                    type='submit'
                    variant='contained'
                    color='primary'
                    loading={loading}
                >
                    Registrarse
                </StyledSubmitButton>
            </StyledButtonContainer> */}
    </StyledSection>
}