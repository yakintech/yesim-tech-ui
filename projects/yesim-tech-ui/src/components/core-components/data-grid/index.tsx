import { DataGrid, GridColDef } from '@mui/x-data-grid';
import YButton from '../button';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



interface DataGridProps extends React.ComponentProps<typeof DataGrid> {
    // showColumns: string[]
    deleteRow: (id: any) => void
    detailRoute?: string
    hasDetailModal?: boolean
}

export const YDataGrid = (props: DataGridProps) => {
    const [modalDatas, setmodalDatas] = useState<any>([])

    const [open, setOpen] = useState(false);
    const handleOpen = (data: any) => {

        setOpen(true)
        //object to array
        let arr = Object.keys(data)
            .map((key) => ({ key, value: data[key] }));
        setmodalDatas(arr)
    }
    const handleClose = () => setOpen(false);

    // if (props.rows ?? []?.length > 0) {
    //     return <></>
    // }

    const navigate = useNavigate()

    //dynamic columns
    let columns: GridColDef[] = []


    if (props.rows ?? [].length > 0) {
        const row = props.rows ?? []

        let columnsProps = Object.keys(row[0])

        // if(props.showColumns ?? [] ?.length > 0){
        //     columnsProps = props.showColumns
        // }


        columnsProps.map((key) => {
            columns.push({
                field: key,
                headerName: key,
                width: 150,
            })
        })
    }

    //add delete button column
    columns.push({
        field: 'delete',
        headerName: 'Delete',
        width: 150,
        renderCell: (params) => {
            return <YButton onClick={() => props.deleteRow(params.row._id)} category='delete' color="error">Delete</YButton>
        }
    })


    if (props.detailRoute != "" && props.detailRoute != undefined) {
        //add detail button
        columns.push({
            field: 'detail',
            headerName: 'Detail',
            width: 150,
            renderCell: (params) => {
                return <YButton onClick={() => navigate(`${props.detailRoute}/${params.row._id}`)} category="update" color="primary">Detail</YButton>
            }
        })
    }


    if (props.hasDetailModal && props.hasDetailModal == true) {
        columns.push({
            field: 'detail-2',
            headerName: 'Detail',
            width: 150,
            renderCell: (params) => {
                return <YButton onClick={() => handleOpen(params.row)} category="update" color="primary">Detail - 2</YButton>
            }
        })
    }







    return <>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {
                    modalDatas.length > 0 ? modalDatas.map((data: any) => {
                        return <Typography id="modal-modal-description" variant="h6" component="h2">
                            {data.key}: {data.value}
                        </Typography>
                    }
                    ) : <></>
                }

            </Box>
        </Modal>

        <DataGrid
            {...props}
            columns={columns}
        />
    </>
}



