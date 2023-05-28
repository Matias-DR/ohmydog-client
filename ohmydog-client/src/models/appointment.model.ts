export interface Appointment {
    id: number
    userId: number
    petId: number
    reason: string
    date: string
    time: string
    comment?: string
}