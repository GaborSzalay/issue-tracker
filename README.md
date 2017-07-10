# issue-tracker
Issue tracker application

# PREREQUISITES
The task described below is to be carried out using an HTML + CSS + JavaScript technology stack. The application can be implemented in any JavaScript framework, though Angular is preferable.NPM is the preferred build tool, all libraries and technologies that are available on http://npmjs.com are accepted. Incase NPM is not used, all external resources in the index.html must be referenced from a CDN (e.g.http://cdnjs.com).

# THE ASSIGNMENT

Implement an issue tracking web application that meets the following criteria:

1. New issues can be created, existing ones can be edited
2. Issues can be multi-level, meaning a topmost issue can have sub-issues
3. Any status changes of an issue are broadcasted to all connected clients in real-time
4. The application has a flat/minimal user interface

# IMPLEMENTATION GUIDELINES
The application should be asynchronous when it comes to communicating with the backend server. No persistence is needed, but all data should be kept in-memory in a consistent manner.
When NodeJS project structure is used, setup start/build/test scripts. Provide a minimal, runnable NodeJS or JVM based http server.