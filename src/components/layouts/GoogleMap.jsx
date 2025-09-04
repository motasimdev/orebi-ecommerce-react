import React from "react";
import Container from "../Container";

const GoogleMap = () => {
  return (
    <>
      <Container>
        <div className="mt-2 mb-[130px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0911225536383!2d90.49480348137821!3d23.708439781483122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6f0bd901a57%3A0x6e8a352a7ce03079!2sDarunnazat%20Siddikia%20Kamil%20Madrasah!5e0!3m2!1sen!2sbd!4v1756968133369!5m2!1sen!2sbd"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </Container>
    </>
  );
};

export default GoogleMap;
