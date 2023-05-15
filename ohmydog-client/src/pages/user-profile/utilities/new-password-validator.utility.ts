export const newPasswordValidator = (
    password: string,
    newPassword: string
) => {
    return password !== newPassword;
}