import ReactDOM from 'react-dom/client'
import App from './App.jsx'

kintone.events.on('app.record.index.show', () => {
  const el = kintone.app.getHeaderSpaceElement()
  ReactDOM.createRoot(el).render(<App />)
})
