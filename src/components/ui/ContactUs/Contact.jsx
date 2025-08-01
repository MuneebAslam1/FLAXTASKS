import React, { useEffect, useRef } from "react";
import Footer from "../Footer";

const ContactForm = () => {
    const iframeRef = useRef(null);
    
    useEffect(() => {
        // Function to remove the footer wrapper
        const removeFooter = () => {
            try {
                const iframe = iframeRef.current;
                if (!iframe) return;
                
                const iframeWindow = iframe.contentWindow;
                if (!iframeWindow) return;
                
                // Try to access the iframe document
                const iframeDocument = iframe.contentDocument || iframeWindow.document;
                if (!iframeDocument) return;
                
                // First attempt: Try direct querySelector on document
                const footerWrappers = iframeDocument.querySelectorAll('.formFooter-wrapper');
                footerWrappers.forEach(wrapper => wrapper.remove());
                
                // Second attempt: Check for shadow DOM roots
                const formElement = iframeDocument.querySelector('form');
                if (formElement && formElement.shadowRoot) {
                    const shadowFooters = formElement.shadowRoot.querySelectorAll('.formFooter-wrapper');
                    shadowFooters.forEach(wrapper => wrapper.remove());
                }
                
                // Third attempt: Look for all divs with the class
                const allDivs = iframeDocument.querySelectorAll('div');
                allDivs.forEach(div => {
                    if (div.className && div.className.includes('formFooter-wrapper')) {
                        div.remove();
                    }
                });
                
                // Add CSS to hide it as a fallback
                const style = iframeDocument.createElement('style');
                style.textContent = `
                    .formFooter-wrapper, .formFooter, .formFooter.f6.branding21, div[class*="formFooter"] { 
                        display: none !important; 
                        visibility: hidden !important;
                        height: 0 !important;
                        overflow: hidden !important;
                    }
                `;
                iframeDocument.head.appendChild(style);
                
            } catch (error) {
                console.log("Error removing footer:", error);
            }
        };

        // Load the JotForm script
        const script = document.createElement("script");
        script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
        script.async = true;
        
        script.onload = () => {
            if (window.jotformEmbedHandler) {
                window.jotformEmbedHandler(
                    "iframe[id='JotFormIFrame-243533852774464']",
                    "https://form.jotform.com/"
                );
            }
            
            // Wait for iframe to load
            const iframe = document.getElementById("JotFormIFrame-243533852774464");
            if (iframe) {
                iframe.onload = () => {
                    // Initial removal
                    setTimeout(removeFooter, 1000);
                    
                    // Continue checking periodically
                    const interval = setInterval(removeFooter, 2000);
                    return () => clearInterval(interval);
                };
            }
        };

        document.body.appendChild(script);

        // Cleanup
        return () => {
            const existingScript = document.querySelector(
                "script[src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js']"
            );
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div>
            <iframe
                id="JotFormIFrame-243533852774464"
                ref={iframeRef}
                title="Contact Us"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/243533852774464"
                frameBorder="0"
                style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    height: "800px",
                    border: "none",
                }}
                scrolling="yes"
            ></iframe>
            <div className="section">
                <Footer />
            </div>
        </div>
    );
};

export default ContactForm;