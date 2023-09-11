import React from 'react'
import SingupForm from '../../components/SingupForm'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Signup = () => {
    return (
        <div>
            <Header />
            <SingupForm />
            <h1>usman</h1>
            <Footer
                houseLine="/houseline2.svg"
                socialMediaLogo="/social-media-logo5.svg"
                socialMediaLogo1="/social-media-logo6.svg"
                socialMediaLogo2="/social-media-logo7.svg"
                socialMediaLogo3="/social-media-logo8.svg"
                socialMediaLogo4="/social-media-logo9.svg"
                footerSectionOverflow="hidden"
            />
        </div>
    )
}

export default Signup