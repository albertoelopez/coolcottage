# Install with pip install firecrawl-py
import os
from firecrawl import FirecrawlApp
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


api_key = os.getenv("FIRECRAWL_API_KEY")
app = FirecrawlApp(api_key=api_key)

response = app.scrape_url(url='https://www.aducalifornia.org/wp-content/uploads/2020/09/Sunnyvale-Accessory-Dwelling-Units.pdf')
print(response)