import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
// import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import StoryPagePreview from "./preview-templates/StoryPagePreview";

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('stories', StoryPagePreview)
// CMS.registerPreviewTemplate('gallery', GalleryPagePreview)
