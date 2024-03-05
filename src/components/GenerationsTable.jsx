import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function GenerationsTable({data, setName}) {

    const combinedNames = (value) => {
        const version = value.map((version) => { return (version.name) })
        return version.join(', ')
    }

    const view = (value) => {
        setName(value)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 700 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: '90px' }}>Generation</TableCell>
                        <TableCell align="right">Region</TableCell>
                        <TableCell align="right">Version Games</TableCell>
                        <TableCell align="right">Pokemon Species</TableCell>
                        <TableCell align="right">View Names</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((value) => (
                        <TableRow key={value.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{value.name}</TableCell>
                            <TableCell align="right">{value.main_region.name}</TableCell>
                            <TableCell align="right">{combinedNames(value.version_groups)}</TableCell>
                            <TableCell align="right">{value.pokemon_species.length}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" size="small" color="success" onClick={()=> view(value.pokemon_species)}>View</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}