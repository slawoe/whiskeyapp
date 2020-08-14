export default async function fetchWhiskeys() {
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
    console.log(data.results);
    whiskeyList.push(...data.results);
    i++;
  }
  console.log(whiskeyList);
  const whiskeys = whiskeyList.map((whiskey) => ({
    title: whiskey.title,
    description: whiskey.description,
    id: whiskey.id,
    price: whiskey.price,
    rating: whiskey.rating,
    region: whiskey.region,
  }));
  return whiskeys;
}
