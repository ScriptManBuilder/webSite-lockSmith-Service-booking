const sendTelegramMessage = async (message) => {
    const BOT_TOKEN = "7683673987:AAHs26ZLdJg9T5QDLiWR06AEJLaOpECpIis"; // Ваш токен бота
    const CHAT_ID = "8168844605"; // Ваш Chat ID
    const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
    try {
      const response = await fetch(TELEGRAM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to send Telegram message:", error);
      throw error; // Пробрасываем ошибку для обработки в основном компоненте
    }
  };
  
  export default sendTelegramMessage;
  