import { Component } from "react"
import "./Contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);
      
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleSubmit(e){
        e.preventDefault();

        var contact = {
            firstname: this._inputElementFirstName.value,
            lastname: this._inputElementLastName.value,
            email: this._inputElementEmail.value,
            text: this._inputElementText.value,
            key: Date.now()
          };
          console.log('contact', contact)

    }

    render(){
        return (
            <div className="Contact">
                <h1>Contact Us</h1>
    
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input ref={(a) => this._inputElementFirstName = a} placeholder="firstname" />
                    </div>
                    <div>
                        <input ref={(a) => this._inputElementLastName = a} placeholder="lastname" />
                    </div>
                    <div>
                        <input ref={(a) => this._inputElementEmail = a} placeholder="email" />
                    </div>
                    <div>
                        <textarea ref={(a) => this._inputElementText = a} placeholder="text" />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
    
            </div>
        )
    }
}

export default Contact