# Passwd Genie
## What is this?
A password generator and stregth checker
## How to use?
- Clone the project\
 ```git clone https://github.com/ryguigas0/passwd-genie.git```
- Install dependencies on the project folder\
  ```cd psswd-genie``` then ```npm i``` or ```npm install```
- Build for your operating system
  ```npm run install-linux```, ```npm run install-win``` or ```npm run install-mac```
  - If your system isn't 64 bit architecture, then run\
```electron-packager ./ psswd-genie --platform=YOUR_OS --arch=YOUR_ARCH --ignore=/gitignore|!node_modules/**/*|README/```
  - Replace YOUR_OS with ```linux```, ```win32``` (for windows users) or ```darwin``` (for macOS users) and YOUR_ARCH with ```ia32``` (32 bit), ```x64``` (64 bit), ```armv7l``` (32 bit arm cpu), ```arm64``` (64 bit arm cpu), ```mips64el``` (64 bit mips)
