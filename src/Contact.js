//USING RENDERING METHOD
import React from "react";

let Contact = () => {
    let render =  true
    let array = [
    'Name : The Culinary Haven',
    'Eamil : culinaryheaven@gmail.com',
    'Contact :<s +91 9000060666',
    'Recipient Name: Jane Smith',
    'Street Address: 456 High St',
    'City: London',
    'State/Province: London',
    'ZIP/Postal Code: WC2N 5DU',
    'Country: United States'
    ]
    return (
        <div className="contact-c">
            {render && array.map((e,i) => {
                return(
                    <ul key={i}>
                        <li>{e}</li>
                    </ul>
                )
            })}
        </div>
    );
}
export default Contact;


