path: blob/master
source: src/editor.ts

# Usage
This package supplies a single class, `RichTextEditor`, which is a custom build of the [CKEditor](https://ckeditor.com/ckeditor-5)'s classic editor. It extends from the [`ClassicEditor`](https://ckeditor.com/docs/ckeditor5/latest/api/module_editor-classic_classiceditor-ClassicEditor.html) class provided by this project, so its usage is basically the same.

In your HTML page, add an element that **SAB Rich Text Editor** should make editable:

```html
<textarea id="editor"></textarea>
```

Then call the `RichTextEditor.create()` method:

```html
<script>
  RichTextEditor
    .create(document.querySelector('#editor'))
    .catch(error => console.error(error));
</script>
```

This code snippet will turn the `<textarea id="editor">` into a rich text editor.

## Features
- Essentials: `Clipboard`, `Enter`, `ShiftEnter`, `Typing` and `Undo`.
- [Autoformatting](https://ckeditor.com/docs/ckeditor5/latest/features/autoformat.html)
- [Basic text styles](https://ckeditor.com/docs/ckeditor5/latest/features/basic-styles.html): `Bold`, `Italic`, `Strikethrough` and `Underline`.
- [Headings](https://ckeditor.com/docs/ckeditor5/latest/features/headings.html)
- [Images](https://ckeditor.com/docs/ckeditor5/latest/features/image.html): `Image`, `ImageCaption`, `ImageStyle` and `ImageToolbar`.
- [Media embed](https://ckeditor.com/docs/ckeditor5/latest/features/media-embed.html): `MediaEmbed` and `MediaEmbedToolbar`.
- [Paste from Office](https://ckeditor.com/docs/ckeditor5/latest/features/paste-from-word.html)
- [Tables](https://ckeditor.com/docs/ckeditor5/latest/features/table.html): `Table` and `TableToolbar`.
- [Text alignment](https://ckeditor.com/docs/ckeditor5/latest/features/text-alignment.html)
- Other editing features: `Link`, `List` and `Paragraph`.

## Localization
By default, the editor will display in **French**. This is the language built into the `editor.js` file.

In order to change the language of the editor UI, you need to load additional language file(s).
These files are located in the `build/i18n` folder of this package.

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@sab-international/rich-text-editor/build/i18n/[lang].js"></script>

<!-- UNPKG -->
<script src="https://unpkg.com/@sab-international/rich-text-editor/build/i18n/[lang].js"></script>
```

For example:

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@sab-international/rich-text-editor/build/editor.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@sab-international/rich-text-editor/build/i18n/en.js"></script>

<!-- UNPKG -->
<script src="https://unpkg.com/@sab-international/rich-text-editor/build/editor.js"></script>
<script src="https://unpkg.com/@sab-international/rich-text-editor/build/i18n/en.js"></script>
```

Next, you can configure the editor to use one of the loaded language:

```html
<script>
  RichTextEditor
    .create(document.querySelector('#editor'), {language: 'en'})
    .catch(error => console.error(error));
</script>
```

## Advanced usage
For other uses and detailed instructions, you should look at the [official CKEditor documentation](https://ckeditor.com/docs/ckeditor5/latest).
