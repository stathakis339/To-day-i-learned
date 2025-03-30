import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mjqirgqsxobbwaqyvuof.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qcWlyZ3FzeG9iYndhcXl2dW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNzc0NzgsImV4cCI6MjA1Njk1MzQ3OH0.ZMRikcDOJKi8lk21XUNGVmdvdiQ9wy9SFq6r4dztQ3E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
