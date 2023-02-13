import React, { useEffect } from 'react';

const Calendly2 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/susiefunkcoaching/customer_success?hide_event_type_details=1&hide_gdpr_banner=1" style={{minWidth: "320px", height: "630px"}}>
    </div>
  );
};

export default Calendly2;



