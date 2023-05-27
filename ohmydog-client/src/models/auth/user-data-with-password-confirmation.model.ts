import { User } from '@/models/user.model'

export interface UserDataWithPasswordConfirmation extends User {
    passwordconfirmation: string
}