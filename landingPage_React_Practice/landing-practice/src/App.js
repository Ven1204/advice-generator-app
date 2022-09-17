import { init } from './utils/initCarLayer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">Super Cars</h1>
         <p className="text"> Home of the ultra high-performance sports cars.</p>
        <p>
          <a className="btn" href='#'>Showroom</a>
          <a className="btn" href='#'>Learn more</a>

        </p>
      </div>
      <div className="featured-car">
        <h1>Featured</h1>
        <div className="pricing-table">

          <div className="pricing-card">
            <div className="pricing-card__inner">
            <p className="title">Sports</p>
            <p className="info">designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, or thrill of driving.</p>
            </div>
            <div className="btn-container">
              <a className="btn" href='#'>Show more</a>
            </div>

          </div>

          <div className="pricing-card">
            <div className="pricing-card__inner">
            <p className="title">Luxury</p>
            <p className="info">provides increased price levels of comfort, equipment, amenities, quality, performance, and associated status compared to moderately priced cars.</p>
            </div>
            <div className="btn-container">
              <a className="btn" href='#'>Show more</a>
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__inner">
            <p className="title">Others</p>
            <p className="info">from Sedans, SUV, coupe, Convertibles and many more </p>
            </div>
            <div className="btn-container">
              <a className="btn" href='#'>Show more</a>
            </div>
          </div>

        </div>

      </div>
    </div>

  );
}

export default App;
