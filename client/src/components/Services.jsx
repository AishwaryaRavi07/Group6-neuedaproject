

const Services = () => {
    
    return (
      <div className="services">
        <div className="services__container">
          <div>
            <p className="topline animate-services">Features</p>
            <h1 className="services__heading animate-services">What we offer</h1>
            <div className="services__features">
              <p className="services__features animate-services">
                <i className="fas fa-check-circle"></i>Real-time tracking of inventory levels
              </p>
              <p className="services__features animate-services">
                <i className="fas fa-check-circle"></i>Recurring expense management
              </p>
              <p className="services__features animate-services">
                <i className="fas fa-check-circle"></i>Sales order processing
              </p>
              <p className="services__features animate-services">
                <i className="fas fa-check-circle"></i>Returns and Refunds
              </p>
              <p className="services__features animate-services">
                <i className="fas fa-check-circle"></i>Reporting and Analytics
              </p>
              <p className="services__features animate-services">
                <i className="fas fa-check-circle"></i>Supplier database and contact information
              </p>
            </div>
          </div>
          <div>
            <img src="img.jpg" alt="Services" height="450" width="650" />
          </div>
        </div>
      </div>
    );
  };

  export default Services;