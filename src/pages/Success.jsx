import React from "react";

const Success = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\nbody {\ntext-align: center;\npadding: 40px 0;\nbackground: #EBF0F5;\n}\nh1 {\ncolor: #88B04B;\nfont-family: "Nunito Sans", "Helvetica Neue", sans-serif;\nfont-weight: 900;\nfont-size: 40px;\n          margin-bottom: 10px;\n        }\n        p {\n          color: #404F5E;\n          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;\nfont-size:20px;\nmargin: 0;\n}\ni {\ncolor: #9ABC66;\nfont-size: 100px;\nline-height: 200px;\nmargin-left:-15px;\n}\n.card {\nbackground: white;\npadding: 60px;\n        border-radius: 4px;\nbox-shadow: 0 2px 3px #C8D0D8;\ndisplay: inline-block;\nmargin: 0 auto;\n}\n',
        }}
      />
      <div className="card">
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
        <button
          style={{
            background: "#88B04B",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            fontSize: "20px",
            cursor: "pointer",
            marginTop: "20px",
          }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
