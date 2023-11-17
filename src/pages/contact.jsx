import './contact.css'

function Contact(){
    return(
    <>
    
    <div className="contact-container">
    <h1>Contact Us</h1>
    <form action="" className="form-container">
        <label htmlFor="">First Name</label>
        <input type="text" className="contact-input" />
        <label htmlFor="">Last Name</label>
        <input type="text" className="contact-input" />
        <label htmlFor="">Email</label>
        <input type="email" className="contact-input"/>
        <label htmlFor="">Comments</label>
        <input type="textbox" className="comment-input" />
        <button type="submit">Submit</button>
    </form>
    </div>
    </>
    )
    }
    export default Contact
    