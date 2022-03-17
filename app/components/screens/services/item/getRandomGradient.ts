const gradients = [
  ['#FF4270', '#FE0040'],
  ['#433CA2', '#4A73C0'],
  ['#EA4OEC', '#ED27A2'],
];

export const getRandomGradient = () => {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  return gradients[randomIndex];
};
