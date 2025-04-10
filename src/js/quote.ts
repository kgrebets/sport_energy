import { getQuote } from "../services/quote-service";
import { QuoteResponse } from "./types/response.types";

const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("quote-author");

const QUOTE_STORAGE_KEY = "quote";
const QUOTE_DATE_STORAGE_KEY = "quoteDate";

function getCurrentDate(): string {
  return new Date().toISOString().split("T")[0];
}

function getStoredQuote(): QuoteResponse | null {
  const storedQuote = localStorage.getItem(QUOTE_STORAGE_KEY);
  const storedDate = localStorage.getItem(QUOTE_DATE_STORAGE_KEY);
  const today = getCurrentDate();

  if (storedQuote && storedDate === today) {
    try {
      return JSON.parse(storedQuote);
    } catch (error) {
      console.error("Error parsing stored quote:", error);
      return null;
    }
  }
  return null;
}

function updateQuoteDisplay(quote: string, author: string): void {
  if (!quoteTextElement || !quoteAuthorElement) {
    throw new Error("Can't find quote elements");
  }
  quoteTextElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

function storeQuote(quote: string, author: string): void {
  const quoteData = JSON.stringify({ quote, author });
  const today = getCurrentDate();
  localStorage.setItem(QUOTE_STORAGE_KEY, quoteData);
  localStorage.setItem(QUOTE_DATE_STORAGE_KEY, today);
}

async function fetchNewQuote(): Promise<QuoteResponse | null> {
  try {
    const data = await getQuote();
    if (data && data.quote) {
      return { quote: data.quote, author: data.author };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
    return null;
  }
}

export async function fetchQuote(): Promise<void> {
  if (!quoteTextElement || !quoteAuthorElement) {
    throw new Error("Can't find quote elements");
  }

  const storedQuoteData = getStoredQuote();
  if (storedQuoteData) {
    updateQuoteDisplay(storedQuoteData.quote, storedQuoteData.author);
    return;
  }

  const newQuoteData = await fetchNewQuote();
  if (newQuoteData) {
    storeQuote(newQuoteData.quote, newQuoteData.author);
    updateQuoteDisplay(newQuoteData.quote, newQuoteData.author);
  } else {
    updateQuoteDisplay("Failed to fetch quote.", "");
  }
}