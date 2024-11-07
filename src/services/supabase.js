import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://dgjwqighypsmuccifpjm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnandxaWdoeXBzbXVjY2lmcGptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxODAxMjcsImV4cCI6MjA0NDc1NjEyN30.7cE0CQuWvAg6dud7cKpz5-M2NHZ7gHsFDz5-rs8nhU0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;