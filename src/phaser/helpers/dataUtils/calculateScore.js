export default function calculateScore(data) {
  const samples = data.inventory.length;
  const kills = data.kills;
  const score = (samples * 100) + (kills * 500);
  return {samples, kills, score}
}