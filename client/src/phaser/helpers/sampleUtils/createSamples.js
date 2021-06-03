export default function createSamples(sampleObjs, scene) {
  const numOfSamples = sampleObjs.length;
    // Create samples
    const samples = scene.physics.add.staticGroup({
      key: 'samples',
      frameQuantity: numOfSamples,
      immovable: true
    });
    // Distribute samples over map
    samples.getChildren().forEach((sample, i) => {
      let x = sampleObjs[i].x;
      let y = sampleObjs[i].y;
      sample.setScale(0.8);
      sample.setPosition(x, y);
    });

    return samples;
};