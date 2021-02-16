import React from "react";
import { useForm } from '@formspree/react';
import "./Contact.css";

function Contact() {
    const [state, handleSubmit] = useForm("contactForm");
    
    if (state.succeeded) {
        return <p>Thanks for contacting us, we'll reach out as soon as possible</p>
    }
    // handleSubmit(e){
    //     e.preventDefault();

    //     var contact = {
    //         firstname: this._inputElementFirstName.value,
    //         lastname: this._inputElementLastName.value,
    //         email: this._inputElementEmail.value,
    //         text: this._inputElementText.value,
    //         key: Date.now()
    //       };
    //       console.log('contact', contact)

    // }

    return (
        <div className="Contact">
            <h1>Contact Us</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    {/* <input ref={(a) => this._inputElementFirstName = a} placeholder="firstname" /> */}
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                    />
                </div>
                <div>
                    {/* <input ref={(a) => this._inputElementLastName = a} placeholder="lastname" /> */}
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                    />
                </div>
                <div>
                    {/* <input ref={(a) => this._inputElementEmail = a} placeholder="email" /> */}
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                </div>
                <div>
                    {/* <textarea ref={(a) => this._inputElementText = a} placeholder="text" /> */}
                    <textarea
                        id="text"
                        type="text"
                        name="text"
                    />
                </div>
                <div>
                    <button type="submit" disabled={state.submitting}>Send</button>
                </div>
            </form>

        </div>
    )
}



export default Contact