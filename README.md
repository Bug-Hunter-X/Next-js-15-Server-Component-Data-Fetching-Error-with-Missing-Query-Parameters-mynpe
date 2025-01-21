# Next.js 15 Server Component Data Fetching Bug

This repository demonstrates a potential bug in Next.js 15's app directory when fetching data in server components and dealing with missing query parameters.  The bug arises from improperly handling undefined query parameters in the server component's data fetching logic.  This can result in server errors or incorrect data rendering.

## Bug Description
The issue occurs when a server component's data fetching relies on query parameters from the client component, but the server component doesn't gracefully handle cases where these query parameters are absent or undefined.  This leads to unpredictable behavior.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Visit `http://localhost:3000/`. You'll likely see an error or unexpected output.
5. Visit `http://localhost:3000/?id=1`.  You should see data correctly fetched. 

## Solution
The solution involves adding robust error handling and input validation to the server component's data fetching logic to handle scenarios where query parameters might be missing.  See `bugSolution.js` for a corrected implementation.

## Technologies Used
* Next.js 15
* JavaScript