export function contact() {
    const phoneNumber = '+972532787532'; 
    const message = 'Hello, this is a predefined message!'; // Replace with your message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp Desktop (if installed) or WhatsApp Web
    window.open(whatsappUrl, '_blank');
}