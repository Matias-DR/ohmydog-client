import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store, persistor } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilsConfigurator } from '@/utilities/snackbar.utility'

export default function App({ Component, pageProps }: AppProps) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider>
                <SnackbarUtilsConfigurator />
                <Component {...pageProps} />
            </SnackbarProvider>
        </PersistGate>
    </Provider>
}
