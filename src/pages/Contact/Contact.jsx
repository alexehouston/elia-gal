import './Contact.css';

export default function Contact() {
    return (
        <div className="Contact">
            <div className="contact-info">
                <h1>contact elia</h1><br/>
                <a href="https://www.instagram.com/eliarene/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                &nbsp;&nbsp;&nbsp;
                <a href="mailto:galxbeauty@gmail.com" target="_blank" rel="noreferrer"><i class="fa-regular fa-envelope"></i></a>
                <div className="forms">
                    <div className="button">model form</div>
                    <div className="button">nbr extensions form</div>
                </div>
            </div>
        </div>
    );
}