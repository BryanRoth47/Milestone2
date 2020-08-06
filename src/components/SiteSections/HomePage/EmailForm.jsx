import React, { Component } from 'react'


export class EmailForm extends Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
            url: "mailto:baroth@uci.edu?subject=Interested Customer"
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    
    //mailto:info@ardentlabs.io?subject=Resume for Software Engineering Remote Internship"
    handleSubmit(event) {
        event.preventDefault();
        const destination = "mailto:baroth@uci.edu?cc=";
        let cc = document.getElementById("emailAddress");
        let emailToSend = destination.concat(cc.value.toString());
        emailToSend = emailToSend.concat("&subject=Interested Customer")
        let body = document.getElementById("emailBody");
        emailToSend = emailToSend.concat("&body=").concat(body.value);
        console.log(emailToSend);
        this.setState(
            { url: emailToSend}, ()=>{
                alert("callback: "+this.state.url);
                const form = document.getElementById("emailForm");
                form.submit();
            });
        
    }
    */
    render() {

        return (
            <form id="emailForm" action="#contact">
                <div className="form-group">
                    <input id="emailAddress" type="email" className="form-control" required maxLength='250' style={{
                        width: '80%', paddingLeft: '12px', borderWidth: '3px', borderStyle: 'solid',
                        borderColor: 'rgba(100, 102, 102, 1)'
                    }} placeholder="Email" />
                    <textarea className="form-control" id="emailBody" rows='5' style={{ resize:"none",
                        width: '80%', marginTop: '1em', paddingLeft: '16px', paddingRight: '10px',
                        boxSizing: 'border-box', borderWidth: '3px', borderStyle: 'solid',
                        borderColor: 'rgba(100, 102, 102, 1)'
                    }} placeholder="Type your message here..." />
                    <div style={{ width: '80%', display: 'flex', justifyContent: 'flex-end' }}>
                        <input type="submit" className="btn" style={{ backgroundColor: 'transparent', borderStyle: 'none' }} />
                    </div>
                </div>
            </form>
        )
    }
}

export default EmailForm
