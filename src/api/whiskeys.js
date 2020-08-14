export default async function fetchWhiskeys() {
  const response = await fetch(
    "https://evening-citadel-85778.herokuapp.com:443/whiskey/"
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const data = await response.json();
  console.log(data);
  const riskyWhiskey = data.results.map((whiskey) => ({
    title: whiskey.title,
    description: whiskey.description,
    id: whiskey.id,
    img_url: whiskey.img_url,
    price: whiskey.price,
    rating: whiskey.rating,
    region: whiskey.region,
  }));
  return riskyWhiskey;
}
