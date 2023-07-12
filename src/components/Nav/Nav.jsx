import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
    return (
        <div className="Nav">
            {currentPage === 'home' ? (
                <ul class="animate__animated animate__fadeInDown animate__slow">
                    <li className="hover" onClick={() => setCurrentPage('services')}>services</li>
                    <li className="hover" onClick={() => setCurrentPage('about')}>about</li>
                    <li className="hover" onClick={() => setCurrentPage('contact')}>contact</li>
                </ul>
            ) : (
                <>
                    <h1 className="hover animate__animated animate__fadeInLeft animate__slow" id="elia" onClick={() => setCurrentPage('home')}>elia gal</h1>
                    <ul>
                        <li className="hover" onClick={() => setCurrentPage('services')}>services</li>
                        <li className="hover" onClick={() => setCurrentPage('about')}>about</li>
                        <li className="hover" onClick={() => setCurrentPage('contact')}>contact</li>
                    </ul>
                </>
            )}
    </div>
    );
}