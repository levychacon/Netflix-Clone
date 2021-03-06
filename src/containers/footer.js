import React from 'react'
import {Footer} from '../components/footer'

export const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Title>Question? Contact</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investors relation</Footer.Link>
                    <Footer.Link href="#">Ways to watch</Footer.Link>
                    <Footer.Link href="#">Corporate informations</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of use</Footer.Link>
                    <Footer.Link href="#">Contact us</Footer.Link>
                   
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                   
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Buy a Gift Cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                   
                </Footer.Column>
            </Footer.Row>
        </Footer>
    )
}

export default Footer
