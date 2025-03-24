const axios = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');

module.exports = async (req, res) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'Please provide a URL ( ?url=example.com )' });
  }

  try {
    const proxy = await getFreeProxy(); // র্যান্ডম প্রক্সি নির্বাচন
    if (!proxy) return res.status(500).json({ error: 'No proxy available' });

    const agent = new HttpsProxyAgent(`http://${proxy}`);
    const response = await axios.get(url, { httpsAgent: agent });

    res.status(200).json({
      proxy: proxy,
      data: response.data
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data via proxy', details: error.message });
  }
};

// ফ্রি প্রক্সি সংগ্রহ করার ফাংশন
async function getFreeProxy() {
  try {
    const res = await axios.get('https://www.proxyscrape.com/api?request=getproxies&proxytype=http');
    const proxyList = res.data.split
