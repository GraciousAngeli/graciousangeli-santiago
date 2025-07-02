(function(){
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "vZzcFPUANhY_CRyK0",
        });
    } else {
        console.error('EmailJS SDK not loaded.');
    }
})();
