document.getElementById('sendButton').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const message = document.getElementById('message').value.trim();

    // Überprüfen, ob der Name eingegeben wurde
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    // Überprüfen, ob die Nachricht die richtige Länge hat
    if (message.length === 0 || message.length > 100) {
        alert('The message must be between 1 and 100 characters.');
        return;
    }

    const xhr = new XMLHttpRequest();
    const webhookUrl = 'https://discord.com/api/webhooks/1289130523502841876/k1n838OFNJC5nrto44V3j0HLgYWxCsPjKN2QFzjeB3sGxIgALwy5LWn3FJXLXbE4GcJp'; // Füge hier deinen Webhook-Link ein

    xhr.open('POST', webhookUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Hier wird der Benutzername in der Nachricht angezeigt
    const data = JSON.stringify({ content: `${username}: ${message}` });

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const responseElement = document.getElementById('response');
            if (xhr.status === 204) {
                responseElement.textContent = 'Message sent successfully!';
                responseElement.style.color = 'green';
            } else {
                responseElement.textContent = 'Failed to send message. Please try again.';
                responseElement.style.color = 'red';
            }
        }
    };

    xhr.send(data);
    document.getElementById('message').value = ''; // Textbox leeren
    document.getElementById('username').value = ''; // Name zurücksetzen
});
