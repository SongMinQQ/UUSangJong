module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "uusj-theme-extended-colors-custom-color-1":
          "var(--uusj-theme-extended-colors-custom-color-1)",
        "uusj-theme-extended-colors-custom-color-1-container":
          "var(--uusj-theme-extended-colors-custom-color-1-container)",
        "uusj-theme-extended-colors-custom-color-2":
          "var(--uusj-theme-extended-colors-custom-color-2)",
        "uusj-theme-extended-colors-custom-color-2-container":
          "var(--uusj-theme-extended-colors-custom-color-2-container)",
        "uusj-theme-extended-colors-custom-color-3":
          "var(--uusj-theme-extended-colors-custom-color-3)",
        "uusj-theme-extended-colors-custom-color-3-container":
          "var(--uusj-theme-extended-colors-custom-color-3-container)",
        "uusj-theme-extended-colors-custom-color-4":
          "var(--uusj-theme-extended-colors-custom-color-4)",
        "uusj-theme-extended-colors-custom-color-4-container":
          "var(--uusj-theme-extended-colors-custom-color-4-container)",
        "uusj-theme-extended-colors-custom-color-5":
          "var(--uusj-theme-extended-colors-custom-color-5)",
        "uusj-theme-extended-colors-custom-color-5-container":
          "var(--uusj-theme-extended-colors-custom-color-5-container)",
        "uusj-theme-extended-colors-on-custom-color-1":
          "var(--uusj-theme-extended-colors-on-custom-color-1)",
        "uusj-theme-extended-colors-on-custom-color-1-container":
          "var(--uusj-theme-extended-colors-on-custom-color-1-container)",
        "uusj-theme-extended-colors-on-custom-color-2":
          "var(--uusj-theme-extended-colors-on-custom-color-2)",
        "uusj-theme-extended-colors-on-custom-color-2-container":
          "var(--uusj-theme-extended-colors-on-custom-color-2-container)",
        "uusj-theme-extended-colors-on-custom-color-3":
          "var(--uusj-theme-extended-colors-on-custom-color-3)",
        "uusj-theme-extended-colors-on-custom-color-3-container":
          "var(--uusj-theme-extended-colors-on-custom-color-3-container)",
        "uusj-theme-extended-colors-on-custom-color-4":
          "var(--uusj-theme-extended-colors-on-custom-color-4)",
        "uusj-theme-extended-colors-on-custom-color-4-container":
          "var(--uusj-theme-extended-colors-on-custom-color-4-container)",
        "uusj-theme-extended-colors-on-custom-color-5":
          "var(--uusj-theme-extended-colors-on-custom-color-5)",
        "uusj-theme-extended-colors-on-custom-color-5-container":
          "var(--uusj-theme-extended-colors-on-custom-color-5-container)",
        "uusj-theme-schemes-background": "var(--uusj-theme-schemes-background)",
        "uusj-theme-schemes-error": "var(--uusj-theme-schemes-error)",
        "uusj-theme-schemes-error-container": "var(--uusj-theme-schemes-error-container)",
        "uusj-theme-schemes-inverse-on-surface": "var(--uusj-theme-schemes-inverse-on-surface)",
        "uusj-theme-schemes-inverse-primary": "var(--uusj-theme-schemes-inverse-primary)",
        "uusj-theme-schemes-inverse-surface": "var(--uusj-theme-schemes-inverse-surface)",
        "uusj-theme-schemes-on-background": "var(--uusj-theme-schemes-on-background)",
        "uusj-theme-schemes-on-error": "var(--uusj-theme-schemes-on-error)",
        "uusj-theme-schemes-on-error-container": "var(--uusj-theme-schemes-on-error-container)",
        "uusj-theme-schemes-on-primary": "var(--uusj-theme-schemes-on-primary)",
        "uusj-theme-schemes-on-primary-container": "var(--uusj-theme-schemes-on-primary-container)",
        "uusj-theme-schemes-on-primary-fixed": "var(--uusj-theme-schemes-on-primary-fixed)",
        "uusj-theme-schemes-on-primary-fixed-variant":
          "var(--uusj-theme-schemes-on-primary-fixed-variant)",
        "uusj-theme-schemes-on-secondary": "var(--uusj-theme-schemes-on-secondary)",
        "uusj-theme-schemes-on-secondary-container":
          "var(--uusj-theme-schemes-on-secondary-container)",
        "uusj-theme-schemes-on-secondary-fixed": "var(--uusj-theme-schemes-on-secondary-fixed)",
        "uusj-theme-schemes-on-secondary-fixed-variant":
          "var(--uusj-theme-schemes-on-secondary-fixed-variant)",
        "uusj-theme-schemes-on-surface": "var(--uusj-theme-schemes-on-surface)",
        "uusj-theme-schemes-on-surface-variant": "var(--uusj-theme-schemes-on-surface-variant)",
        "uusj-theme-schemes-on-tertiary": "var(--uusj-theme-schemes-on-tertiary)",
        "uusj-theme-schemes-on-tertiary-container":
          "var(--uusj-theme-schemes-on-tertiary-container)",
        "uusj-theme-schemes-on-tertiary-fixed": "var(--uusj-theme-schemes-on-tertiary-fixed)",
        "uusj-theme-schemes-on-tertiary-fixed-variant":
          "var(--uusj-theme-schemes-on-tertiary-fixed-variant)",
        "uusj-theme-schemes-outline": "var(--uusj-theme-schemes-outline)",
        "uusj-theme-schemes-outline-variant": "var(--uusj-theme-schemes-outline-variant)",
        "uusj-theme-schemes-primary": "var(--uusj-theme-schemes-primary)",
        "uusj-theme-schemes-primary-container": "var(--uusj-theme-schemes-primary-container)",
        "uusj-theme-schemes-primary-fixed": "var(--uusj-theme-schemes-primary-fixed)",
        "uusj-theme-schemes-primary-fixed-dim": "var(--uusj-theme-schemes-primary-fixed-dim)",
        "uusj-theme-schemes-scrim": "var(--uusj-theme-schemes-scrim)",
        "uusj-theme-schemes-secondary": "var(--uusj-theme-schemes-secondary)",
        "uusj-theme-schemes-secondary-container": "var(--uusj-theme-schemes-secondary-container)",
        "uusj-theme-schemes-secondary-fixed": "var(--uusj-theme-schemes-secondary-fixed)",
        "uusj-theme-schemes-secondary-fixed-dim": "var(--uusj-theme-schemes-secondary-fixed-dim)",
        "uusj-theme-schemes-shadow": "var(--uusj-theme-schemes-shadow)",
        "uusj-theme-schemes-surface": "var(--uusj-theme-schemes-surface)",
        "uusj-theme-schemes-surface-bright": "var(--uusj-theme-schemes-surface-bright)",
        "uusj-theme-schemes-surface-container": "var(--uusj-theme-schemes-surface-container)",
        "uusj-theme-schemes-surface-container-high":
          "var(--uusj-theme-schemes-surface-container-high)",
        "uusj-theme-schemes-surface-container-highest":
          "var(--uusj-theme-schemes-surface-container-highest)",
        "uusj-theme-schemes-surface-container-low":
          "var(--uusj-theme-schemes-surface-container-low)",
        "uusj-theme-schemes-surface-container-lowest":
          "var(--uusj-theme-schemes-surface-container-lowest)",
        "uusj-theme-schemes-surface-dim": "var(--uusj-theme-schemes-surface-dim)",
        "uusj-theme-schemes-surface-tint": "var(--uusj-theme-schemes-surface-tint)",
        "uusj-theme-schemes-surface-variant": "var(--uusj-theme-schemes-surface-variant)",
        "uusj-theme-schemes-tertiary": "var(--uusj-theme-schemes-tertiary)",
        "uusj-theme-schemes-tertiary-container": "var(--uusj-theme-schemes-tertiary-container)",
        "uusj-theme-schemes-tertiary-fixed": "var(--uusj-theme-schemes-tertiary-fixed)",
        "uusj-theme-schemes-tertiary-fixed-dim": "var(--uusj-theme-schemes-tertiary-fixed-dim)",
        "uusj-themeblack": "var(--uusj-themeblack)",
        "uusj-themeextendedcustom-color-1dark-high-contrastcolor":
          "var(--uusj-themeextendedcustom-color-1dark-high-contrastcolor)",
        "uusj-themeextendedcustom-color-1dark-high-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-1dark-high-contrastcolor-container)",
        "uusj-themeextendedcustom-color-1dark-high-contraston-color":
          "var(--uusj-themeextendedcustom-color-1dark-high-contraston-color)",
        "uusj-themeextendedcustom-color-1dark-high-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-1dark-high-contraston-color-container)",
        "uusj-themeextendedcustom-color-1dark-medium-contrastcolor":
          "var(--uusj-themeextendedcustom-color-1dark-medium-contrastcolor)",
        "uusj-themeextendedcustom-color-1dark-medium-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-1dark-medium-contrastcolor-container)",
        "uusj-themeextendedcustom-color-1dark-medium-contraston-color":
          "var(--uusj-themeextendedcustom-color-1dark-medium-contraston-color)",
        "uusj-themeextendedcustom-color-1dark-medium-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-1dark-medium-contraston-color-container)",
        "uusj-themeextendedcustom-color-1darkcolor":
          "var(--uusj-themeextendedcustom-color-1darkcolor)",
        "uusj-themeextendedcustom-color-1darkcolor-container":
          "var(--uusj-themeextendedcustom-color-1darkcolor-container)",
        "uusj-themeextendedcustom-color-1darkon-color":
          "var(--uusj-themeextendedcustom-color-1darkon-color)",
        "uusj-themeextendedcustom-color-1darkon-color-container":
          "var(--uusj-themeextendedcustom-color-1darkon-color-container)",
        "uusj-themeextendedcustom-color-1light-high-contrastcolor":
          "var(--uusj-themeextendedcustom-color-1light-high-contrastcolor)",
        "uusj-themeextendedcustom-color-1light-high-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-1light-high-contrastcolor-container)",
        "uusj-themeextendedcustom-color-1light-high-contraston-color":
          "var(--uusj-themeextendedcustom-color-1light-high-contraston-color)",
        "uusj-themeextendedcustom-color-1light-high-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-1light-high-contraston-color-container)",
        "uusj-themeextendedcustom-color-1light-medium-contrastcolor":
          "var(--uusj-themeextendedcustom-color-1light-medium-contrastcolor)",
        "uusj-themeextendedcustom-color-1light-medium-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-1light-medium-contrastcolor-container)",
        "uusj-themeextendedcustom-color-1light-medium-contraston-color":
          "var(--uusj-themeextendedcustom-color-1light-medium-contraston-color)",
        "uusj-themeextendedcustom-color-1light-medium-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-1light-medium-contraston-color-container)",
        "uusj-themeextendedcustom-color-1lightcolor":
          "var(--uusj-themeextendedcustom-color-1lightcolor)",
        "uusj-themeextendedcustom-color-1lightcolor-container":
          "var(--uusj-themeextendedcustom-color-1lightcolor-container)",
        "uusj-themeextendedcustom-color-1lighton-color":
          "var(--uusj-themeextendedcustom-color-1lighton-color)",
        "uusj-themeextendedcustom-color-1lighton-color-container":
          "var(--uusj-themeextendedcustom-color-1lighton-color-container)",
        "uusj-themeextendedcustom-color-1seed": "var(--uusj-themeextendedcustom-color-1seed)",
        "uusj-themeextendedcustom-color-1value": "var(--uusj-themeextendedcustom-color-1value)",
        "uusj-themeextendedcustom-color-2dark-high-contrastcolor":
          "var(--uusj-themeextendedcustom-color-2dark-high-contrastcolor)",
        "uusj-themeextendedcustom-color-2dark-high-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-2dark-high-contrastcolor-container)",
        "uusj-themeextendedcustom-color-2dark-high-contraston-color":
          "var(--uusj-themeextendedcustom-color-2dark-high-contraston-color)",
        "uusj-themeextendedcustom-color-2dark-high-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-2dark-high-contraston-color-container)",
        "uusj-themeextendedcustom-color-2dark-medium-contrastcolor":
          "var(--uusj-themeextendedcustom-color-2dark-medium-contrastcolor)",
        "uusj-themeextendedcustom-color-2dark-medium-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-2dark-medium-contrastcolor-container)",
        "uusj-themeextendedcustom-color-2dark-medium-contraston-color":
          "var(--uusj-themeextendedcustom-color-2dark-medium-contraston-color)",
        "uusj-themeextendedcustom-color-2dark-medium-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-2dark-medium-contraston-color-container)",
        "uusj-themeextendedcustom-color-2darkcolor":
          "var(--uusj-themeextendedcustom-color-2darkcolor)",
        "uusj-themeextendedcustom-color-2darkcolor-container":
          "var(--uusj-themeextendedcustom-color-2darkcolor-container)",
        "uusj-themeextendedcustom-color-2darkon-color":
          "var(--uusj-themeextendedcustom-color-2darkon-color)",
        "uusj-themeextendedcustom-color-2darkon-color-container":
          "var(--uusj-themeextendedcustom-color-2darkon-color-container)",
        "uusj-themeextendedcustom-color-2light-medium-contrastcolor":
          "var(--uusj-themeextendedcustom-color-2light-medium-contrastcolor)",
        "uusj-themeextendedcustom-color-2light-medium-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-2light-medium-contrastcolor-container)",
        "uusj-themeextendedcustom-color-2light-medium-contraston-color":
          "var(--uusj-themeextendedcustom-color-2light-medium-contraston-color)",
        "uusj-themeextendedcustom-color-2light-medium-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-2light-medium-contraston-color-container)",
        "uusj-themeextendedcustom-color-2lightcolor":
          "var(--uusj-themeextendedcustom-color-2lightcolor)",
        "uusj-themeextendedcustom-color-2lightcolor-container":
          "var(--uusj-themeextendedcustom-color-2lightcolor-container)",
        "uusj-themeextendedcustom-color-2lighton-color":
          "var(--uusj-themeextendedcustom-color-2lighton-color)",
        "uusj-themeextendedcustom-color-2lighton-color-container":
          "var(--uusj-themeextendedcustom-color-2lighton-color-container)",
        "uusj-themeextendedcustom-color-2seed": "var(--uusj-themeextendedcustom-color-2seed)",
        "uusj-themeextendedcustom-color-2value": "var(--uusj-themeextendedcustom-color-2value)",
        "uusj-themeextendedcustom-color-3dark-high-contrastcolor":
          "var(--uusj-themeextendedcustom-color-3dark-high-contrastcolor)",
        "uusj-themeextendedcustom-color-3dark-high-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-3dark-high-contrastcolor-container)",
        "uusj-themeextendedcustom-color-3dark-high-contraston-color":
          "var(--uusj-themeextendedcustom-color-3dark-high-contraston-color)",
        "uusj-themeextendedcustom-color-3dark-high-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-3dark-high-contraston-color-container)",
        "uusj-themeextendedcustom-color-3dark-medium-contrastcolor":
          "var(--uusj-themeextendedcustom-color-3dark-medium-contrastcolor)",
        "uusj-themeextendedcustom-color-3dark-medium-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-3dark-medium-contrastcolor-container)",
        "uusj-themeextendedcustom-color-3dark-medium-contraston-color":
          "var(--uusj-themeextendedcustom-color-3dark-medium-contraston-color)",
        "uusj-themeextendedcustom-color-3dark-medium-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-3dark-medium-contraston-color-container)",
        "uusj-themeextendedcustom-color-3darkcolor":
          "var(--uusj-themeextendedcustom-color-3darkcolor)",
        "uusj-themeextendedcustom-color-3darkcolor-container":
          "var(--uusj-themeextendedcustom-color-3darkcolor-container)",
        "uusj-themeextendedcustom-color-3darkon-color":
          "var(--uusj-themeextendedcustom-color-3darkon-color)",
        "uusj-themeextendedcustom-color-3darkon-color-container":
          "var(--uusj-themeextendedcustom-color-3darkon-color-container)",
        "uusj-themeextendedcustom-color-3light-high-contrastcolor":
          "var(--uusj-themeextendedcustom-color-3light-high-contrastcolor)",
        "uusj-themeextendedcustom-color-3light-high-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-3light-high-contrastcolor-container)",
        "uusj-themeextendedcustom-color-3light-high-contraston-color":
          "var(--uusj-themeextendedcustom-color-3light-high-contraston-color)",
        "uusj-themeextendedcustom-color-3light-high-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-3light-high-contraston-color-container)",
        "uusj-themeextendedcustom-color-3light-medium-contrastcolor":
          "var(--uusj-themeextendedcustom-color-3light-medium-contrastcolor)",
        "uusj-themeextendedcustom-color-3light-medium-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-3light-medium-contrastcolor-container)",
        "uusj-themeextendedcustom-color-3light-medium-contraston-color":
          "var(--uusj-themeextendedcustom-color-3light-medium-contraston-color)",
        "uusj-themeextendedcustom-color-3light-medium-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-3light-medium-contraston-color-container)",
        "uusj-themeextendedcustom-color-3lightcolor":
          "var(--uusj-themeextendedcustom-color-3lightcolor)",
        "uusj-themeextendedcustom-color-3lightcolor-container":
          "var(--uusj-themeextendedcustom-color-3lightcolor-container)",
        "uusj-themeextendedcustom-color-3lighton-color":
          "var(--uusj-themeextendedcustom-color-3lighton-color)",
        "uusj-themeextendedcustom-color-3lighton-color-container":
          "var(--uusj-themeextendedcustom-color-3lighton-color-container)",
        "uusj-themeextendedcustom-color-3seed": "var(--uusj-themeextendedcustom-color-3seed)",
        "uusj-themeextendedcustom-color-3value": "var(--uusj-themeextendedcustom-color-3value)",
        "uusj-themeextendedcustom-color-4dark-high-contrastcolor":
          "var(--uusj-themeextendedcustom-color-4dark-high-contrastcolor)",
        "uusj-themeextendedcustom-color-4dark-high-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-4dark-high-contrastcolor-container)",
        "uusj-themeextendedcustom-color-4dark-high-contraston-color":
          "var(--uusj-themeextendedcustom-color-4dark-high-contraston-color)",
        "uusj-themeextendedcustom-color-4dark-high-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-4dark-high-contraston-color-container)",
        "uusj-themeextendedcustom-color-4dark-medium-contrastcolor":
          "var(--uusj-themeextendedcustom-color-4dark-medium-contrastcolor)",
        "uusj-themeextendedcustom-color-4dark-medium-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-4dark-medium-contrastcolor-container)",
        "uusj-themeextendedcustom-color-4dark-medium-contraston-color":
          "var(--uusj-themeextendedcustom-color-4dark-medium-contraston-color)",
        "uusj-themeextendedcustom-color-4dark-medium-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-4dark-medium-contraston-color-container)",
        "uusj-themeextendedcustom-color-4darkcolor":
          "var(--uusj-themeextendedcustom-color-4darkcolor)",
        "uusj-themeextendedcustom-color-4darkcolor-container":
          "var(--uusj-themeextendedcustom-color-4darkcolor-container)",
        "uusj-themeextendedcustom-color-4darkon-color":
          "var(--uusj-themeextendedcustom-color-4darkon-color)",
        "uusj-themeextendedcustom-color-4darkon-color-container":
          "var(--uusj-themeextendedcustom-color-4darkon-color-container)",
        "uusj-themeextendedcustom-color-4light-high-contrastcolor":
          "var(--uusj-themeextendedcustom-color-4light-high-contrastcolor)",
        "uusj-themeextendedcustom-color-4light-high-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-4light-high-contrastcolor-container)",
        "uusj-themeextendedcustom-color-4light-high-contraston-color":
          "var(--uusj-themeextendedcustom-color-4light-high-contraston-color)",
        "uusj-themeextendedcustom-color-4light-high-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-4light-high-contraston-color-container)",
        "uusj-themeextendedcustom-color-4light-medium-contrastcolor":
          "var(--uusj-themeextendedcustom-color-4light-medium-contrastcolor)",
        "uusj-themeextendedcustom-color-4light-medium-contrastcolor-container":
          "var(--uusj-themeextendedcustom-color-4light-medium-contrastcolor-container)",
        "uusj-themeextendedcustom-color-4light-medium-contraston-color":
          "var(--uusj-themeextendedcustom-color-4light-medium-contraston-color)",
        "uusj-themeextendedcustom-color-4light-medium-contraston-color-container":
          "var(--uusj-themeextendedcustom-color-4light-medium-contraston-color-container)",
        "uusj-themeextendedcustom-color-4lightcolor":
          "var(--uusj-themeextendedcustom-color-4lightcolor)",
        "uusj-themeextendedcustom-color-4lightcolor-container":
          "var(--uusj-themeextendedcustom-color-4lightcolor-container)",
        "uusj-themeextendedcustom-color-4lighton-color":
          "var(--uusj-themeextendedcustom-color-4lighton-color)",
        "uusj-themeextendedcustom-color-4lighton-color-container":
          "var(--uusj-themeextendedcustom-color-4lighton-color-container)",
        "uusj-themeextendedcustom-color-4seed": "var(--uusj-themeextendedcustom-color-4seed)",
        "uusj-themeextendedcustom-color-4value": "var(--uusj-themeextendedcustom-color-4value)",
        "uusj-themekey-colorsprimary": "var(--uusj-themekey-colorsprimary)",
        "uusj-themereferrorerror0": "var(--uusj-themereferrorerror0)",
        "uusj-themereferrorerror10": "var(--uusj-themereferrorerror10)",
        "uusj-themereferrorerror100": "var(--uusj-themereferrorerror100)",
        "uusj-themereferrorerror15": "var(--uusj-themereferrorerror15)",
        "uusj-themereferrorerror20": "var(--uusj-themereferrorerror20)",
        "uusj-themereferrorerror25": "var(--uusj-themereferrorerror25)",
        "uusj-themereferrorerror30": "var(--uusj-themereferrorerror30)",
        "uusj-themereferrorerror35": "var(--uusj-themereferrorerror35)",
        "uusj-themereferrorerror40": "var(--uusj-themereferrorerror40)",
        "uusj-themereferrorerror5": "var(--uusj-themereferrorerror5)",
        "uusj-themereferrorerror50": "var(--uusj-themereferrorerror50)",
        "uusj-themereferrorerror60": "var(--uusj-themereferrorerror60)",
        "uusj-themereferrorerror70": "var(--uusj-themereferrorerror70)",
        "uusj-themereferrorerror80": "var(--uusj-themereferrorerror80)",
        "uusj-themereferrorerror90": "var(--uusj-themereferrorerror90)",
        "uusj-themereferrorerror95": "var(--uusj-themereferrorerror95)",
        "uusj-themereferrorerror98": "var(--uusj-themereferrorerror98)",
        "uusj-themereferrorerror99": "var(--uusj-themereferrorerror99)",
        "uusj-themereflight-high-contrastcolor": "var(--uusj-themereflight-high-contrastcolor)",
        "uusj-themereflight-high-contrastcolor-container":
          "var(--uusj-themereflight-high-contrastcolor-container)",
        "uusj-themereflight-high-contraston-color":
          "var(--uusj-themereflight-high-contraston-color)",
        "uusj-themereflight-high-contraston-color-container":
          "var(--uusj-themereflight-high-contraston-color-container)",
        "uusj-themerefneutral-variantneutral-variant0":
          "var(--uusj-themerefneutral-variantneutral-variant0)",
        "uusj-themerefneutral-variantneutral-variant10":
          "var(--uusj-themerefneutral-variantneutral-variant10)",
        "uusj-themerefneutral-variantneutral-variant100":
          "var(--uusj-themerefneutral-variantneutral-variant100)",
        "uusj-themerefneutral-variantneutral-variant15":
          "var(--uusj-themerefneutral-variantneutral-variant15)",
        "uusj-themerefneutral-variantneutral-variant20":
          "var(--uusj-themerefneutral-variantneutral-variant20)",
        "uusj-themerefneutral-variantneutral-variant25":
          "var(--uusj-themerefneutral-variantneutral-variant25)",
        "uusj-themerefneutral-variantneutral-variant30":
          "var(--uusj-themerefneutral-variantneutral-variant30)",
        "uusj-themerefneutral-variantneutral-variant35":
          "var(--uusj-themerefneutral-variantneutral-variant35)",
        "uusj-themerefneutral-variantneutral-variant40":
          "var(--uusj-themerefneutral-variantneutral-variant40)",
        "uusj-themerefneutral-variantneutral-variant5":
          "var(--uusj-themerefneutral-variantneutral-variant5)",
        "uusj-themerefneutral-variantneutral-variant50":
          "var(--uusj-themerefneutral-variantneutral-variant50)",
        "uusj-themerefneutral-variantneutral-variant60":
          "var(--uusj-themerefneutral-variantneutral-variant60)",
        "uusj-themerefneutral-variantneutral-variant70":
          "var(--uusj-themerefneutral-variantneutral-variant70)",
        "uusj-themerefneutral-variantneutral-variant80":
          "var(--uusj-themerefneutral-variantneutral-variant80)",
        "uusj-themerefneutral-variantneutral-variant90":
          "var(--uusj-themerefneutral-variantneutral-variant90)",
        "uusj-themerefneutral-variantneutral-variant95":
          "var(--uusj-themerefneutral-variantneutral-variant95)",
        "uusj-themerefneutral-variantneutral-variant98":
          "var(--uusj-themerefneutral-variantneutral-variant98)",
        "uusj-themerefneutral-variantneutral-variant99":
          "var(--uusj-themerefneutral-variantneutral-variant99)",
        "uusj-themerefneutralneutral0": "var(--uusj-themerefneutralneutral0)",
        "uusj-themerefneutralneutral10": "var(--uusj-themerefneutralneutral10)",
        "uusj-themerefneutralneutral100": "var(--uusj-themerefneutralneutral100)",
        "uusj-themerefneutralneutral15": "var(--uusj-themerefneutralneutral15)",
        "uusj-themerefneutralneutral20": "var(--uusj-themerefneutralneutral20)",
        "uusj-themerefneutralneutral25": "var(--uusj-themerefneutralneutral25)",
        "uusj-themerefneutralneutral30": "var(--uusj-themerefneutralneutral30)",
        "uusj-themerefneutralneutral35": "var(--uusj-themerefneutralneutral35)",
        "uusj-themerefneutralneutral40": "var(--uusj-themerefneutralneutral40)",
        "uusj-themerefneutralneutral5": "var(--uusj-themerefneutralneutral5)",
        "uusj-themerefneutralneutral50": "var(--uusj-themerefneutralneutral50)",
        "uusj-themerefneutralneutral60": "var(--uusj-themerefneutralneutral60)",
        "uusj-themerefneutralneutral70": "var(--uusj-themerefneutralneutral70)",
        "uusj-themerefneutralneutral80": "var(--uusj-themerefneutralneutral80)",
        "uusj-themerefneutralneutral90": "var(--uusj-themerefneutralneutral90)",
        "uusj-themerefneutralneutral95": "var(--uusj-themerefneutralneutral95)",
        "uusj-themerefneutralneutral98": "var(--uusj-themerefneutralneutral98)",
        "uusj-themerefneutralneutral99": "var(--uusj-themerefneutralneutral99)",
        "uusj-themerefprimaryprimary0": "var(--uusj-themerefprimaryprimary0)",
        "uusj-themerefprimaryprimary10": "var(--uusj-themerefprimaryprimary10)",
        "uusj-themerefprimaryprimary100": "var(--uusj-themerefprimaryprimary100)",
        "uusj-themerefprimaryprimary15": "var(--uusj-themerefprimaryprimary15)",
        "uusj-themerefprimaryprimary20": "var(--uusj-themerefprimaryprimary20)",
        "uusj-themerefprimaryprimary25": "var(--uusj-themerefprimaryprimary25)",
        "uusj-themerefprimaryprimary30": "var(--uusj-themerefprimaryprimary30)",
        "uusj-themerefprimaryprimary35": "var(--uusj-themerefprimaryprimary35)",
        "uusj-themerefprimaryprimary40": "var(--uusj-themerefprimaryprimary40)",
        "uusj-themerefprimaryprimary5": "var(--uusj-themerefprimaryprimary5)",
        "uusj-themerefprimaryprimary50": "var(--uusj-themerefprimaryprimary50)",
        "uusj-themerefprimaryprimary60": "var(--uusj-themerefprimaryprimary60)",
        "uusj-themerefprimaryprimary70": "var(--uusj-themerefprimaryprimary70)",
        "uusj-themerefprimaryprimary80": "var(--uusj-themerefprimaryprimary80)",
        "uusj-themerefprimaryprimary90": "var(--uusj-themerefprimaryprimary90)",
        "uusj-themerefprimaryprimary95": "var(--uusj-themerefprimaryprimary95)",
        "uusj-themerefprimaryprimary98": "var(--uusj-themerefprimaryprimary98)",
        "uusj-themerefprimaryprimary99": "var(--uusj-themerefprimaryprimary99)",
        "uusj-themerefsecondarysecondary0": "var(--uusj-themerefsecondarysecondary0)",
        "uusj-themerefsecondarysecondary10": "var(--uusj-themerefsecondarysecondary10)",
        "uusj-themerefsecondarysecondary100": "var(--uusj-themerefsecondarysecondary100)",
        "uusj-themerefsecondarysecondary15": "var(--uusj-themerefsecondarysecondary15)",
        "uusj-themerefsecondarysecondary20": "var(--uusj-themerefsecondarysecondary20)",
        "uusj-themerefsecondarysecondary25": "var(--uusj-themerefsecondarysecondary25)",
        "uusj-themerefsecondarysecondary30": "var(--uusj-themerefsecondarysecondary30)",
        "uusj-themerefsecondarysecondary35": "var(--uusj-themerefsecondarysecondary35)",
        "uusj-themerefsecondarysecondary40": "var(--uusj-themerefsecondarysecondary40)",
        "uusj-themerefsecondarysecondary5": "var(--uusj-themerefsecondarysecondary5)",
        "uusj-themerefsecondarysecondary50": "var(--uusj-themerefsecondarysecondary50)",
        "uusj-themerefsecondarysecondary60": "var(--uusj-themerefsecondarysecondary60)",
        "uusj-themerefsecondarysecondary70": "var(--uusj-themerefsecondarysecondary70)",
        "uusj-themerefsecondarysecondary80": "var(--uusj-themerefsecondarysecondary80)",
        "uusj-themerefsecondarysecondary90": "var(--uusj-themerefsecondarysecondary90)",
        "uusj-themerefsecondarysecondary95": "var(--uusj-themerefsecondarysecondary95)",
        "uusj-themerefsecondarysecondary98": "var(--uusj-themerefsecondarysecondary98)",
        "uusj-themerefsecondarysecondary99": "var(--uusj-themerefsecondarysecondary99)",
        "uusj-themereftertiarytertiary0": "var(--uusj-themereftertiarytertiary0)",
        "uusj-themereftertiarytertiary10": "var(--uusj-themereftertiarytertiary10)",
        "uusj-themereftertiarytertiary100": "var(--uusj-themereftertiarytertiary100)",
        "uusj-themereftertiarytertiary15": "var(--uusj-themereftertiarytertiary15)",
        "uusj-themereftertiarytertiary20": "var(--uusj-themereftertiarytertiary20)",
        "uusj-themereftertiarytertiary25": "var(--uusj-themereftertiarytertiary25)",
        "uusj-themereftertiarytertiary30": "var(--uusj-themereftertiarytertiary30)",
        "uusj-themereftertiarytertiary35": "var(--uusj-themereftertiarytertiary35)",
        "uusj-themereftertiarytertiary40": "var(--uusj-themereftertiarytertiary40)",
        "uusj-themereftertiarytertiary5": "var(--uusj-themereftertiarytertiary5)",
        "uusj-themereftertiarytertiary50": "var(--uusj-themereftertiarytertiary50)",
        "uusj-themereftertiarytertiary60": "var(--uusj-themereftertiarytertiary60)",
        "uusj-themereftertiarytertiary70": "var(--uusj-themereftertiarytertiary70)",
        "uusj-themereftertiarytertiary80": "var(--uusj-themereftertiarytertiary80)",
        "uusj-themereftertiarytertiary90": "var(--uusj-themereftertiarytertiary90)",
        "uusj-themereftertiarytertiary95": "var(--uusj-themereftertiarytertiary95)",
        "uusj-themereftertiarytertiary98": "var(--uusj-themereftertiarytertiary98)",
        "uusj-themereftertiarytertiary99": "var(--uusj-themereftertiarytertiary99)",
        "uusj-themesourceseed": "var(--uusj-themesourceseed)",
        "uusj-themesysdark-high-contrastbackground":
          "var(--uusj-themesysdark-high-contrastbackground)",
        "uusj-themesysdark-high-contrasterror": "var(--uusj-themesysdark-high-contrasterror)",
        "uusj-themesysdark-high-contrasterror-container":
          "var(--uusj-themesysdark-high-contrasterror-container)",
        "uusj-themesysdark-high-contrastinverse-on-surface":
          "var(--uusj-themesysdark-high-contrastinverse-on-surface)",
        "uusj-themesysdark-high-contrastinverse-primary":
          "var(--uusj-themesysdark-high-contrastinverse-primary)",
        "uusj-themesysdark-high-contrastinverse-surface":
          "var(--uusj-themesysdark-high-contrastinverse-surface)",
        "uusj-themesysdark-high-contraston-background":
          "var(--uusj-themesysdark-high-contraston-background)",
        "uusj-themesysdark-high-contraston-error": "var(--uusj-themesysdark-high-contraston-error)",
        "uusj-themesysdark-high-contraston-error-container":
          "var(--uusj-themesysdark-high-contraston-error-container)",
        "uusj-themesysdark-high-contraston-primary":
          "var(--uusj-themesysdark-high-contraston-primary)",
        "uusj-themesysdark-high-contraston-primary-container":
          "var(--uusj-themesysdark-high-contraston-primary-container)",
        "uusj-themesysdark-high-contraston-primary-fixed":
          "var(--uusj-themesysdark-high-contraston-primary-fixed)",
        "uusj-themesysdark-high-contraston-primary-fixed-variant":
          "var(--uusj-themesysdark-high-contraston-primary-fixed-variant)",
        "uusj-themesysdark-high-contraston-secondary":
          "var(--uusj-themesysdark-high-contraston-secondary)",
        "uusj-themesysdark-high-contraston-secondary-container":
          "var(--uusj-themesysdark-high-contraston-secondary-container)",
        "uusj-themesysdark-high-contraston-secondary-fixed":
          "var(--uusj-themesysdark-high-contraston-secondary-fixed)",
        "uusj-themesysdark-high-contraston-secondary-fixed-variant":
          "var(--uusj-themesysdark-high-contraston-secondary-fixed-variant)",
        "uusj-themesysdark-high-contraston-surface":
          "var(--uusj-themesysdark-high-contraston-surface)",
        "uusj-themesysdark-high-contraston-surface-variant":
          "var(--uusj-themesysdark-high-contraston-surface-variant)",
        "uusj-themesysdark-high-contraston-tertiary":
          "var(--uusj-themesysdark-high-contraston-tertiary)",
        "uusj-themesysdark-high-contraston-tertiary-container":
          "var(--uusj-themesysdark-high-contraston-tertiary-container)",
        "uusj-themesysdark-high-contraston-tertiary-fixed":
          "var(--uusj-themesysdark-high-contraston-tertiary-fixed)",
        "uusj-themesysdark-high-contraston-tertiary-fixed-variant":
          "var(--uusj-themesysdark-high-contraston-tertiary-fixed-variant)",
        "uusj-themesysdark-high-contrastoutline": "var(--uusj-themesysdark-high-contrastoutline)",
        "uusj-themesysdark-high-contrastoutline-variant":
          "var(--uusj-themesysdark-high-contrastoutline-variant)",
        "uusj-themesysdark-high-contrastprimary": "var(--uusj-themesysdark-high-contrastprimary)",
        "uusj-themesysdark-high-contrastprimary-container":
          "var(--uusj-themesysdark-high-contrastprimary-container)",
        "uusj-themesysdark-high-contrastprimary-fixed":
          "var(--uusj-themesysdark-high-contrastprimary-fixed)",
        "uusj-themesysdark-high-contrastprimary-fixed-dim":
          "var(--uusj-themesysdark-high-contrastprimary-fixed-dim)",
        "uusj-themesysdark-high-contrastscrim": "var(--uusj-themesysdark-high-contrastscrim)",
        "uusj-themesysdark-high-contrastsecondary":
          "var(--uusj-themesysdark-high-contrastsecondary)",
        "uusj-themesysdark-high-contrastsecondary-container":
          "var(--uusj-themesysdark-high-contrastsecondary-container)",
        "uusj-themesysdark-high-contrastsecondary-fixed":
          "var(--uusj-themesysdark-high-contrastsecondary-fixed)",
        "uusj-themesysdark-high-contrastsecondary-fixed-dim":
          "var(--uusj-themesysdark-high-contrastsecondary-fixed-dim)",
        "uusj-themesysdark-high-contrastshadow": "var(--uusj-themesysdark-high-contrastshadow)",
        "uusj-themesysdark-high-contrastsurface": "var(--uusj-themesysdark-high-contrastsurface)",
        "uusj-themesysdark-high-contrastsurface-bright":
          "var(--uusj-themesysdark-high-contrastsurface-bright)",
        "uusj-themesysdark-high-contrastsurface-container":
          "var(--uusj-themesysdark-high-contrastsurface-container)",
        "uusj-themesysdark-high-contrastsurface-container-high":
          "var(--uusj-themesysdark-high-contrastsurface-container-high)",
        "uusj-themesysdark-high-contrastsurface-container-highest":
          "var(--uusj-themesysdark-high-contrastsurface-container-highest)",
        "uusj-themesysdark-high-contrastsurface-container-low":
          "var(--uusj-themesysdark-high-contrastsurface-container-low)",
        "uusj-themesysdark-high-contrastsurface-container-lowest":
          "var(--uusj-themesysdark-high-contrastsurface-container-lowest)",
        "uusj-themesysdark-high-contrastsurface-dim":
          "var(--uusj-themesysdark-high-contrastsurface-dim)",
        "uusj-themesysdark-high-contrastsurface-tint":
          "var(--uusj-themesysdark-high-contrastsurface-tint)",
        "uusj-themesysdark-high-contrastsurface-variant":
          "var(--uusj-themesysdark-high-contrastsurface-variant)",
        "uusj-themesysdark-high-contrasttertiary": "var(--uusj-themesysdark-high-contrasttertiary)",
        "uusj-themesysdark-high-contrasttertiary-container":
          "var(--uusj-themesysdark-high-contrasttertiary-container)",
        "uusj-themesysdark-high-contrasttertiary-fixed":
          "var(--uusj-themesysdark-high-contrasttertiary-fixed)",
        "uusj-themesysdark-high-contrasttertiary-fixed-dim":
          "var(--uusj-themesysdark-high-contrasttertiary-fixed-dim)",
        "uusj-themesysdark-medium-contrastbackground":
          "var(--uusj-themesysdark-medium-contrastbackground)",
        "uusj-themesysdark-medium-contrasterror": "var(--uusj-themesysdark-medium-contrasterror)",
        "uusj-themesysdark-medium-contrasterror-container":
          "var(--uusj-themesysdark-medium-contrasterror-container)",
        "uusj-themesysdark-medium-contrastinverse-on-surface":
          "var(--uusj-themesysdark-medium-contrastinverse-on-surface)",
        "uusj-themesysdark-medium-contrastinverse-primary":
          "var(--uusj-themesysdark-medium-contrastinverse-primary)",
        "uusj-themesysdark-medium-contrastinverse-surface":
          "var(--uusj-themesysdark-medium-contrastinverse-surface)",
        "uusj-themesysdark-medium-contraston-background":
          "var(--uusj-themesysdark-medium-contraston-background)",
        "uusj-themesysdark-medium-contraston-error":
          "var(--uusj-themesysdark-medium-contraston-error)",
        "uusj-themesysdark-medium-contraston-error-container":
          "var(--uusj-themesysdark-medium-contraston-error-container)",
        "uusj-themesysdark-medium-contraston-primary":
          "var(--uusj-themesysdark-medium-contraston-primary)",
        "uusj-themesysdark-medium-contraston-primary-container":
          "var(--uusj-themesysdark-medium-contraston-primary-container)",
        "uusj-themesysdark-medium-contraston-primary-fixed":
          "var(--uusj-themesysdark-medium-contraston-primary-fixed)",
        "uusj-themesysdark-medium-contraston-primary-fixed-variant":
          "var(--uusj-themesysdark-medium-contraston-primary-fixed-variant)",
        "uusj-themesysdark-medium-contraston-secondary":
          "var(--uusj-themesysdark-medium-contraston-secondary)",
        "uusj-themesysdark-medium-contraston-secondary-container":
          "var(--uusj-themesysdark-medium-contraston-secondary-container)",
        "uusj-themesysdark-medium-contraston-secondary-fixed":
          "var(--uusj-themesysdark-medium-contraston-secondary-fixed)",
        "uusj-themesysdark-medium-contraston-secondary-fixed-variant":
          "var(--uusj-themesysdark-medium-contraston-secondary-fixed-variant)",
        "uusj-themesysdark-medium-contraston-surface":
          "var(--uusj-themesysdark-medium-contraston-surface)",
        "uusj-themesysdark-medium-contraston-surface-variant":
          "var(--uusj-themesysdark-medium-contraston-surface-variant)",
        "uusj-themesysdark-medium-contraston-tertiary":
          "var(--uusj-themesysdark-medium-contraston-tertiary)",
        "uusj-themesysdark-medium-contraston-tertiary-container":
          "var(--uusj-themesysdark-medium-contraston-tertiary-container)",
        "uusj-themesysdark-medium-contraston-tertiary-fixed":
          "var(--uusj-themesysdark-medium-contraston-tertiary-fixed)",
        "uusj-themesysdark-medium-contraston-tertiary-fixed-variant":
          "var(--uusj-themesysdark-medium-contraston-tertiary-fixed-variant)",
        "uusj-themesysdark-medium-contrastoutline":
          "var(--uusj-themesysdark-medium-contrastoutline)",
        "uusj-themesysdark-medium-contrastoutline-variant":
          "var(--uusj-themesysdark-medium-contrastoutline-variant)",
        "uusj-themesysdark-medium-contrastprimary":
          "var(--uusj-themesysdark-medium-contrastprimary)",
        "uusj-themesysdark-medium-contrastprimary-container":
          "var(--uusj-themesysdark-medium-contrastprimary-container)",
        "uusj-themesysdark-medium-contrastprimary-fixed":
          "var(--uusj-themesysdark-medium-contrastprimary-fixed)",
        "uusj-themesysdark-medium-contrastprimary-fixed-dim":
          "var(--uusj-themesysdark-medium-contrastprimary-fixed-dim)",
        "uusj-themesysdark-medium-contrastscrim": "var(--uusj-themesysdark-medium-contrastscrim)",
        "uusj-themesysdark-medium-contrastsecondary":
          "var(--uusj-themesysdark-medium-contrastsecondary)",
        "uusj-themesysdark-medium-contrastsecondary-container":
          "var(--uusj-themesysdark-medium-contrastsecondary-container)",
        "uusj-themesysdark-medium-contrastsecondary-fixed":
          "var(--uusj-themesysdark-medium-contrastsecondary-fixed)",
        "uusj-themesysdark-medium-contrastsecondary-fixed-dim":
          "var(--uusj-themesysdark-medium-contrastsecondary-fixed-dim)",
        "uusj-themesysdark-medium-contrastshadow": "var(--uusj-themesysdark-medium-contrastshadow)",
        "uusj-themesysdark-medium-contrastsurface":
          "var(--uusj-themesysdark-medium-contrastsurface)",
        "uusj-themesysdark-medium-contrastsurface-bright":
          "var(--uusj-themesysdark-medium-contrastsurface-bright)",
        "uusj-themesysdark-medium-contrastsurface-container":
          "var(--uusj-themesysdark-medium-contrastsurface-container)",
        "uusj-themesysdark-medium-contrastsurface-container-high":
          "var(--uusj-themesysdark-medium-contrastsurface-container-high)",
        "uusj-themesysdark-medium-contrastsurface-container-highest":
          "var(--uusj-themesysdark-medium-contrastsurface-container-highest)",
        "uusj-themesysdark-medium-contrastsurface-container-low":
          "var(--uusj-themesysdark-medium-contrastsurface-container-low)",
        "uusj-themesysdark-medium-contrastsurface-container-lowest":
          "var(--uusj-themesysdark-medium-contrastsurface-container-lowest)",
        "uusj-themesysdark-medium-contrastsurface-dim":
          "var(--uusj-themesysdark-medium-contrastsurface-dim)",
        "uusj-themesysdark-medium-contrastsurface-tint":
          "var(--uusj-themesysdark-medium-contrastsurface-tint)",
        "uusj-themesysdark-medium-contrastsurface-variant":
          "var(--uusj-themesysdark-medium-contrastsurface-variant)",
        "uusj-themesysdark-medium-contrasttertiary":
          "var(--uusj-themesysdark-medium-contrasttertiary)",
        "uusj-themesysdark-medium-contrasttertiary-container":
          "var(--uusj-themesysdark-medium-contrasttertiary-container)",
        "uusj-themesysdark-medium-contrasttertiary-fixed":
          "var(--uusj-themesysdark-medium-contrasttertiary-fixed)",
        "uusj-themesysdark-medium-contrasttertiary-fixed-dim":
          "var(--uusj-themesysdark-medium-contrasttertiary-fixed-dim)",
        "uusj-themesysdarkbackground": "var(--uusj-themesysdarkbackground)",
        "uusj-themesysdarkerror": "var(--uusj-themesysdarkerror)",
        "uusj-themesysdarkerror-container": "var(--uusj-themesysdarkerror-container)",
        "uusj-themesysdarkinverse-on-surface": "var(--uusj-themesysdarkinverse-on-surface)",
        "uusj-themesysdarkinverse-primary": "var(--uusj-themesysdarkinverse-primary)",
        "uusj-themesysdarkinverse-surface": "var(--uusj-themesysdarkinverse-surface)",
        "uusj-themesysdarkon-background": "var(--uusj-themesysdarkon-background)",
        "uusj-themesysdarkon-error": "var(--uusj-themesysdarkon-error)",
        "uusj-themesysdarkon-error-container": "var(--uusj-themesysdarkon-error-container)",
        "uusj-themesysdarkon-primary": "var(--uusj-themesysdarkon-primary)",
        "uusj-themesysdarkon-primary-container": "var(--uusj-themesysdarkon-primary-container)",
        "uusj-themesysdarkon-primary-fixed": "var(--uusj-themesysdarkon-primary-fixed)",
        "uusj-themesysdarkon-primary-fixed-variant":
          "var(--uusj-themesysdarkon-primary-fixed-variant)",
        "uusj-themesysdarkon-secondary": "var(--uusj-themesysdarkon-secondary)",
        "uusj-themesysdarkon-secondary-container": "var(--uusj-themesysdarkon-secondary-container)",
        "uusj-themesysdarkon-secondary-fixed": "var(--uusj-themesysdarkon-secondary-fixed)",
        "uusj-themesysdarkon-secondary-fixed-variant":
          "var(--uusj-themesysdarkon-secondary-fixed-variant)",
        "uusj-themesysdarkon-surface": "var(--uusj-themesysdarkon-surface)",
        "uusj-themesysdarkon-surface-variant": "var(--uusj-themesysdarkon-surface-variant)",
        "uusj-themesysdarkon-tertiary": "var(--uusj-themesysdarkon-tertiary)",
        "uusj-themesysdarkon-tertiary-container": "var(--uusj-themesysdarkon-tertiary-container)",
        "uusj-themesysdarkon-tertiary-fixed": "var(--uusj-themesysdarkon-tertiary-fixed)",
        "uusj-themesysdarkon-tertiary-fixed-variant":
          "var(--uusj-themesysdarkon-tertiary-fixed-variant)",
        "uusj-themesysdarkoutline": "var(--uusj-themesysdarkoutline)",
        "uusj-themesysdarkoutline-variant": "var(--uusj-themesysdarkoutline-variant)",
        "uusj-themesysdarkprimary": "var(--uusj-themesysdarkprimary)",
        "uusj-themesysdarkprimary-container": "var(--uusj-themesysdarkprimary-container)",
        "uusj-themesysdarkprimary-fixed": "var(--uusj-themesysdarkprimary-fixed)",
        "uusj-themesysdarkprimary-fixed-dim": "var(--uusj-themesysdarkprimary-fixed-dim)",
        "uusj-themesysdarkscrim": "var(--uusj-themesysdarkscrim)",
        "uusj-themesysdarksecondary": "var(--uusj-themesysdarksecondary)",
        "uusj-themesysdarksecondary-container": "var(--uusj-themesysdarksecondary-container)",
        "uusj-themesysdarksecondary-fixed": "var(--uusj-themesysdarksecondary-fixed)",
        "uusj-themesysdarksecondary-fixed-dim": "var(--uusj-themesysdarksecondary-fixed-dim)",
        "uusj-themesysdarkshadow": "var(--uusj-themesysdarkshadow)",
        "uusj-themesysdarksurface": "var(--uusj-themesysdarksurface)",
        "uusj-themesysdarksurface-bright": "var(--uusj-themesysdarksurface-bright)",
        "uusj-themesysdarksurface-container": "var(--uusj-themesysdarksurface-container)",
        "uusj-themesysdarksurface-container-high": "var(--uusj-themesysdarksurface-container-high)",
        "uusj-themesysdarksurface-container-highest":
          "var(--uusj-themesysdarksurface-container-highest)",
        "uusj-themesysdarksurface-container-low": "var(--uusj-themesysdarksurface-container-low)",
        "uusj-themesysdarksurface-container-lowest":
          "var(--uusj-themesysdarksurface-container-lowest)",
        "uusj-themesysdarksurface-dim": "var(--uusj-themesysdarksurface-dim)",
        "uusj-themesysdarksurface-tint": "var(--uusj-themesysdarksurface-tint)",
        "uusj-themesysdarksurface-variant": "var(--uusj-themesysdarksurface-variant)",
        "uusj-themesysdarktertiary": "var(--uusj-themesysdarktertiary)",
        "uusj-themesysdarktertiary-container": "var(--uusj-themesysdarktertiary-container)",
        "uusj-themesysdarktertiary-fixed": "var(--uusj-themesysdarktertiary-fixed)",
        "uusj-themesysdarktertiary-fixed-dim": "var(--uusj-themesysdarktertiary-fixed-dim)",
        "uusj-themesyslight-high-contrastbackground":
          "var(--uusj-themesyslight-high-contrastbackground)",
        "uusj-themesyslight-high-contrasterror": "var(--uusj-themesyslight-high-contrasterror)",
        "uusj-themesyslight-high-contrasterror-container":
          "var(--uusj-themesyslight-high-contrasterror-container)",
        "uusj-themesyslight-high-contrastinverse-on-surface":
          "var(--uusj-themesyslight-high-contrastinverse-on-surface)",
        "uusj-themesyslight-high-contrastinverse-primary":
          "var(--uusj-themesyslight-high-contrastinverse-primary)",
        "uusj-themesyslight-high-contrastinverse-surface":
          "var(--uusj-themesyslight-high-contrastinverse-surface)",
        "uusj-themesyslight-high-contraston-background":
          "var(--uusj-themesyslight-high-contraston-background)",
        "uusj-themesyslight-high-contraston-error":
          "var(--uusj-themesyslight-high-contraston-error)",
        "uusj-themesyslight-high-contraston-error-container":
          "var(--uusj-themesyslight-high-contraston-error-container)",
        "uusj-themesyslight-high-contraston-primary":
          "var(--uusj-themesyslight-high-contraston-primary)",
        "uusj-themesyslight-high-contraston-primary-container":
          "var(--uusj-themesyslight-high-contraston-primary-container)",
        "uusj-themesyslight-high-contraston-primary-fixed":
          "var(--uusj-themesyslight-high-contraston-primary-fixed)",
        "uusj-themesyslight-high-contraston-primary-fixed-variant":
          "var(--uusj-themesyslight-high-contraston-primary-fixed-variant)",
        "uusj-themesyslight-high-contraston-secondary":
          "var(--uusj-themesyslight-high-contraston-secondary)",
        "uusj-themesyslight-high-contraston-secondary-container":
          "var(--uusj-themesyslight-high-contraston-secondary-container)",
        "uusj-themesyslight-high-contraston-secondary-fixed":
          "var(--uusj-themesyslight-high-contraston-secondary-fixed)",
        "uusj-themesyslight-high-contraston-secondary-fixed-variant":
          "var(--uusj-themesyslight-high-contraston-secondary-fixed-variant)",
        "uusj-themesyslight-high-contraston-surface":
          "var(--uusj-themesyslight-high-contraston-surface)",
        "uusj-themesyslight-high-contraston-surface-variant":
          "var(--uusj-themesyslight-high-contraston-surface-variant)",
        "uusj-themesyslight-high-contraston-tertiary":
          "var(--uusj-themesyslight-high-contraston-tertiary)",
        "uusj-themesyslight-high-contraston-tertiary-container":
          "var(--uusj-themesyslight-high-contraston-tertiary-container)",
        "uusj-themesyslight-high-contraston-tertiary-fixed":
          "var(--uusj-themesyslight-high-contraston-tertiary-fixed)",
        "uusj-themesyslight-high-contraston-tertiary-fixed-variant":
          "var(--uusj-themesyslight-high-contraston-tertiary-fixed-variant)",
        "uusj-themesyslight-high-contrastoutline": "var(--uusj-themesyslight-high-contrastoutline)",
        "uusj-themesyslight-high-contrastoutline-variant":
          "var(--uusj-themesyslight-high-contrastoutline-variant)",
        "uusj-themesyslight-high-contrastprimary": "var(--uusj-themesyslight-high-contrastprimary)",
        "uusj-themesyslight-high-contrastprimary-container":
          "var(--uusj-themesyslight-high-contrastprimary-container)",
        "uusj-themesyslight-high-contrastprimary-fixed":
          "var(--uusj-themesyslight-high-contrastprimary-fixed)",
        "uusj-themesyslight-high-contrastprimary-fixed-dim":
          "var(--uusj-themesyslight-high-contrastprimary-fixed-dim)",
        "uusj-themesyslight-high-contrastscrim": "var(--uusj-themesyslight-high-contrastscrim)",
        "uusj-themesyslight-high-contrastsecondary":
          "var(--uusj-themesyslight-high-contrastsecondary)",
        "uusj-themesyslight-high-contrastsecondary-container":
          "var(--uusj-themesyslight-high-contrastsecondary-container)",
        "uusj-themesyslight-high-contrastsecondary-fixed":
          "var(--uusj-themesyslight-high-contrastsecondary-fixed)",
        "uusj-themesyslight-high-contrastsecondary-fixed-dim":
          "var(--uusj-themesyslight-high-contrastsecondary-fixed-dim)",
        "uusj-themesyslight-high-contrastshadow": "var(--uusj-themesyslight-high-contrastshadow)",
        "uusj-themesyslight-high-contrastsurface": "var(--uusj-themesyslight-high-contrastsurface)",
        "uusj-themesyslight-high-contrastsurface-bright":
          "var(--uusj-themesyslight-high-contrastsurface-bright)",
        "uusj-themesyslight-high-contrastsurface-container":
          "var(--uusj-themesyslight-high-contrastsurface-container)",
        "uusj-themesyslight-high-contrastsurface-container-high":
          "var(--uusj-themesyslight-high-contrastsurface-container-high)",
        "uusj-themesyslight-high-contrastsurface-container-highest":
          "var(--uusj-themesyslight-high-contrastsurface-container-highest)",
        "uusj-themesyslight-high-contrastsurface-container-low":
          "var(--uusj-themesyslight-high-contrastsurface-container-low)",
        "uusj-themesyslight-high-contrastsurface-container-lowest":
          "var(--uusj-themesyslight-high-contrastsurface-container-lowest)",
        "uusj-themesyslight-high-contrastsurface-dim":
          "var(--uusj-themesyslight-high-contrastsurface-dim)",
        "uusj-themesyslight-high-contrastsurface-tint":
          "var(--uusj-themesyslight-high-contrastsurface-tint)",
        "uusj-themesyslight-high-contrastsurface-variant":
          "var(--uusj-themesyslight-high-contrastsurface-variant)",
        "uusj-themesyslight-high-contrasttertiary":
          "var(--uusj-themesyslight-high-contrasttertiary)",
        "uusj-themesyslight-high-contrasttertiary-container":
          "var(--uusj-themesyslight-high-contrasttertiary-container)",
        "uusj-themesyslight-high-contrasttertiary-fixed":
          "var(--uusj-themesyslight-high-contrasttertiary-fixed)",
        "uusj-themesyslight-high-contrasttertiary-fixed-dim":
          "var(--uusj-themesyslight-high-contrasttertiary-fixed-dim)",
        "uusj-themesyslight-medium-contrastbackground":
          "var(--uusj-themesyslight-medium-contrastbackground)",
        "uusj-themesyslight-medium-contrasterror": "var(--uusj-themesyslight-medium-contrasterror)",
        "uusj-themesyslight-medium-contrasterror-container":
          "var(--uusj-themesyslight-medium-contrasterror-container)",
        "uusj-themesyslight-medium-contrastinverse-on-surface":
          "var(--uusj-themesyslight-medium-contrastinverse-on-surface)",
        "uusj-themesyslight-medium-contrastinverse-primary":
          "var(--uusj-themesyslight-medium-contrastinverse-primary)",
        "uusj-themesyslight-medium-contrastinverse-surface":
          "var(--uusj-themesyslight-medium-contrastinverse-surface)",
        "uusj-themesyslight-medium-contraston-background":
          "var(--uusj-themesyslight-medium-contraston-background)",
        "uusj-themesyslight-medium-contraston-error":
          "var(--uusj-themesyslight-medium-contraston-error)",
        "uusj-themesyslight-medium-contraston-error-container":
          "var(--uusj-themesyslight-medium-contraston-error-container)",
        "uusj-themesyslight-medium-contraston-primary":
          "var(--uusj-themesyslight-medium-contraston-primary)",
        "uusj-themesyslight-medium-contraston-primary-container":
          "var(--uusj-themesyslight-medium-contraston-primary-container)",
        "uusj-themesyslight-medium-contraston-primary-fixed":
          "var(--uusj-themesyslight-medium-contraston-primary-fixed)",
        "uusj-themesyslight-medium-contraston-primary-fixed-variant":
          "var(--uusj-themesyslight-medium-contraston-primary-fixed-variant)",
        "uusj-themesyslight-medium-contraston-secondary":
          "var(--uusj-themesyslight-medium-contraston-secondary)",
        "uusj-themesyslight-medium-contraston-secondary-container":
          "var(--uusj-themesyslight-medium-contraston-secondary-container)",
        "uusj-themesyslight-medium-contraston-secondary-fixed":
          "var(--uusj-themesyslight-medium-contraston-secondary-fixed)",
        "uusj-themesyslight-medium-contraston-secondary-fixed-variant":
          "var(--uusj-themesyslight-medium-contraston-secondary-fixed-variant)",
        "uusj-themesyslight-medium-contraston-surface":
          "var(--uusj-themesyslight-medium-contraston-surface)",
        "uusj-themesyslight-medium-contraston-surface-variant":
          "var(--uusj-themesyslight-medium-contraston-surface-variant)",
        "uusj-themesyslight-medium-contraston-tertiary":
          "var(--uusj-themesyslight-medium-contraston-tertiary)",
        "uusj-themesyslight-medium-contraston-tertiary-container":
          "var(--uusj-themesyslight-medium-contraston-tertiary-container)",
        "uusj-themesyslight-medium-contraston-tertiary-fixed":
          "var(--uusj-themesyslight-medium-contraston-tertiary-fixed)",
        "uusj-themesyslight-medium-contraston-tertiary-fixed-variant":
          "var(--uusj-themesyslight-medium-contraston-tertiary-fixed-variant)",
        "uusj-themesyslight-medium-contrastoutline":
          "var(--uusj-themesyslight-medium-contrastoutline)",
        "uusj-themesyslight-medium-contrastoutline-variant":
          "var(--uusj-themesyslight-medium-contrastoutline-variant)",
        "uusj-themesyslight-medium-contrastprimary":
          "var(--uusj-themesyslight-medium-contrastprimary)",
        "uusj-themesyslight-medium-contrastprimary-container":
          "var(--uusj-themesyslight-medium-contrastprimary-container)",
        "uusj-themesyslight-medium-contrastprimary-fixed":
          "var(--uusj-themesyslight-medium-contrastprimary-fixed)",
        "uusj-themesyslight-medium-contrastprimary-fixed-dim":
          "var(--uusj-themesyslight-medium-contrastprimary-fixed-dim)",
        "uusj-themesyslight-medium-contrastscrim": "var(--uusj-themesyslight-medium-contrastscrim)",
        "uusj-themesyslight-medium-contrastsecondary":
          "var(--uusj-themesyslight-medium-contrastsecondary)",
        "uusj-themesyslight-medium-contrastsecondary-container":
          "var(--uusj-themesyslight-medium-contrastsecondary-container)",
        "uusj-themesyslight-medium-contrastsecondary-fixed":
          "var(--uusj-themesyslight-medium-contrastsecondary-fixed)",
        "uusj-themesyslight-medium-contrastsecondary-fixed-dim":
          "var(--uusj-themesyslight-medium-contrastsecondary-fixed-dim)",
        "uusj-themesyslight-medium-contrastshadow":
          "var(--uusj-themesyslight-medium-contrastshadow)",
        "uusj-themesyslight-medium-contrastsurface":
          "var(--uusj-themesyslight-medium-contrastsurface)",
        "uusj-themesyslight-medium-contrastsurface-bright":
          "var(--uusj-themesyslight-medium-contrastsurface-bright)",
        "uusj-themesyslight-medium-contrastsurface-container":
          "var(--uusj-themesyslight-medium-contrastsurface-container)",
        "uusj-themesyslight-medium-contrastsurface-container-high":
          "var(--uusj-themesyslight-medium-contrastsurface-container-high)",
        "uusj-themesyslight-medium-contrastsurface-container-highest":
          "var(--uusj-themesyslight-medium-contrastsurface-container-highest)",
        "uusj-themesyslight-medium-contrastsurface-container-low":
          "var(--uusj-themesyslight-medium-contrastsurface-container-low)",
        "uusj-themesyslight-medium-contrastsurface-container-lowest":
          "var(--uusj-themesyslight-medium-contrastsurface-container-lowest)",
        "uusj-themesyslight-medium-contrastsurface-dim":
          "var(--uusj-themesyslight-medium-contrastsurface-dim)",
        "uusj-themesyslight-medium-contrastsurface-tint":
          "var(--uusj-themesyslight-medium-contrastsurface-tint)",
        "uusj-themesyslight-medium-contrastsurface-variant":
          "var(--uusj-themesyslight-medium-contrastsurface-variant)",
        "uusj-themesyslight-medium-contrasttertiary":
          "var(--uusj-themesyslight-medium-contrasttertiary)",
        "uusj-themesyslight-medium-contrasttertiary-container":
          "var(--uusj-themesyslight-medium-contrasttertiary-container)",
        "uusj-themesyslight-medium-contrasttertiary-fixed":
          "var(--uusj-themesyslight-medium-contrasttertiary-fixed)",
        "uusj-themesyslight-medium-contrasttertiary-fixed-dim":
          "var(--uusj-themesyslight-medium-contrasttertiary-fixed-dim)",
        "uusj-themesyslightbackground": "var(--uusj-themesyslightbackground)",
        "uusj-themesyslighterror": "var(--uusj-themesyslighterror)",
        "uusj-themesyslighterror-container": "var(--uusj-themesyslighterror-container)",
        "uusj-themesyslightinverse-on-surface": "var(--uusj-themesyslightinverse-on-surface)",
        "uusj-themesyslightinverse-primary": "var(--uusj-themesyslightinverse-primary)",
        "uusj-themesyslightinverse-surface": "var(--uusj-themesyslightinverse-surface)",
        "uusj-themesyslighton-background": "var(--uusj-themesyslighton-background)",
        "uusj-themesyslighton-error": "var(--uusj-themesyslighton-error)",
        "uusj-themesyslighton-error-container": "var(--uusj-themesyslighton-error-container)",
        "uusj-themesyslighton-primary": "var(--uusj-themesyslighton-primary)",
        "uusj-themesyslighton-primary-container": "var(--uusj-themesyslighton-primary-container)",
        "uusj-themesyslighton-primary-fixed": "var(--uusj-themesyslighton-primary-fixed)",
        "uusj-themesyslighton-primary-fixed-variant":
          "var(--uusj-themesyslighton-primary-fixed-variant)",
        "uusj-themesyslighton-secondary": "var(--uusj-themesyslighton-secondary)",
        "uusj-themesyslighton-secondary-container":
          "var(--uusj-themesyslighton-secondary-container)",
        "uusj-themesyslighton-secondary-fixed": "var(--uusj-themesyslighton-secondary-fixed)",
        "uusj-themesyslighton-secondary-fixed-variant":
          "var(--uusj-themesyslighton-secondary-fixed-variant)",
        "uusj-themesyslighton-surface": "var(--uusj-themesyslighton-surface)",
        "uusj-themesyslighton-surface-variant": "var(--uusj-themesyslighton-surface-variant)",
        "uusj-themesyslighton-tertiary": "var(--uusj-themesyslighton-tertiary)",
        "uusj-themesyslighton-tertiary-container": "var(--uusj-themesyslighton-tertiary-container)",
        "uusj-themesyslighton-tertiary-fixed": "var(--uusj-themesyslighton-tertiary-fixed)",
        "uusj-themesyslighton-tertiary-fixed-variant":
          "var(--uusj-themesyslighton-tertiary-fixed-variant)",
        "uusj-themesyslightoutline": "var(--uusj-themesyslightoutline)",
        "uusj-themesyslightoutline-variant": "var(--uusj-themesyslightoutline-variant)",
        "uusj-themesyslightprimary": "var(--uusj-themesyslightprimary)",
        "uusj-themesyslightprimary-container": "var(--uusj-themesyslightprimary-container)",
        "uusj-themesyslightprimary-fixed": "var(--uusj-themesyslightprimary-fixed)",
        "uusj-themesyslightprimary-fixed-dim": "var(--uusj-themesyslightprimary-fixed-dim)",
        "uusj-themesyslightscrim": "var(--uusj-themesyslightscrim)",
        "uusj-themesyslightsecondary": "var(--uusj-themesyslightsecondary)",
        "uusj-themesyslightsecondary-container": "var(--uusj-themesyslightsecondary-container)",
        "uusj-themesyslightsecondary-fixed": "var(--uusj-themesyslightsecondary-fixed)",
        "uusj-themesyslightsecondary-fixed-dim": "var(--uusj-themesyslightsecondary-fixed-dim)",
        "uusj-themesyslightshadow": "var(--uusj-themesyslightshadow)",
        "uusj-themesyslightsurface": "var(--uusj-themesyslightsurface)",
        "uusj-themesyslightsurface-bright": "var(--uusj-themesyslightsurface-bright)",
        "uusj-themesyslightsurface-container": "var(--uusj-themesyslightsurface-container)",
        "uusj-themesyslightsurface-container-high":
          "var(--uusj-themesyslightsurface-container-high)",
        "uusj-themesyslightsurface-container-highest":
          "var(--uusj-themesyslightsurface-container-highest)",
        "uusj-themesyslightsurface-container-low": "var(--uusj-themesyslightsurface-container-low)",
        "uusj-themesyslightsurface-container-lowest":
          "var(--uusj-themesyslightsurface-container-lowest)",
        "uusj-themesyslightsurface-dim": "var(--uusj-themesyslightsurface-dim)",
        "uusj-themesyslightsurface-tint": "var(--uusj-themesyslightsurface-tint)",
        "uusj-themesyslightsurface-variant": "var(--uusj-themesyslightsurface-variant)",
        "uusj-themesyslighttertiary": "var(--uusj-themesyslighttertiary)",
        "uusj-themesyslighttertiary-container": "var(--uusj-themesyslighttertiary-container)",
        "uusj-themesyslighttertiary-fixed": "var(--uusj-themesyslighttertiary-fixed)",
        "uusj-themesyslighttertiary-fixed-dim": "var(--uusj-themesyslighttertiary-fixed-dim)",
        "uusj-themewhite": "var(--uusj-themewhite)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "uusj-theme-body-large": "var(--uusj-theme-body-large-font-family)",
        "uusj-theme-body-medium": "var(--uusj-theme-body-medium-font-family)",
        "uusj-theme-body-small": "var(--uusj-theme-body-small-font-family)",
        "uusj-theme-display-large": "var(--uusj-theme-display-large-font-family)",
        "uusj-theme-display-medium": "var(--uusj-theme-display-medium-font-family)",
        "uusj-theme-display-small": "var(--uusj-theme-display-small-font-family)",
        "uusj-theme-headline-large": "var(--uusj-theme-headline-large-font-family)",
        "uusj-theme-headline-medium": "var(--uusj-theme-headline-medium-font-family)",
        "uusj-theme-headline-small": "var(--uusj-theme-headline-small-font-family)",
        "uusj-theme-label-large": "var(--uusj-theme-label-large-font-family)",
        "uusj-theme-label-medium": "var(--uusj-theme-label-medium-font-family)",
        "uusj-theme-label-small": "var(--uusj-theme-label-small-font-family)",
        "uusj-theme-title-large": "var(--uusj-theme-title-large-font-family)",
        "uusj-theme-title-medium": "var(--uusj-theme-title-medium-font-family)",
        "uusj-theme-title-small": "var(--uusj-theme-title-small-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
