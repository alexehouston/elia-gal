import './Contact.css';

export default function Contact() {
    return (
        <div className="Contact">
            <div className="contact-info">
                <h1>contact elia</h1><br/>
                <a href="https://www.instagram.com/eliarene/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                &nbsp;&nbsp;&nbsp;
                <a href="mailto:galxbeauty@gmail.com" target="_blank" rel="noreferrer"><i className="fa-regular fa-envelope"></i></a>
                <div className="salon">
                    <h2>KASHMIR</h2>
                    <li className="hover"><a href="https://www.kashmirextensions.com/" target="_blank" rel="noreferrer">kashmirextensions.com</a></li>
                    <li className="hover"><a href="tel:310-340-1053">(310) 340-1053</a></li>
                    <li className="hover"><a href="https://www.google.com/maps/place/NBR+Hair+Extensions+by+Kashmir/@34.0975552,-118.3677816,15z/data=!4m2!3m1!1s0x0:0x6d79f74f303ec2bb?sa=X&ved=2ahUKEwjq6omii-H8AhXEkmoFHVRpCi0Q_BJ6BAhkEAg" target="_blank" rel="noreferrer">
                        1481 Havenhurst Dr<br/>
                        West Hollywood, CA 90046
                    </a></li>
                </div>
                <div className="forms">
                    <div className="button"><a href="https://form.jotform.com/galxbeauty/information-request-form" target="_blank" rel="noreferrer">model form</a></div>
                    <div className="button"><a href="https://form.jotform.com/223628423841052" target="_blank" rel="noreferrer">nbr extensions form</a></div>
                </div>
            </div>
        </div>
    );
}