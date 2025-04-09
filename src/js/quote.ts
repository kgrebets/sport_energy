import { makeGetRequest } from "./services/request";

const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("quote-author");

export async function fetchQuote() {
    const today = new Date().toISOString().split("T")[0];
    const storedQuote = localStorage.getItem("quote");
    const storedDate = localStorage.getItem("quoteDate");
    if (!quoteTextElement || !quoteAuthorElement) {
      throw new Error("Can't find quote elements");
    }
    if (storedQuote && storedDate === today) {
        const { quote, author } = JSON.parse(storedQuote);
        quoteTextElement.textContent = quote;
        quoteAuthorElement.textContent = author;
        return;
    }

    try {
        const response = await fetch("https://your-energy.b.goit.study/api/quote", { method: "GET" });
        const data = await response.json();
        if (data && data.quote) {
            const { quote, author } = data;
            const quoteData = JSON.stringify({ quote, author });
            localStorage.setItem("quote", quoteData);
            localStorage.setItem("quoteDate", today);

            quoteTextElement.textContent = quote;
            quoteAuthorElement.textContent = author;
        } else {
            quoteTextElement.textContent = "Failed to fetch quote.";
            quoteAuthorElement.textContent = "";
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteTextElement.textContent = "Failed to fetch quote.";
        quoteAuthorElement.textContent = "";
    }
}

