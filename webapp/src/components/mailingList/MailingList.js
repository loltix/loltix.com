import React, { useState } from "react";

import "./MailingList.scss";

export default function MailingList() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  if (hasSubmitted) {
    return (
      <div className="mailingList">
        <h5>Thanks for joining our list!</h5>
      </div>
    );
  }

  return (
    <div className="mailingList">
      <h5>JOIN MAILING LIST</h5>
      <div className="description">
        Get comedy show updates and ticket deals delivered right to your inbox.
      </div>
      <div className="mailingListForm">
        <input type="text" placeholder="email address" />
        <input type="text" placeholder="zipcode" />
        <button
          className="ctaButton"
          onClick={() => {
            console.log("SUBSCRIBE NOW button clicked");
            setHasSubmitted(true);
            // TODO: implement this
          }}
        >
          SUBSCRIBE NOW
        </button>
      </div>
    </div>
  );
}
