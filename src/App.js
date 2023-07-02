import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './index.css';
import CowStory from './pages/cowStory';
import Invest from './pages/invest';
import FipMe from './pages/fipme';
import Solutions from './pages/solutions';
import Moos from './pages/moos';
import TextPage from './pages/textPage';
import Dashboard from './pages/dashboard';
import BlogPreview from './pages/dashboard/components/innerDashbaord/blogs/BlogPreview';
import Blogs from './pages/blogs';
import News from './pages/news';
import NewsPreview from './pages/dashboard/components/innerDashbaord/blogs/NewsPreview';
import api from './utils/api';

const App = () => {
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getBlogs();
    getNews();
  }, []);

  const getBlogs = async (data) => {
    setBlogsLoading(true);
    try {
      var res = await api.get('/blog');
      if (res.data.items && !res.data.error) {
        setBlogs(res.data.items);
        setBlogsLoading(false);
      } else {
        console.log('res.data.error', res.data.error);
        setBlogsLoading(false);
      }
    } catch (e) {
      console.log('e.message', e.message);
      setBlogsLoading(false);
    }
  };
  const getNews = async (data) => {
    setNewsLoading(true);
    try {
      var res = await api.get('/cowNew');
      if (res.data.items && !res.data.error) {
        setNews(res.data.items);
        setNewsLoading(false);
      } else {
        console.log('res.data.error', res.data.error);
        setNewsLoading(false);
      }
    } catch (e) {
      console.log('e.message', e.message);
      setNewsLoading(false);
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cow-story" element={<CowStory />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/test-page" element={<TextPage />} />
      <Route path="/fipme" element={<FipMe />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route
        path="/moos"
        element={
          <Moos
            blogsLoading={blogsLoading}
            blogs={blogs}
            newsLoading={newsLoading}
            news={news}
          />
        }
      />
      <Route
        path="/blogs"
        element={<Blogs blogsLoading={blogsLoading} blogs={blogs} />}
      />
      <Route
        path="/news"
        element={<News newsLoading={newsLoading} news={news} />}
      />
      <Route path="/blog/:id" element={<BlogPreview />} />
      <Route path="/news/:id" element={<NewsPreview />} />
      <Route path="/admin-area" element={<Dashboard />}>
        <Route path="/admin-area/:tab" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
