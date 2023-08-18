import { buildings, facilities, rooms } from '../../data';

export const onRequest = async context => {
    await Promise.all([
        context.env.campus_map.put('rooms', JSON.stringify(rooms)),
        context.env.campus_map.put('buildings', JSON.stringify(buildings)),
        context.env.campus_map.put('facilities', JSON.stringify(facilities))
    ]);
    return new Response('Data initialised');
  }