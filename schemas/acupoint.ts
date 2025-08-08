export default {
      name: 'acupoint',
      title: 'Acupoint',
      type: 'document',
      fields: [
  {
    "name": "code",
    "title": "Code",
    "type": "string"
  },
  {
    "name": "name_zh",
    "title": "Name (ZH)",
    "type": "string"
  },
  {
    "name": "name_en",
    "title": "Name (EN)",
    "type": "string"
  },
  {
    "name": "meridian",
    "title": "Meridian",
    "type": "reference",
    "to": [
      {
        "type": "meridian"
      }
    ]
  },
  {
    "name": "location_zh",
    "title": "Location (ZH)",
    "type": "text"
  },
  {
    "name": "location_en",
    "title": "Location (EN)",
    "type": "text"
  },
  {
    "name": "indications_zh",
    "title": "Indications (ZH)",
    "type": "array",
    "of": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "indications_en",
    "title": "Indications (EN)",
    "type": "array",
    "of": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "combos_zh",
    "title": "Combos (ZH)",
    "type": "array",
    "of": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "combos_en",
    "title": "Combos (EN)",
    "type": "array",
    "of": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "contra_zh",
    "title": "Contraindications (ZH)",
    "type": "array",
    "of": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "contra_en",
    "title": "Contraindications (EN)",
    "type": "array",
    "of": [
      {
        "type": "string"
      }
    ]
  }
]
    }
