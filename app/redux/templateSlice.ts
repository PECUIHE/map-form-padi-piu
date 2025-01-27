'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Template, TemplatesState } from '../types/template';

const initialState: TemplatesState = {
  templates: [],
  loading: false,
  error: null,
};

// Fetch templates from the API 
export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const url = "https://wh153ef199994821ab9e.free.beeceptor.com/template";
  const response = await axios.get(url);
  // Ensure the data contains category and dateCreated fields
  return response.data.map((template: Template) => ({
    id: template.id,
    name: template.name,
    description: template.description,
    category: template.category || 'Uncategorized', // Default category if missing
    created: template.created || new Date().toISOString(), // Default to current date if missing
  }));
});

const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.loading = false;
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch templates';
      });
  },
});

export default templatesSlice.reducer;
