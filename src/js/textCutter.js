export default function textCutter(review, lengthToCut) {
  const truncated = review.slice(0, lengthToCut);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpace) + "...";
}
