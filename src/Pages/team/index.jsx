import { Link } from 'react-router'
import Header from '../../components/shared/Header'

export default function Team() {
    return (
        <>
            <Header />
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Meet Our Teams</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Adrian Fakhriza Hakim</h3>
                    <p>Undergraduate Informatics student at UPN Veteran Jakarta. Enthusiastic and detail-oriented aspiring front-end developer and UI/UX designer.</p>
                    <a href="#" className="icon-link">
                    Click to see more
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Fakhirul</h3>
                    <p>The Mentor of my NF Academy Fullstack Web Developer SIB.</p>
                    <Link to="https://github.com/AdrianFakhriza" className="icon-link">
                    Click to see more
                    </Link>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    </div>
                    <h3 className="fs-2 text-body-emphasis">NF Academy</h3>
                    <p>An agency who held the Fullstack Web Developer SIB program. </p>
                    <a href="#" className="icon-link">
                    Click to see more
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}