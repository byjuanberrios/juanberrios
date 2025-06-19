const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * Applies the given theme to the <html> element, saves it to localStorage
 * and updates the aria-label attribute of the theme button.
 * @param {string} theme - The theme to apply ('dark' or 'light').
 */
const applyTheme = (theme) => {
    // Toggles 'dark' class on the <html> element
    document.documentElement.classList.toggle("dark", theme === "dark");
    // Save the selected theme to localStorage
    localStorage.setItem("theme", theme);

    // Update the button's aria-label for accessibility
    const themeToggleButton = document.querySelector(".theme-btn");
    if (themeToggleButton) {
        themeToggleButton.setAttribute("aria-label", theme);
    }
};

/**
 * Determines the initial theme on page load.
 * Prioritizes the theme stored in localStorage; otherwise, use the system preference.
 * @returns {string} - 'dark' o 'light'.
 */
const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        return storedTheme; // Use saved theme
    }
    // If there is no theme saved, use the operating system preference
    return prefersDarkScheme.matches ? "dark" : "light";
};

/**
 * Handles clicking the theme switch button.
 * Switches the theme between 'light' and 'dark' and applies it.
 */
const handleThemeToggleClick = () => {
    const currentStoredTheme = localStorage.getItem("theme");
    // Determines the new theme by inverting the current one
    const newTheme = currentStoredTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
};

/**
 * Configure or re-configure the event listener for the theme switch button.
 * This is crucial for handling DOM re-renders (e.g., with Astro View Transitions).
 */
const setupThemeToggleListener = () => {
    const themeToggleButton = document.querySelector(".theme-btn");
    if (themeToggleButton) {
        // Remove any existing listeners to avoid duplicates
        themeToggleButton.removeEventListener("click", handleThemeToggleClick);
        // Add new listener
        themeToggleButton.addEventListener("click", handleThemeToggleClick);
    }
};

// --- SCRIPT EXECUTION FLUID ---

// 1. Apply the initial theme immediately to avoid "flickering" (FOUC).
// This ensures that the correct style is applied before the page is fully rendered.
applyTheme(getInitialTheme());

// 2. Set up the event listener for the theme switch button once the page has loaded.
// This ensures that the '.theme-btn' button is already available in the DOM.
window.onload = setupThemeToggleListener;

// 3. Listen for changes to the operating system's theme preference.
// If the user changes the theme in their OS settings, the script is automatically updated.
prefersDarkScheme.addEventListener("change", (event) => {
    applyTheme(event.matches ? "dark" : "light");
});

// 4. Handle View Transitions navigations (Astro-specific).
// After a content swap, reapply the theme and reattach the listener,
// since the DOM may have been re-rendered and the elements may be new.
document.addEventListener("astro:after-swap", () => {
    // Re-apply the current theme to ensure visual consistency
    applyTheme(localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light"));
    // Re-configure the event listener for the (potentially new) button
    setupThemeToggleListener();
});