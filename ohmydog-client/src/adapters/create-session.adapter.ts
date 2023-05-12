import { Session } from '@/models/session.model'

const createSessionAdapter = (data: any): Session => ({
    token: data.token
})

export default createSessionAdapter