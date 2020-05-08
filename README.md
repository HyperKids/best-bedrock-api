# Brown Esports Bedrock UUID to Javascript API
## Contributing
This project's official formatter is **Prettier**. This project's official package manager is **Yarn**.
To run this project, clone the repository, execute `yarn`, rename the `.env.example` to `.env` and add your [XAPI key](xapi.com), then `node index.js`.
## Notes
- This project is meant for use with GeyserMC, which automatically formats Bedrock names preceeding with an asterisk (*). That's what is used to determine whether a user is Bedrock or not. If a username without an asterisk is pushed, it passes the username through to the official Minecraft API to fetch UUIDs.
## Todo
- Add a cache since XAPI limits API calls per hour and gamertags don't change often. Pull requests appreciated.
