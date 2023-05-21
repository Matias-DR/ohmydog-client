import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import {
    useSnackbar,
    VariantType,
    ProviderContext,
    closeSnackbar
} from 'notistack'

let useSnackbarRef: ProviderContext

export function SnackbarUtilsConfigurator() {
    useSnackbarRef = useSnackbar()
    return null
}

export const SnackbarUtilities = {
    toast(msg: string, variant: VariantType = 'default') {
        useSnackbarRef.enqueueSnackbar(
            msg,
            {
                variant,
                preventDuplicate: true,
                action: (key) => <IconButton
                    size="small"
                    onClick={() => { closeSnackbar(key) }}
                ><CloseIcon /></IconButton>
            }
        )
    },
    success(msg: string) {
        this.toast(msg, 'success')
    },
    warning(msg: string) {
        this.toast(msg, 'warning')
    },
    info(msg: string) {
        this.toast(msg, 'info')
    },
    error(msg: string) {
        this.toast(msg, 'error')
    },
}