import { Session } from '@/models/session.model'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Session>
) {
    axios.post<Session>(
        'http://localhost:3001/signup',
        req.body
    )
        .then((response) => {
            console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch((err) => {
            res.status(500).json({ token: '', refresh: '' })
        })
}