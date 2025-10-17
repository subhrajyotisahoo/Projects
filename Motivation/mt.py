import random
import datetime
import os

QUOTE_FILE = "quotes.txt"
FAVORITES_FILE = "favorites.txt"

quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Don’t stop when you’re tired. Stop when you’re done."
]

def show_quote():
    today = datetime.date.today()
    seed = int(today.strftime("%Y%m%d"))  # Use date as seed
    random.seed(seed)
    quote = random.choice(quotes)
    print(f"\n Today's Motivation:\n\"{quote}\"\n")
    return quote

def save_favorite(quote):
    with open(FAVORITES_FILE, "a") as file:
        file.write(quote + "\n")
    print(" Saved to favorites!")

def view_favorites():
    if not os.path.exists(FAVORITES_FILE):
        print("No favorites saved yet.")
        return
    print("\n Your Favorite Quotes:")
    with open(FAVORITES_FILE, "r") as file:
        for line in file:
            print(f"- {line.strip()}")

def main():
    while True:
        print("\n Motivation Menu:")
        print("1. Show today's quote")
        print("2. Save quote to favorites")
        print("3. View favorites")
        print("4. Exit")
        choice = input("Choose an option (1–4): ").strip()

        if choice == "1":
            quote = show_quote()
        elif choice == "2":
            quote = show_quote()
            save_favorite(quote)
        elif choice == "3":
            view_favorites()
        elif choice == "4":
            print(" Stay inspired!")
            break
        else:
            print(" Invalid choice. Try again.")

if __name__ == "__main__":
    main()
