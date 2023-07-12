import './Contact.css';

export default function Contact() {
    return (
        <div className="animate__animated animate__fadeInUp animate__slow">
            <div className="contact-info">
                <h1>contact</h1><br/>
                <div className="salon">
                    <img src="https://images.squarespace-cdn.com/content/v1/5a98e6aa4eddecb49e2029a1/e2fdabc8-db22-4aa6-ba94-b5b20a55cea6/KASHMIR+black.png?format=1500w" alt="Kashmir" width="200" />
                    <div className="contact-icons">
                        <li><a href="https://www.kashmirextensions.com/" target="_blank" rel="noreferrer"><i className="fa-solid fa-globe"></i></a></li>
                        <li id="kashmir-ig"><a href="https://www.instagram.com/kashmirextensions/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="sms:3103401053"><i className="fa-solid fa-comment"></i></a></li>
                        <li><a href="mailto:info@kashmirextensions.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></li>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13215.622929526196!2d-118.3677821!3d34.0975553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bfc2d4758a69%3A0x6d79f74f303ec2bb!2sNBR%20Hair%20Extensions%20by%20Kashmir!5e0!3m2!1sen!2sus!4v1689199725483!5m2!1sen!2sus" title="Kashmir" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="forms">
                    <div className="button"><a href="https://form.jotform.com/galxbeauty/information-request-form" target="_blank" rel="noreferrer">model form</a></div>
                    <div className="button"><a href="https://form.jotform.com/223628423841052" target="_blank" rel="noreferrer">nbr extensions form</a></div>
                </div>
            </div>
        </div>
    );
}