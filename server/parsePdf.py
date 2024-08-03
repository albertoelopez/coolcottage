# Uncomment if you are in a Jupyter Notebook
import nest_asyncio
nest_asyncio.apply()

from llama_parse import LlamaParse  # pip install llama-parse
import os
import asyncio
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

async def pdf_parser():
    api_key = os.getenv("LLAMA_CLOUD_API_KEY")
    if not api_key:
        raise ValueError("LLAMA_CLOUD_API_KEY not found in environment variables")
    
    print(f"Using API Key: {api_key}")  # Print the API key to ensure it's loaded

    parser = LlamaParse(
        api_key=api_key,
        result_type="markdown"  # "markdown" and "text" are available
    )

    # Load data from external link (synchronous)
    documents = parser.load_data("https://www.aducalifornia.org/wp-content/uploads/2020/09/Sunnyvale-Accessory-Dwelling-Units.pdf")
    print(documents)

# Create an event loop to run the asynchronous function
if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(pdf_parser())
