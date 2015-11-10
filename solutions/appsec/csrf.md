# Cross-Site Request Forgery

### What security flaw exists in this system?
This is a classic example of a cross-site request forgery (csrf) vulnerability.

### How to exploit
An attacker could phish an unsuspecting online banking user to click on a maliciously crafted link such as: `https://www.example.com/transfer?amount=1000&destination=maliciousUser`. This link could be obfuscated through a link shortening service, hidden as a DOM element, etc. If the victim's authentication cookie is still active, the link will execute a successful transaction of $1000 to maliciousUser, an account presumably owned by the attacker.

### How could this flaw be mitigated?
When the user is authenticated by the app and provided with a cookie, set a value in the cookie that contains a cryptographically secure pseudo-random token that the app signs and stores a copy of.
Include an extra hidden field in the transfer funds form that accepts that cookie's token as a parameter.
Before executing any transfer logic, the app should check to see whether the hidden field's value matches the token generated for the user when she signed in.
That way if an attacker tricks a user into clicking a link to the transfer endpoint with malicious query parameters, the app will not recieve an authentic token and will not run the transfer.
