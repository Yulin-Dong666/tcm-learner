export default {
      name: 'post',
      title: 'Post',
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
    "name": "module",
    "title": "Module",
    "type": "string",
    "options": {
      "list": [
        "pulse",
        "acupuncture",
        "meridians",
        "inspection"
      ]
    }
  },
  {
    "name": "excerpt_zh",
    "title": "Excerpt (ZH)",
    "type": "text"
  },
  {
    "name": "excerpt_en",
    "title": "Excerpt (EN)",
    "type": "text"
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
  },
  {
    "name": "cover",
    "title": "Cover",
    "type": "image"
  },
  {
    "name": "seo",
    "title": "SEO",
    "type": "object",
    "fields": [
      {
        "name": "description_zh",
        "title": "Description (ZH)",
        "type": "string"
      },
      {
        "name": "description_en",
        "title": "Description (EN)",
        "type": "string"
      }
    ]
  }
]
    }
