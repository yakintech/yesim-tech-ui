import { Button as MUIButton } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface ButtonProps extends React.ComponentProps<typeof MUIButton> {
    //My special props
    backgroundColor?: "red" | "blue" | "green"
    category?: "save" | "delete" | "update"
}

const YButton = (props: ButtonProps) => {

    let icon = null

    if (props.category === "save") {
        icon = <SaveIcon />
    } else if (props.category === "delete") {
        icon = <DeleteIcon />
    } else if (props.category === "update") {
        icon = <EditIcon />
    }
    return <MUIButton
        size="large"
        variant="contained"
        style={{
            backgroundColor: props.backgroundColor
        }}
        startIcon={icon}
        {...props}
    >{props.children}</MUIButton>
}


export default YButton


