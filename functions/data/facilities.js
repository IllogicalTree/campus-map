export const onRequest = async context => {
  const facilities = await context.env.campus_map.get('facilities');
  return new Response(facilities, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}