import TextField from '@mui/material/TextField';

interface ButtonProps extends React.ComponentProps<typeof TextField> {

}


const YTextField = (props: ButtonProps) => {
    return <TextField
        {...props}
    />
}


export default YTextField
