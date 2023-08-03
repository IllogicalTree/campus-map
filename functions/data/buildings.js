import { buildings } from '../../data';

export const onRequest = () => {
  return new Response(JSON.stringify(buildings, null, 2), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}