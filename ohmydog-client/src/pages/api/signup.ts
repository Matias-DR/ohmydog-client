import { Session } from '@/models/session.model'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Session>
) {
    axios.post<Session>(
        'http://localhost:7162/api/register',
        req.body
    )
        .then((response) => {
            console.log("ESTO ES OK",  response.data)
            res.status(200).json(response.data)
        })
        .catch((err) => {
            console.log("ESTO ES EL ERROR", err)
            res.status(500).json({ token: '', refresh: '' })
        })
}