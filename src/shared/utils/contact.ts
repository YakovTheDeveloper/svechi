export function contact() {
    const phoneNumber = '+972532787532';  // Replace with the phone number
    const message = 'Hello, this is a predefined message!';  // Your predefined message
    const encodedMessage = encodeURIComponent(message);  // URL-encode the message
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    // Open the WhatsApp Web/Desktop URL in a new tab
    window.open(whatsappUrl, '_blank');
}