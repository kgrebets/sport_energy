export function showLoader(): void {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.remove("hidden");
  }
}

export function hideLoader(): void {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden");
  }
}
