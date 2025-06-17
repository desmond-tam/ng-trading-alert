import yfinance as yf
import json

# Define the stock ticker
ticker = "^DJI"  # Example: Apple Inc.

# Fetch historical data
stock = yf.Ticker(ticker)
history = stock.history(period="10d")  # Adjust period as needed

print(history)
# Convert to JSON format
history_json = history.reset_index().to_json(orient="records")

print(json.dumps(history_json, indent=4))


file_path = "c:/temp/dji_data.json"

with open(file_path, "w") as json_file:
    json.dump(history_json, json_file, indent=4)

print(f"Data saved to {file_path}")
