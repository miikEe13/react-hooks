import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import { HooksApp } from './HooksApp';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <div>
          {/* Menú de navegación */}
          <nav>
              <ul>
                  <li><Link to="/">HooksApp</Link></li>
                  <li><Link to="/counter-app">CounterApp</Link></li>
                  <li><Link to="/counter-with-custom-hook">CounterWithCustomHook</Link></li>
                  <li><Link to="/simple-form">SimpleForm</Link></li>
                  <li><Link to="/form-with-custom-hook">FormWithCustomHook</Link></li>
                  <li><Link to="/multiple-custom-hooks">MultipleCustomHooks</Link></li>
                  <li><Link to="/focus-screen">FocusScreen</Link></li>
                  <li><Link to="/layout">Layout</Link></li>
                  <li><Link to="/memorize">Memorize</Link></li>
                  <li><Link to="/memo-hook">MemoHook</Link></li>
                  <li><Link to="/callback-hook">CallbackHook</Link></li>
                  <li><Link to="/padre">Padre</Link></li>
              </ul>
          </nav>

          {/* Configuración de rutas */}
          <Routes>
              <Route path="/" element={<HooksApp />} />
              <Route path="/counter-app" element={<CounterApp />} />
              <Route path="/counter-with-custom-hook" element={<CounterWithCustomHook />} />
              <Route path="/simple-form" element={<SimpleForm />} />
              <Route path="/form-with-custom-hook" element={<FormWithCustomHook />} />
              <Route path="/multiple-custom-hooks" element={<MultipleCustomHooks />} />
              <Route path="/focus-screen" element={<FocusScreen />} />
              <Route path="/layout" element={<Layout />} />
              <Route path="/memorize" element={<Memorize />} />
              <Route path="/memo-hook" element={<MemoHook />} />
              <Route path="/callback-hook" element={<CallbackHook />} />
              <Route path="/padre" element={<Padre />} />
          </Routes>
      </div>
  </Router>
)
