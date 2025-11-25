export function generateUniqueKey(): string {
  const randomPart = Math.random().toString(36).substring(2, 9);
  const timestampPart = Date.now().toString(36);
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChars = Array.from(
    {
      length: 4,
    },
    () => characters[Math.floor(Math.random() * characters.length)],
  ).join("");

  return `key-${timestampPart}-${randomPart}-${randomChars}`;
}
