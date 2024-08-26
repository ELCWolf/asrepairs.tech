from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
  model="gpt-4-turbo",
  messages=[
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "Welcome to ASRepairs! I am your virtual assistant here to help you with any tech repair or consulting needs. How can I assist you today?\\nIf you have a specific issue or question, please describe it in detail, and I'll do my best to help you.\\nIf you'd prefer to make an appointment directly with one of our experts, just let me know.\\nIf I am unable to provide a sufficient answer to your query, you can skip to making an appointment with one of our experts.\\nHow would you like to proceed?"
        }
      ]
    }
  ],
  temperature=1,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)