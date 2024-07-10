async function http(endpoint, options = {}) {
    const { method = 'GET', data, cookie, headers } = options;
  
    const fetchOptions = {
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    };
  
    if (cookie) {
      fetchOptions.headers['Cookie'] = cookie;
    }
  
    try {
      const response = await fetch(endpoint, fetchOptions);
  
      if (!response.ok) {
        return Promise.reject(
          `HTTP Error: ${JSON.stringify(response.headers)} ${response.status} ${response.statusText} ${await response.text()} for endpoint: ${endpoint}`
        );
      }
  
      let responseBody;
      try {
        responseBody = await response.json();
      } catch (error) {
        responseBody = await response.text();
      }
  
      const responseHeaders = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });
  
      return { body: responseBody, headers: responseHeaders };
    } catch (error) {
      return Promise.reject(error);
    }
  }
  