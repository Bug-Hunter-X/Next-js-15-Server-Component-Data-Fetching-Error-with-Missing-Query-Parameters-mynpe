In Next.js 15, an uncommon bug can occur when using the `app` directory and server components with specific data fetching patterns.  The issue arises when a server component fetches data that depends on the query parameters from the client component, but the data fetching logic within the server component doesn't correctly handle cases where the query parameters are undefined or empty. This can lead to unexpected behavior, such as server errors or inconsistent data rendering.

For example:
```javascript
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
  // Simulate an API call
  const message = params?.id ? `Data for ID ${params.id}` : 'Default data';
  return { message };
}

export default async function handler(req, res) {
  const params = req.query;
  const data = await getData(params);
  res.status(200).json(data);
}
```
If there is no `id` parameter in the URL (e.g., `/`), `params.id` would be undefined, which may result in an error or unexpected output.  This is because server component data fetching is strictly based on the request parameters. 