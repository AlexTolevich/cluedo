import React from 'react';
import { createRoot } from 'react-dom/client';

const title = 'CLUEDO';

const root = createRoot(document.getElementById('app'));

root.render(<h1>{title}</h1>);
