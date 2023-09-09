const getDataImagesCards = async () => {
  let result = [];

  await fetch("https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20")
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      result = data;
    })
    .catch((err) => {
      console.log(err);
      result = null;
    });

  if (result !== null) {
    let onlyImages = [];
    let only12Images = [];
    let randomImagesRepeat = [];
    result.entries.map((images, index) => {
      onlyImages.push({ uuid: images.fields.image.uuid, active: false, url: images.fields.image.url });
    });
    console.log(onlyImages);
    onlyImages.sort(() => {
      return Math.random() - 0.5;
    });
    only12Images = onlyImages.slice(0, 12);
    randomImagesRepeat = [...only12Images, ...only12Images];
    randomImagesRepeat.sort(() => {
      return Math.random() - 0.5;
    });
    result = randomImagesRepeat;
  }

  return result;
};

export default getDataImagesCards;
