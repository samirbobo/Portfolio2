import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio2/", // استبدل <اسم-المستودع> باسم مستودع GitHub الخاص بك
  plugins: [react()],
});
