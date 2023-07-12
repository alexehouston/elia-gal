import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
    return (
        <div className="Nav">
            <ul>
                {currentPage === 'home' ? (
                    <>
                        <li className="hover" onClick={() => setCurrentPage('services')}>services</li>
                        <li className="hover" onClick={() => setCurrentPage('about')}>about</li>
                        <li className="hover" onClick={() => setCurrentPage('contact')}>contact</li>
                    </>
                ) : (
                    <>
                        <h1 className="hover" id="elia" onClick={() => setCurrentPage('home')}>elia gal</h1>
                        <li className="hover" onClick={() => setCurrentPage('services')}>services</li>
                        <li className="hover" onClick={() => setCurrentPage('about')}>about</li>
                        <li className="hover" onClick={() => setCurrentPage('contact')}>contact</li>
                    </>
                )}
            </ul>
        </div>
    );
}