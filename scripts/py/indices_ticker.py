import yfinance as yf
import datetime
import pandas as pd
import json

# Define indices
indices = {
    "^GSPC": "S&P 500",
    "^DJI": "Dow Jones",
    "^IXIC": "NASDAQ",
    "^FTSE": "FTSE 100",
    "^N225": "Nikkei 225",
    "^HSI":"Hang Seng",
    "^AXJO":"ASX 200",
    "^AORD":"All Ordinaries"
}

# Date range
end_date = datetime.datetime.today()
start_date = end_date - datetime.timedelta(days=14)

# Aggregate all data with index names
all_data = []

for symbol, name in indices.items():
    stock = yf.Ticker(symbol)
    df = stock.history(period="10d")
    df['UTC'] = df.index.tz_convert("UTC").strftime('%Y-%m-%dT%H:%M:%SZ')
    df = df.tail(10).copy()
    df['Index'] = name  # Add the index name to each row
    df['Symbol'] = symbol
    df.reset_index(inplace=True)
    all_data.append(df[['UTC','Symbol','Index','Open','Close','High','Low','Volume']])

# Combine into one DataFrame
result_df = pd.concat(all_data, ignore_index=True)

print(result_df)
json_data = result_df.to_dict(orient='records')
file_path = "c:/temp/data/indices.json"

with open(file_path, "w") as json_file:
    json.dump(json_data, json_file, indent=4)

print(f"Data saved to {file_path}")
