import { useSnackbar, VariantType, ProviderContext } from 'notistack';

let useSnackbarRef: ProviderContext

export function SnackbarUtilsConfigurator() {
    useSnackbarRef = useSnackbar()
    return null
}

export const SnackbarUtilities = {
    toast(msg: string, variant: VariantType = 'default') {
        useSnackbarRef.enqueueSnackbar(msg, { variant })
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