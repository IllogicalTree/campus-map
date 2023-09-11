export const onRequest = async context => {
  const rooms = await context.env.campus_map.get('rooms');
  return new Response(rooms, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}