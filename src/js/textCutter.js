export default function textCutter(review) {
  const truncated = review.slice(0, 205);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpace) + "...";
}
