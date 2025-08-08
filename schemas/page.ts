export default {
      name: 'page',
      title: 'Page',
      type: 'document',
      fields: [
  {
    "name": "title_zh",
    "title": "Title (ZH)",
    "type": "string"
  },
  {
    "name": "title_en",
    "title": "Title (EN)",
    "type": "string"
  },
  {
    "name": "slug",
    "title": "Slug",
    "type": "slug",
    "options": {
      "source": "title_en",
      "maxLength": 96
    }
  },
  {
    "name": "content_zh",
    "title": "Content (ZH)",
    "type": "array",
    "of": [
      {
        "type": "block"
      }
    ]
  },
  {
    "name": "content_en",
    "title": "Content (EN)",
    "type": "array",
    "of": [
      {
        "type": "block"
      }
    ]
  }
]
    }
