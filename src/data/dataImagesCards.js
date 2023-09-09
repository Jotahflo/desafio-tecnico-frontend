const getDataImagesCards = async () => {
  let result = [];

  try {
    const response = await fetch(`https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20`);
    if (!response.ok) {
      throw new Error(`This is an HTTP error: The status is ${response.status}`);
    }
    let data = await response.json();
    result = data;
  } catch (err) {
    console.log(err);
    result = null;
  }

  if (result !== null) {
    let onlyImages = [];
    let only12Images = [];
    let randomImagesRepeat = [];
    result.entries.forEach((images) => {
      onlyImages.push({ uuid: images.fields.image.uuid, active: false, url: images.fields.image.url });
    });
    only12Images = onlyImages.sort(() => Math.random() - 0.5).slice(0, 12);
    randomImagesRepeat = [...only12Images, ...only12Images].sort(() => Math.random() - 0.5);
    result = randomImagesRepeat;
  }

  return result;
};

export default getDataImagesCards;
