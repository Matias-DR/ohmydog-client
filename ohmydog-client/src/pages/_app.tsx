import '@/styles/globals.css'
import { store, persistor } from '@/redux/store'
import { SnackbarUtilsConfigurator } from '@/utilities/snackbar.utility'
import { StyledAppMain } from '@/styled-components/styled-components'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'

export default function App({ Component, pageProps }: AppProps) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider>
                <SnackbarUtilsConfigurator />
                <StyledAppMain>
                    <Component {...pageProps} />
                </StyledAppMain>
            </SnackbarProvider>
        </PersistGate>
    </Provider>
}
