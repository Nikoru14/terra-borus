import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import AuthPage from './pages/AuthPage';
import ContactForm from './pages/ContactForm';
import AdminSmspin from './pages/AdminSmspin';
import InfoTree from './pages/InfoTree';
import AddTree from './pages/AddTree';
import AboutUs from './pages/AboutUs';
import Sidebar from './adminside/Sidebar';
import TreeForm from './adminside/TreeForm';
import Home from './adminside/Home';
import Tree from './adminside/Tree';
import AdminMap from './adminside/AdminMap';
import { useAuth } from './AuthContext';

function App() {
  const { user, signIn, signOut } = useAuth(); // Use the useAuth hook to access user, signIn, and signOut
  console.log('User:', user); // Log user information

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path='/AuthPage' element={user ? <Navigate to='/' replace={true} /> : <AuthPage />} />
        <Route path='/ContactForm' element={<ContactForm />} />
        <Route path='/AdminSmspin' element={<AdminSmspin />} />
        <Route path='/InfoTree' element={<InfoTree />} />
        <Route
          path='/AddTree'
          element={
            user ? <AddTree /> : <Navigate to='/AuthPage' replace={true} />
          }
        />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Sidebar' element={<Sidebar />} />
        <Route path='/TreeForm' element={<TreeForm />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Tree' element={<Tree />} />
        <Route path='/AdminMap' element={<AdminMap />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;


var w = window.innerWidth,
  h = window.innerHeight,
  canvas = document.getElementById('test'),
  ctx = canvas.getContext('2d'),
  rate = 60,
  arc = 80,
  time,
  count,
  size = 15,
  speed = 40,
  parts = new Array,
  colors = ['honeydew', 'nyanza', 'tea green', 'celadon', 'pistachio'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function create() {
  time = 0;
  count = 0;

  for (var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0, 0, w, h);
  canvas.addEventListener('mousemove', MouseMove, false);
  for (var i = 0; i < arc; i++) {
    var li = parts[i];
    var distanceFactor = DistanceBetween(mouse, parts[i]);
    var distanceFactor = Math.max(Math.min(15 - (distanceFactor / 10), 10), 1);
    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle = li.c;
    if (i % 2 == 0)
      ctx.stroke();
    else
      ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (li.x > w) {
      li.x = 0;
    }
    if (li.y > h) {
      li.y = 0;
    }
    if (li.x < 0) {
      li.x = w;
    }
    if (li.y < 0) {
      li.y = h;
    }


  }
  if (time < speed) {
    time++;
  }
  setTimeout(particles, 1000 / rate);
}


function MouseMove(e) {
  mouse.x = e.layerX;
  mouse.y = e.layerY;

  //context.fillRect(e.layerX, e.layerY, 5, 5);
  //Draw( e.layerX, e.layerY );
}
function DistanceBetween(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}


create();
particles();

