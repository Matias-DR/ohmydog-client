import { User } from "@/models/user.model";
import { ReduxUser } from "@/redux/models/user.redux-model";

export const createUserReduxAdapter = (user: User): ReduxUser => {
    return {
        username: user.username,
        lastname: user.lastname,
        email: user.email,
        telephone: user.telephone,
    }
}