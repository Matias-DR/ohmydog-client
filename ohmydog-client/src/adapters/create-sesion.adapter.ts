import { Session } from '@/models/session.model'

const createSessionAdapter = (data: any): Session => ({
    token: data.token,
    refresh: data.refresh,
})

export default createSessionAdapter