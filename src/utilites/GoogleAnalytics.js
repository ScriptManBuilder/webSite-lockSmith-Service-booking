// src/utils/GoogleAnalytics.js

const GoogleAnalytics = () => {
    if (typeof window !== "undefined" && !window.gtag) {
      const script1 = document.createElement("script");
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-JPX2Y0640W";
      script1.async = true;
      document.head.appendChild(script1);
  
      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JPX2Y0640W');
      `;
      document.head.appendChild(script2);
    }
  };
  
  export default GoogleAnalytics;
  