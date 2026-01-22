import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Inisialisasi theme sebelum render
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  let theme = 'light'

  if (savedTheme) {
    theme = savedTheme
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
  }

  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

initTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="font-onest">
      <App />
    </div>
  </React.StrictMode>
)
