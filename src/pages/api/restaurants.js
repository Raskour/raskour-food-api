import restaurants from '../../../mock-restaurants';

export default function handler(req, res) {
  res.json(restaurants);
}
