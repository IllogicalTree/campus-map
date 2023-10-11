import { parse } from 'csv-parse/browser/esm';

export const onRequest = async context => {
    
    if (context.request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }
    
    const teachingSpaceFunctions = await parseCsvAsJson(context.request);
    const roomsData = await context.env.campus_map.get('rooms');
    const rooms = JSON.parse(roomsData);
    teachingSpaceFunctions.forEach(space => {
      const room = rooms.find(room => room.roomId === space.Room);
      room ? room.data = space : null;
  })
  
  await context.env.campus_map.put('rooms', JSON.stringify(rooms));
  return new Response(`${teachingSpaceFunctions.length} rows uploaded`);
}

async function parseCsvAsJson(request) {
   
    const formData = await request.formData();
    const csvStream = formData.get('file')?.stream()

    if (!csvStream) {
        return new Response('Bad request', { status: 400 });
    }
  
    const records = [];
    const parser = parse({})

    parser.on('readable', function(){
      let record;
      while ((record = parser.read()) !== null) {
        records.push(record);
      }
    });
  
    const decoder = new TextDecoder();
    for await (const chunk of csvStream) {
      const ready = parser.write(decoder.decode(chunk));
      if (!ready){
        parser.once('drain', () => {});
      }
    }
    parser.end()

    const indexes = records.shift();
    let teachingSpaceFunctions = [];

    records.forEach(record => {
        const teachingSpaceFunction = Object.fromEntries(record.map((value, index) => [indexes[index], value]));
        delete teachingSpaceFunction['Modified'];
        delete teachingSpaceFunction['Modified By'];
        delete teachingSpaceFunction['Task Assigned to'];
        teachingSpaceFunctions.push(teachingSpaceFunction);
    })

    return teachingSpaceFunctions;
  }