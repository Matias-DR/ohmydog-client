export interface Appointment {
    id: number
    userId?: number
    petId?: number
    email?: string
    username?: string
    petname?: string
    reason: string
    date: string
    time: string
    comment?: string
    status?: string
}