import sceneEvents from "../../utils/SceneEvents";

export default function calculateScore(data) {
  const health = Math.max(0, data.health); // remaining health 
  const samples = data.inventory.length;
  const kills = data.kills;
  const antidote = data.antidote ? 10000 : 0; // antidote bonus addition to score
  const score = (samples * 100) + (kills * 500) + (health * 200) + antidote;

  // emit final score to react GameStats component
  sceneEvents.emit('final-score', score);

  return {samples, kills, score, health, antidote}
}