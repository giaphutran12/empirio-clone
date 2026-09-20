/** Remove citation-only asides, including those in previously saved replies.
 * Keep substantive parentheses such as figures, qualifications, and units.
 */
export function cleanAnalystCopy(
  text: string,
  referenceLabels: string[],
): string {
  return text
    .replace(/\(([^()]*)\)/g, (aside, content: string) => {
      let remainder = content.toLowerCase();
      for (const label of [...referenceLabels].sort(
        (a, b) => b.length - a.length,
      )) {
        remainder = remainder.replaceAll(label.toLowerCase(), "");
      }
      remainder = remainder
        .replace(
          /\b(labels?|evidence|interpretation|unknown|fact|assessment|and)\b/g,
          "",
        )
        .replace(/[\s,:;/'"“”‘’]/g, "");
      return remainder ? aside : "";
    })
    .replace(/[ \t]+([.,;:!?])/g, "$1")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}
