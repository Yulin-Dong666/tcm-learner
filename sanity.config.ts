import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas'

export default defineConfig({
  name: 'tcm-learner',
  title: 'TCM Learner',
  projectId: 'yourProjectId', // set via env later
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
})
