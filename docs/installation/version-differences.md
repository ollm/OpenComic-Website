---
sidebar_position: 2
---

# Version differences

Some versions of **OpenComic** have differences and limitations between them.

## Windows

### Portable version differences

**OpenComic** offers different portable versions in **Windows**, these have a difference how they store configuration settings.

### portable.exe

This version behaves similarly to the installable version.

It stores configuration files in the default user directory: `%appdata%/OpenComic`.

### folder.portable.exe

This version stores its configuration **within the folder it's located in**, making it truly portable.

Settings are saved to: `opencomic/storage`

### folder.portable.7z

This version is the same as `folder.portable.exe` in terms of behavior and configuration storage (`opencomic/storage`).

However, it comes **pre-extracted**. Unlike `portable.exe`, it does not extract files at launch—everything is already in place.

:::note
For true portability (e.g., using OpenComic from a USB drive), it's recommended to use `folder.portable.exe` or `folder.portable.7z`.
:::

----

## macOS

### macOS Store

Due to Apple's [App sandbox](https://developer.apple.com/documentation/security/app-sandbox) restrictions, the app has limited access to system resources and certain features are more restricted compared to the installable version.

The app can only access folders that have been manually opened through the file dialog, which imposes some limitations on its functionality.

- **Poster search in parent folders:** If the parent folder hasn’t been previously opened, any posters stored there will not be displayed.
- **Drag and drop:** Since Electron does not support [`securityScopedBookmarks`](https://github.com/electron/electron/issues/40678) for drag and drop operations, this feature is disabled.

----

## Linux

### snap 

Due also the sandbox, `snap` may have some limitations when accessing external hard drives; you may need to grant permissions manually.