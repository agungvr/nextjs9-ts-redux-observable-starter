import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import { store } from '../src/store'
import 'semantic-ui-css/semantic.min.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default MyApp