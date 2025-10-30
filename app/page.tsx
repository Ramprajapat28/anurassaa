
"use client"; 

import { useEffect, useState } from "react";
import LandingPage from "./landingPage/landingpage";
import AboutUs from "./aboutPage/page";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    // Function to check hash and set which component to show
    const handleHash = () => {
      setShowAbout(window.location.hash === "#about");
    };

    handleHash(); // Run on first load
    window.addEventListener("hashchange", handleHash); // Update on hash change

    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <>
      {showAbout ? <AboutUs /> : <LandingPage />}
    </>
  );
}


// "use client";
// import { useEffect, useState } from "react";
// import LandingPage from "./landingPage/landingpage";
// import AboutUs from "./aboutPage/aboutUs";
// import FAQ from "./faqPage/faq";
// import Privacy from "./privacyPage/privacy";

// export default function Home() {
//   const [page, setPage] = useState("main");

//   useEffect(() => {
//     const handleHash = () => {
//       switch (window.location.hash) {
//         case "#about":
//           setPage("about");
//           break;
//         case "#faq":
//           setPage("faq");
//           break;
//         case "#privacy":
//           setPage("privacy");
//           break;
//         default:
//           setPage("main");
//       }
//     };
//     handleHash();
//     window.addEventListener("hashchange", handleHash);
//     return () => window.removeEventListener("hashchange", handleHash);
//   }, []);

//   return (
//     <>
//       {page === "main" && <LandingPage />}
//       {page === "about" && <AboutUs />}
//       {page === "faq" && <FAQ />}
//       {page === "privacy" && <Privacy />}
//     </>
//   );
// }
