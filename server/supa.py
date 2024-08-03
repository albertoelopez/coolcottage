import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables from .env file
load_dotenv()

# Retrieve environment variables
url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")

# Print the retrieved values (optional, for debugging purposes)
print("Supabase URL:", url)
print("Supabase Key:", key)

# Create a Supabase client
supabase: Client = create_client(url, key)

# List buckets in Supabase storage
res = supabase.storage.from_('probate_test').list()

# Print the result
print(res)

