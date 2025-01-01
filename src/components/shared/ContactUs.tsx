'use client'
import React from 'react'
import ContactInfo from "./ContactInfo";
import ContactUsForm from "./ContactUsForm";

const ContactUs: React.FC = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 large:py-12 py-8 large:px-28 lg:px-20 md:px-16 px-8">
            <ContactUsForm/>
            <ContactInfo/>
        </div>
    )
}

export default ContactUs
