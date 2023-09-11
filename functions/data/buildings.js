export const onRequest = async context => {
  const buildings = await context.env.campus_map.get('buildings');
  return new Response(buildings, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}
