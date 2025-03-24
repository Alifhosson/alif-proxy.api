const express = require("express");
const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// ✅ Updated: Proxy লিস্ট সরাসরি API থেকে নেওয়া
async function getFreeProxy() {
    try {
        const response = await axios.get("https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all");
        const proxies = response.data.split("\n").filter(Boolean);
        return proxies.length > 0 ? proxies[Math.floor(Math.random() * proxies.length)] : null;
    } catch (error) {
        console.error("Error fetching proxies:", error);
        return null;
    }
}

// ✅ Updated: Random User-Agent সরাসরি লিস্ট থেকে নেওয়া
function getRandomUserAgent() {
    const userAgents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Linux; Android 11; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36"
    ];
    return userAgents[Math.floor(Math.random() * userAgents.length)];
}

app.get("/proxy", async (req, res) => {
    try {
        const { url } = req.query;

        if (!url) {
            return res.status(400).json({ error: "URL is required!" });
        }

        const proxy = await getFreeProxy();
        const userAgent = getRandomUserAgent();

        if (!proxy) {
            return res.status(500).json({ error: "No working proxy found!" });
        }

        const agent = new HttpsProxyAgent(`http://${proxy}`);

        const response = await axios.get(url, {
            httpsAgent: agent,
            headers: { "User-Agent": userAgent },
            timeout: 5000, // ৫ সেকেন্ড টাইমআউট (ফ্রিজ সমস্যা সমাধান)
        });

        res.send(response.data);
    } catch (error) {
        console.error("Request failed:", error.message);
        res.status(500).json({ error: "Failed to fetch data!", details: error.message });
    }
});

// ✅ Vercel-এর জন্য Module Export
module.exports = app;

// ✅ Local Development-এর জন্য Server Start
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`✅ Proxy API running on port ${PORT}`);
    });
}
