export function scrollToContent(querySelector: string) {
  const element = document.querySelector(querySelector);
  element?.scrollIntoView({ behavior: "smooth" });
}