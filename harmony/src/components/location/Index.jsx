import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
          
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18326.460348202672!2d-79.40727419634106!3d43.664048790063475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C+ON%2C+Canada!5e0!3m2!1sen!2s!4v1552654665629"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>


        </div>
    );
};

export default Location;