function loadChatbot() {
    const chatbotHtml = `
        <div class="chat-widget" id="chat-widget">
            <div class="chat-header">
                ASRepairs Assistant
            </div>
            <div class="chat-container" id="chat-container">
                <div class="message system">
                    Welcome to ASRepairs! I am your virtual assistant here to help you with any tech repair or consulting needs.
                    How can I assist you today?<br>
                    If you have a specific issue or question, please describe it in detail, and I'll do my best to help you.<br>
                    If you'd prefer to make an appointment directly with one of our experts, just let me know.<br>
                    If I am unable to provide a sufficient answer to your query, you can skip to making an appointment with one
                    of our experts.<br>
                    How would you like to proceed?
                </div>
            </div>
            <div class="input-container">
                <input type="text" id="user-input" placeholder="Type your message here..." onkeydown="if(event.key === 'Enter') sendMessage()">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>
    `;

    const chatbotStyles = `
        <style>
            .chat-widget {
                width: 350px;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
            }
            .chat-header {
                background-color: #49535e;
                color: white;
                padding: 10px;
                text-align: center;
                font-size: 1.2em;
            }
            .chat-container {
                background-color: white;
                height: 400px;
                padding: 10px;
                overflow-y: auto;
                border-bottom: 1px solid #ddd;
            }
            .message {
                margin-bottom: 10px;
                padding: 8px 12px;
                border-radius: 5px;
                max-width: 80%;
            }
            .message.system {
                background-color: #f1f1f1;
                color: #333;
            }
            .message.user {
                background-color: #49535e;
                color: white;
                align-self: flex-end;
                margin-left: auto;
            }
            .message.assistant {
                background-color: #49535e;
                color: white;
                align-self: flex-start;
                margin-right: auto;
                background-image: url('your-background-image-url-here'); /* Replace with your image URL */
                background-size: cover;
                background-repeat: no-repeat;
                color: white;
            }
            .input-container {
                display: flex;
                padding: 10px;
                background-color: white;
            }
            .input-container input {
                flex: 1;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                margin-right: 10px;
            }
            .input-container button {
                padding: 10px 15px;
                border: none;
                background-color: #49535e;
                color: white;
                border-radius: 5px;
                cursor: pointer;
            }
            .input-container button:hover {
                background-color: #0056b3;
            }
        </style>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHtml);
    document.head.insertAdjacentHTML('beforeend', chatbotStyles);

    const script = document.createElement('script');
    script.src = 'chatbot.js';
    document.body.appendChild(script);
}

window.addEventListener('DOMContentLoaded', loadChatbot);