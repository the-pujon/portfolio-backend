@echo off
setlocal enabledelayedexpansion

set modules=blog blogCategory blogFeedback contact education experience project skill projectCategory profile certificate

for %%m in (%modules%) do (
    if not exist src\app\modules\%%m (
        mkdir src\app\modules\%%m
        cd src\app\modules\%%m
        echo. > %%m.controller.ts
        echo. > %%m.interface.ts
        echo. > %%m.model.ts
        echo. > %%m.route.ts
        echo. > %%m.service.ts
        echo. > %%m.validation.ts
        cd ..\..\..\..\
    ) else (
        echo Directory src\app\modules\%%m already exists, skipping creation.
    )
)

echo Modules created successfully.