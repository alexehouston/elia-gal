import './Services.css';

export default function Services({ setCurrentPage }) {
    return (
        <div className="Services">
            <div className="service-list">
                <h1>services</h1>
                <div className="service-list-items">
                    <div className="service-item">
                        <p>wash & style</p>
                        <p>women's haircut</p>
                        <p>men's haircut</p>
                        <p>nbr extensions</p>
                        <p className="nbr" onClick={() => setCurrentPage('nbr')}>learn more</p>
                    </div>
                    <div className="service-price">
                        <p>$125</p>
                        <p>$250</p>
                        <p>$150</p>
                        <p>varies</p>
                    </div>
                </div>
            </div>
        </div>
    );
}