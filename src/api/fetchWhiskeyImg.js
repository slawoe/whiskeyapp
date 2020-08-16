export default async function fetchWhiskeyImg() {
  const whiskeyList = [];
  let i = 1;
  while (i < 10) {
    console.log(i);
    const response = await fetch(
      `https://evening-citadel-85778.herokuapp.com:443/whiskey/?page=${i}`
    );
    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();
    console.log(data.results.comparables);
    whiskeyListImage.push(...data.results.comparables);
    i++;
  }
  console.log(whiskeyList);
  const whiskeysImgs = whiskeyList.map((whiskeyImg) => ({
    list_img_url: whiskeyImg.comparables.list_img_url,
  }));
  return whiskeysImgs;
}
