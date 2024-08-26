async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatContainer = document.getElementById('chat-container');

    if (!userInput.trim()) return;

    // Display user's message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.textContent = userInput;
    chatContainer.appendChild(userMessageDiv);

    // Clear input field
    document.getElementById('user-input').value = '';

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '/ Replace with your actual API key
        },
        body: JSON.stringify({
            model: 'gpt-4-turbo',
            messages: [
                { role: 'system', content: 'You are a virtual assistant for ASRepairs. Please help the user with any tech repair or consulting needs.' },
                { role: 'user', content: userInput }
            ],
            temperature: 0.5,
            max_tokens: 512,
            top_p: 0,
            frequency_penalty: 0,
            presence_penalty: 0
        })
    });

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Display assistant's message
    const assistantMessageDiv = document.createElement('div');
    assistantMessageDiv.className = 'message assistant';
    assistantMessageDiv.textContent = assistantMessage;
    chatContainer.appendChild(assistantMessageDiv);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Redirect to AI page after displaying the assistant's message
    setTimeout(() => {
        window.location.href = 'ai-page.html';  // Replace 'ai-page.html' with the actual URL of your AI page
    }, 2000); // Delay of 2 seconds before redirect
}