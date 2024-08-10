// lib/init-middleware.js
// Utility to convert middleware to a Next.js-friendly format
export default function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) =>
        result instanceof Error ? reject(result) : resolve(result)
      );
    });
}

  
  