#!/bin/bash

mkdir video-conference
cd video-conference

# public 目录
mkdir public
cd public
touch index.html
touch favicon.ico
touch manifest.json
cd ..

# src 目录
mkdir src
cd src
touch index.tsx
touch App.tsx
mkdir components
touch components/VideoPlayer.tsx
touch components/ControlBar.tsx
touch components/UserList.tsx
mkdir models
touch models/User.ts
touch models/Room.ts
touch models/index.ts
mkdir stores
touch stores/UserStore.ts
touch stores/RoomStore.ts
touch stores/index.ts
mkdir services
touch services/ApiService.ts
touch services/AuthService.ts
touch services/index.ts
mkdir styles
touch styles/index.less
mkdir utils
touch utils/request.ts
touch utils/auth.ts
touch utils/index.ts
cd ..

# tests 目录
mkdir tests
cd tests
touch user.test.ts
touch room.test.ts
touch setupTests.ts
cd ..

# 其他文件
touch .gitignore
touch package.json
touch tsconfig.json
touch README.md
