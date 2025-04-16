import books from '../../../Utils/books.js'

export default function ProductList() {
    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Best Seller</h1>
                    <p className="lead text-body-secondary">Discover the books that are most read and bought right now. A curated selection of the most popular and highly recommended titles. Don't miss out on the favorite titles of other readers!</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                        <a href="#" className="btn btn-secondary my-2">Other Book</a>
                    </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {books.map((book) => (
                        <div key={book.id} className="col">
                            <div className="card shadow-sm">
                            <img className="w-100 h-50" src={book.image} alt={book.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <p>{book.author}</p>
                                    </div>
                                    <small className="text-body-secondary">{book.year}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}   
                    </div>
                </div>
            </div>
        </>
    )
}