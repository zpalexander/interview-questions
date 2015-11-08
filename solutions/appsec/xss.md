# Cross-Site Scripting

### What does XSS stand for?
Cross-Site Scripting.

### How does it work?
XSS is an attack vector that takes advantage of dynamically generated Web pages. In an XSS attack, a web application is sent with a malicious script that runs when it is read by an unsuspecting user's browser or by an application that has not protected itself against cross-site scripting. This malicious script is saved into the application via an unsanitized input vector.

### What is the potential impact?
XSS attacks can compromise web application end users sessions or machines. XSS attacks can also be targeted at admin users, which can lead to privilege escalation within the web app that increases the potential for server compromise.

### How can it be mitigated?
Sanitize inputs and sanitize/filter text to be displayed.
