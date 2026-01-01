1. What is CORS? Why does it exist?

CORS (Cross-Origin Resource Sharing) is a browser security mechanism that allows or blocks requests from one origin to another.
It exists to prevent malicious websites from accessing sensitive resources of another domain.
Servers explicitly define which origins are allowed.
This protects users while still enabling controlled cross-origin communication.

2. Explain the Same-Origin Policy

The Same-Origin Policy restricts a web page from accessing data from another origin.
An origin is defined by protocol, domain, and port.
It prevents unauthorized reading or manipulation of data.
This is a core security feature implemented by browsers.

3. What are preflight requests? When do they occur?

Preflight requests are automatic OPTIONS requests sent by the browser.
They occur before non-simple requests like PUT, DELETE, or requests with custom headers.
The browser checks if the server allows the request.
Only after approval does the actual request proceed.

4. How do you configure CORS in Express?

CORS is configured in Express using the cors middleware.
It allows defining permitted origins, methods, and headers.
This controls which clients can access the API.
It helps securely enable cross-origin requests.

5. What is CSRF? How do you prevent it?

CSRF is an attack where a user is tricked into performing unwanted actions while logged in.
The attacker exploits the user’s authenticated session.
It can be prevented using CSRF tokens and SameSite cookies.
Validating request origin also helps prevent CSRF.

6. What is XSS? How do you prevent it?

XSS allows attackers to inject malicious scripts into web pages.
These scripts can steal data or perform actions on behalf of users.
Prevention includes sanitizing user input and escaping output.
Using Content Security Policy (CSP) also reduces XSS risks.

7. What is SQL Injection? How do you prevent it?

SQL Injection happens when attackers manipulate SQL queries using user input.
It can expose or delete sensitive database data.
Using parameterized queries and prepared statements prevents it.
ORMs and input validation also help reduce the risk.

8. What are rate limiting and throttling? Why are they important?

Rate limiting restricts the number of requests in a time window.
Throttling controls the speed of incoming requests.
They protect APIs from abuse and brute-force attacks.
They also improve server stability and performance.

9. What is the principle of least privilege?

The principle of least privilege means granting only minimum required permissions.
Users or services get access strictly needed for their tasks.
It limits damage if an account is compromised.
This greatly improves overall system security.