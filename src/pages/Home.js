import React from 'react'
import { Jutsu } from 'react-jutsu'
import { Link, useLocation } from 'react-router-dom'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'

const Home = () => {
    const query = new URLSearchParams(useLocation().search)
    return (
        <>
            <header>
                <nav style={{ marginBottom: 0 }}>
                    <h1>
                        <Link to='/' style={{ color: 'var(--color-text)' }}>{query.get('name')}</Link>
                    </h1>
                </nav>
                <BrowserView>
                    {query.get('room') &&
                        <Jutsu
                            containerStyles={{ width: '1080px', height: '600px' }}
                            subject={query.get('subject')}
                            roomName={query.get('room')}
                            password={query.get('password')}
                            displayName={query.get('name')} />}
                </BrowserView>
            </header>
        </>
    )
}

export default Home
