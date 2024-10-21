@echo off
setlocal enabledelayedexpansion

set modules=blog blogCategory blogFeedback contact education experience project skill projectCategory profile

for %%m in (%modules%) do (
    mkdir src\app\modules\%%m
    cd src\app\modules\%%m
    echo. > %%m.controller.ts
    echo. > %%m.interface.ts
    echo. > %%m.model.ts
    echo. > %%m.route.ts
    echo. > %%m.service.ts
    echo. > %%m.validation.ts
    cd ..\..\..\..\
)

echo Modules created successfully.