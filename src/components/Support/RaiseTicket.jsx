import {React, useState} from 'react'
import PhoneInput,{ isValidPhoneNumber } from 'react-phone-number-input/input'

export default function RaiseTicket() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  return (
    <div>
        <div className="container">
            <div className="col-md-4 my-4">
                <form action=''>
                    <div className="formField">
                        <input className="formFieldInput" type="text" id="name" name="name" 
                            placeholder="Name"
                            value={name}
                            onChange= { (e) => setName(e.target.value) }
                        />
                    </div>
                    <PhoneInput
                        className="formFieldInput"
                        placeholder="Mobile"
                        value={phone}
                        onChange={setPhone}
                        error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                    />

                    <div className="formField">
                        <input className="formFieldInput" type="email" id="email" name="email" 
                            placeholder="Email ID"
                            value={email}
                            onChange= { (e) => setEmail(e.target.value) }
                        />
                    </div>

                    <div className="formField">
                        <input className="formFieldInput" type="text" id="name" name="name" 
                            placeholder="Enquiry Type"
                            value={enquiry}
                            onChange= { (e) => setEnquiry(e.target.value) }
                        />
                    </div>
                    <div className="formField">
                        <input className="formFieldInput" type="text" id="name" name="name" 
                            placeholder="Title"
                            value={title}
                            onChange= { (e) => setTitle(e.target.value) }
                        />
                    </div>

                    <div className="formField">
                        <textarea className="formFieldInput " type="text" id="name" name="name" 
                            placeholder="Description"
                            value={description}
                            onChange= { (e) => setDescription(e.target.value) }
                        />
                    </div>

                    <div className="formField">
                        <input className="formFieldInput" type="text" id="name" name="name" 
                            placeholder="Attachment"
                            value={title}
                            onChange= { (e) => setTitle(e.target.value) }
                        />
                    </div>
                </form>
                <div >
                    <button className='formFieldButton'  type="submit" >  Submit </button>
                </div>
            </div>

        </div>

    </div>
  )
}
