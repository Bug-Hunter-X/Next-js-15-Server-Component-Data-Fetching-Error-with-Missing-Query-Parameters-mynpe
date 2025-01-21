// pages/index.js (Client Component)
function Page({ data }) {
  return (
    <div>
      {data ? <p>Data: {data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Page;

// pages/api/data.js (Server Component)
function getData(params) {
  //Robust error handling and input validation
  const id = params?.id || 'default';
  const message = `Data for ID ${id}`;
  return { message };
}

export default async function handler(req, res) {
  const params = req.query;
  const data = await getData(params);
  res.status(200).json(data);
}
//This solution uses a default value if params.id is missing, preventing errors.