import deepmerge from "deepmerge";
export const fallbackLng = "en-US";
export const languages = [
  fallbackLng,
  "fr",
  "en"
];

export async function getLocaleMessages(locale: string, lng = fallbackLng) {
    try {
      const userMessages = (await import(`../messages/${locale}.json`)).default;
      const defaultMessages = (await import(`../messages/${lng}.json`)).default;
      const messages = deepmerge(defaultMessages, userMessages);
      if (!messages) {
        return (await import(`../messages/${lng}.json`)).default;
      }
      return messages;
    } catch (error) {
      return (await import(`../messages/${lng}.json`)).default;
    }
  }