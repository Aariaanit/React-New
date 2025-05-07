const Contact = () => {
    return ( 
        <div className="contact">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <form>
                <label>Name:</label><br />
                <input type="text" name="name" /><br />
                <label>Email:</label><br />
                <input type="email" name="email" /><br />
                <label>Message:</label><br />
                <textarea name="message"></textarea><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Contact;