import restaurants from '../../../../mock-restaurants';

export default function handler(req, res) {
  const { slug } = req.query;

  const resId = slug[0];

  const restaurant = restaurants.find((res) => res.id === resId);

  res.json(restaurant);
}
