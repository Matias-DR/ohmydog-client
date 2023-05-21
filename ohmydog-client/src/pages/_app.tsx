import '@/styles/globals.css'
import { SnackbarUtilsConfigurator } from '@/utilities/snackbar.utility'
import { StyledAppMain } from '@/styled-components/styled-components'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { Appbar } from '@/components'
import SessionContextProvider from '@/contexts/session.context'

export default function App({ Component, pageProps }: AppProps) {
    return <SnackbarProvider>
        <SnackbarUtilsConfigurator />
        <SessionContextProvider>
            <Appbar>
                <StyledAppMain>
                    <Component {...pageProps} />
                </StyledAppMain>
            </Appbar>
        </SessionContextProvider>
    </SnackbarProvider>
}
