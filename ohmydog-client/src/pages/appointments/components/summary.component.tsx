import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UseFormWatch } from 'react-hook-form';
import { Appointment } from '@/models/appointment.model';

export interface Props {
    watch: UseFormWatch<Appointment>
}

export default function DenseTable({ watch }: Props) {
    const rows = [{
        reason: watch('reason'),
        petId: watch('petId'),
        date: watch('date'),
        time: watch('time'),
        comment: watch('comment')
    }]

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Motivo</TableCell>
                        <TableCell align='right'>Mascota</TableCell>
                        <TableCell align='right'>Fecha</TableCell>
                        <TableCell align='right'>Horario</TableCell>
                        <TableCell align='right'>Comentario</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.reason}
                            sx={{
                                '&:last-child td, &:last-child th':
                                    { border: 0 }
                            }}
                        >
                            <TableCell
                                component='th'
                                scope='row'
                            >
                                {row.reason}
                            </TableCell>
                            <TableCell align='right'>{row.petId}</TableCell>
                            <TableCell align='right'>{row.date}</TableCell>
                            <TableCell align='right'>{row.time}</TableCell>
                            <TableCell
                                align='right'
                                sx={{
                                    maxWidth: '1rem',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >{row.comment}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}