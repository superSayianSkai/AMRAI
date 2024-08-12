async function run(question, chatId=1) {
  try {
    console.log("Sending request to production server with question:", question, "and chatId:", chatId);

    const response = await fetch("https://amr-ai-api.onrender.com/api/v1/message/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        // chatId: chatId ?? null, // Ensure chatId is null if not provided
      }),
    });

    console.log("Response status:", response.status);

    const contentType = response.headers.get("Content-Type");
    console.log("Response content type:", contentType);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Response not OK:", errorText);
      throw new Error(`Failed to fetch response from the backend: ${errorText}`);
    }

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("Parsed response JSON:", data);

      if (!data.answer) {
        throw new Error("Invalid response format");
      }

      console.log("Received answer:", data.answer);
      return data.answer;
    } else {
      const textResponse = await response.text();
      throw new Error(`Expected JSON response, got: ${textResponse}`);
    }
  } catch (error) {
    console.error("Error occurred:", error.message);
    return "Sorry, something went wrong. Please try again.";
  }
}

export default run;
