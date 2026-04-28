---
sidebar_position: 3
---

# Export and Restore

## Exporting Data

OpenComic does **not currently support exporting data directly from within the application**.

However, all user data (library, progress, settings, etc.) is stored locally on your system. You can manually export this data by copying the storage files.

:::warning
This method only copies the raw data files. It does not perform validation or transformation, and compatibility between different versions is not guaranteed.
:::

### How to Export

1. Locate the OpenComic storage directory (see below).
2. Copy the entire folder to a safe location (external drive, cloud storage, etc.).

---

## Automatic Backups

OpenComic automatically creates **backups of your data** and compresses them to 7z.

- When the application starts
- When the application closes

These backups can be used to restore your data in case of corruption or accidental loss.

:::tip
Backups are stored alongside the main data files and can be manually restored.
:::

---

## Restoring Data

To restore your data:

1. Close OpenComic completely.
2. Replace the current storage files with:
   - A previously exported copy, or
   - One of the automatic backup files
3. Reopen OpenComic.

---

## Storage Locations

Below are common locations where OpenComic stores its data:

### Linux
```
~/.config/OpenComic/storage/
```

### Windows
```
%APPDATA%\OpenComic\storage\
```

### macOS
```
~/Library/Application Support/OpenComic/storage/
````

:::info
These paths may vary slightly depending on your system configuration.
:::

---

## Accessing the Storage Path from the App

You can also retrieve the storage location directly from the OpenComic console:

1. Open the developer console inside OpenComic.
2. Run the following command:

```js
storagePath
````

This will return the full path to the directory where your data is stored.

---

## Notes

* Always make backups before modifying or replacing data files.
* Avoid restoring data while the application is running.
* Backup files are the safest way to recover recent data without manual exports.