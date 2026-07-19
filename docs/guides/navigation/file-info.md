---
sidebar_position: 11
---

# File info

OpenComic can read and display file metadata.

![File info](/img/docs/navigation/file-info.png)

### 📄 `ComicInfo.xml`


| Field | In OpenComic |
|-------|-------------|
| `title` | Title |
| `Series` | Series |
| `LocalizedSeries` | Localized series |
| `SeriesGroup` | Series group |
| `Pages/Page` (`@_Type` = `FrontCover` or `InnerCover`, `@_Image` index) | Poster |
| `Number` | Book number |
| `Count` | Book total |
| `Volume` | Volume |
| `PageCount` | Pages |
| `StoryArc` | Story arc |
| `StoryArcNumber` | Story arc number |
| `AlternateSeries` | Alternate series |
| `AlternateNumber` | Alternate book number |
| `AlternateCount` | Alternate book total |
| `Manga` | Manga (`true` / `false` / `null`) |
| `Writer` | Author |
| `Writer` | Writer |
| `Penciller` | Penciller |
| `Inker` | Inker |
| `Colorist` | Colorist |
| `Letterer` | Letterer |
| `CoverArtist` | Cover artist |
| `Editor` | Editor |
| `Translator` | Translator |
| `Publisher` | Publisher |
| `Imprint` | Imprint |
| `AgeRating` | Age rating |
| `Genre` | Genre |
| `Tags` | Tags |
| `Web` | Website or external link |
| `Summary` | Description |
| `Characters` | Characters |
| `Teams` | Teams |
| `Locations` | Locations |
| `MainCharacterOrTeam` | Main character or team |
| `Year`, `Month` and `Day` | Release date (also used for year, month and day fields) |
| `LanguageISO` | Language |
| `Format` | Format |
| `ScanInformation` | Scan information |
| `Notes` | Notes |
| `GTIN` | GTIN |

---

### 📄 `MetronInfo.xml` _Nightly_

| Field | In OpenComic |
|-------|-------------|
| `Stories/Story` (joined with ` - `) | Title |
| `Series/Name` | Series |
| `Number` | Book number |
| `Series/VolumeCount` | Book total |
| `Series/Volume` or `MangaVolume` | Volume |
| `PageCount` | Pages |
| `Arcs/Arc/Name` | Story arc |
| `Arcs/Arc/Number` | Story arc number |
| `Credits/Credit` with role `Writer` | Author |
| `Publisher/Name`, `Publisher/Imprint`, and `Credits/Credit` roles | Contributor |
| `AgeRating` | Age rating |
| `Genres/Genre` | Genre |
| `Tags/Tag` | Tags |
| `URLs/URL` | Website or external link |
| `Summary` | Description |
| `Characters/Character` | Characters |
| `Teams/Team` | Teams |
| `Locations/Location` | Locations |
| `StoreDate` | Release date |
| `StoreDate` (`YYYY-MM-DD` parsed) | Year, month and day |
| `Series/@lang` | Language |
| `Series/Format` | Format |
| `Notes` | Notes |
| `GTIN/ISBN` and/or `GTIN/UPC` (joined with `, `) | GTIN |


---

### 📘 PDF

| Field | In OpenComic |
|-------|-------------|
| `dc:title` | Title |
| `calibre:series` | Series |
| `calibreSI:series_index` | Book number |
| `dc:creator` | Author |
| `dc:publisher` | Publisher |
| `dc:subject` | Subject |
| `dc:description` (fallback: `dc:subject`) | Description |
| `dc:language` | Language |
| `xmp:identifier:uri` | Web |
| `xmp:identifier` | Identifier |
| `xmp:metadatadate` | Release date |
| `modifydate` | Modified date |
| `creatortool` | Creator tool |
| `isbn` | ISBN |

---

### 📚 EPUB

| Field | In OpenComic |
|-------|-------------|
| `dc:title` | Title | 
| `calibre:series` | Series |
| `calibre:series_index` | Book number |
| `dc:creator` | Author |
| `dc:publisher` | Publisher |
| `dc:contributor` | Contributor |
| `dc:subject` | Subject |
| `dc:genre` | Genre |
| `dc:description` | Description |
| `se:long-description` | Long description |
| `dc:rights` | Rights |
| `dc:language` | Language |
| `web` | Web |
| `dc:identifier` | Identifier |
| `dc:source` | Source |
| `releaseDate` | Release date |
| `modifiedDate` | Modified date |
| `isbn` | ISBN |