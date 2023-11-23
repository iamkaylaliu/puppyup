import eBayApi from 'ebay-api';
const eBay = new eBayApi({
    appId: process.env.NODE_APP_EBAY_API_KEY,
    certId: process.env.NODE_APP_EBAY_CERT_ID,
    // appId: 'XinQi-Puppyup-PRD-8ac1813bf-324c8045',
    // certId: 'PRD-ac1813bfe3ed-24c1-44b5-8ac5-69d8',
    sandbox: false,
  });

function Search(app) {
    app.get('/ebay-item', async (req, res) => {
        try {
        const itemId = req.query.itemId; // Get the eBay item ID from the query parameter
        if (!itemId) {
            return res.status(400).send('eBay item ID is required');
        }
        const item = await eBay.buy.browse.getItem(itemId);
        res.json(item);
        } catch (error) {
        console.error('Error fetching eBay item:', error);
        res.status(500).send('Error occurred fetching eBay item');
        }
    });

    app.get('/ebay-search', async (req, res) => {
        const search = {};
        search.q = req.query.q;
        const items = await eBay.buy.browse.search(search);
        res.json(items);
    }
    );
  
};

export default Search;