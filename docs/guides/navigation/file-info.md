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
| `FrontCover` or `InnerCover` | Poster |
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
| `Year`, `Month` and `Day` | Release year |
| `LanguageISO` | Language |
| `Format` | Format |
| `ScanInformation` | Scan information |
| `Notes` | Notes |
| `GTIN` | GTIN |

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
| `dc:description` | Description |
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
| `dc:description` or `se:long-description` | Description |
| `dc:rights` | Rights |
| `dc:language` | Language |
| `web` | Web |
| `dc:identifier` | Identifier |
| `dc:source` | Source |
| `releaseDate` | Release date |
| `modifiedDate` | Modified date |
| `isbn` | ISBN |