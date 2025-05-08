# Poparide Frontend Take-Home

This project template is provided by [Poparide](https://poparide.com) to evaluate your **frontend skills and problem-solving approach** for either a **Web** or **Mobile Engineering** role within our Product team. The base Expo template includes initial setup so you can focus on building the required features without worrying about configuration.

## Getting Started

1. **Create a private repository** from this template.
2. **Invite your reviewers** (you should have received a list of GitHub accounts).
3. **Start implementing the required features** following the project guidelines below.

## Task Overview

You need to implement two screens based on [the Figma design](https://www.figma.com/design/SyGYoUKTm3PDmjknLu1euh/Poparide-Take-home-Mobile?node-id=0-1):

1. **Search Tab Screen** ([`app/(tabs)/index.tsx`](<./app/(tabs)/index.tsx>))
2. **Search Results Screen** ([`app/(trips)/trips/index.tsx`](<./app/(trips)/index.tsx>))

## API Endpoints

The project includes a few mock API endpoints, which you can modify or extend as needed.

### `GET /api/locations/`

Returns a list of locations.

- `query=<string>`: Search locations by name.

<details>

<summary>Response</summary>

```
200 OK
{
   "count": <int>,
   "next": <string>,
   "previous": <string>,
   "results": [
      {
         "id": <int>,
         "name": <string>,
         "latitude": <float>,
         "longitude": <float>
      },
      ...
   ]
}
```

</details>

### `GET /api/trips/`

Returns a list of trips.

- `origin_id=<number>`: Location ID for the trip's starting point.
- `destination_id=<number>`: Location ID for the trip's endpoint.
- `departure_date=<string>`: An ISO-8601 formatted date for trip departure.

<details>

<summary>Response</summary>

```
200 OK
{
   "count": <int>,
   "next": <string>,
   "previous": <string>,
   "results": [
      {
         "id": <int>,
         "creator": {
            "id": <int>,
            "name": <string>,
            "is_verified": <boolean>,
            "stats": {
               "avg_rating": <float>,
               "trips_driven": <int>,
               "trips_taken": <int>
            }
         },
         "vehicle": {
            "id": <int>,
            "owner": <int>,
            "make": <string>,
            "model": <string>,
            "year": <int>
         },
         "description": <string>,
         "origin": {
            "id": <int>,
            "name": <string>,
            "latitude": <float>,
            "longitude": <float>
         },
         "destination": {
            "id": <int>,
            "name": <string>,
            "latitude": <float>,
            "longitude": <float>
         },
         "departure_time": <timestamp>,  // ISO-8601
         "state": "open" | "closed" | "cancelled",
         "passengers": [
            {
               "id": <int>,
               "name": <string>,
               "is_verified": <boolean>,
               "stats": {
                  "avg_rating": <float>,
                  "trips_driven": <int>,
                  "trips_taken": <int>
               }
            },
            ...
         ],
         "number_of_seats": <int>,
         "price_per_seat": <string>
      },
      ...
   ]
}
```

</details>

### `GET /api/trips/<tripId>/`

Return an individual trip by its ID.

<details>

<summary>Response</summary>

```
200 OK
{
   "id": <int>,
   "creator": {
      "id": <int>,
      "name": <string>,
      "is_verified": <boolean>,
      "stats": {
         "avg_rating": <float>,
         "trips_driven": <int>,
         "trips_taken": <int>
      }
   },
   "vehicle": {
      "id": <int>,
      "owner": <int>,
      "make": <string>,
      "model": <string>,
      "year": <int>
   },
   "description": <string>,
   "origin": {
      "id": <int>,
      "name": <string>,
      "latitude": <float>,
      "longitude": <float>
   },
   "destination": {
      "id": <int>,
      "name": <string>,
      "latitude": <float>,
      "longitude": <float>
   },
   "departure_time": <timestamp>,  // ISO-8601
   "state": "open" | "closed" | "cancelled",
   "passengers": [
      {
         "id": <int>,
         "name": <string>,
         "is_verified": <boolean>,
         "stats": {
            "avg_rating": <float>,
            "trips_driven": <int>,
            "trips_taken": <int>
         }
      },
      ...
   ],
   "number_of_seats": <int>,
   "price_per_seat": <string>
}
```

</details>

## How We'll Evaluate Your Work

We’ll assess your project based on the following criteria:

- **Design:** Is your solution maintainable and scalable? Have you considered future changes?
- **Code Quality:** Is your code clean, modular, and well-structured?
- **Reusability:** Have you built components that can be easily reused in the future?
- **Adherence to Design:** Does your implementation closely match the provided Figma design? If there are any deviations, have you documented the reasons in [`NOTES.md`](./NOTES.md)?
- **Documentation:** Have you provided context around your decisions and assumptions? Use [`NOTES.md`](./NOTES.md) to document any relevant details.

Your code will be tested in a **web browser** for Web roles or on **mobile simulators** (iOS and Android) for Mobile roles, depending on whether you're applying for a **Web** or **Mobile Engineering** position at Poparide.

### Time Expectations

We respect your time and don’t expect you to spend more than **four hours** on this task. Time spent is not a strict evaluation criterion. However, if you choose to spend significantly more (or less) time, please note this in [`NOTES.md`](./NOTES.md) so we can factor it into our review.

We encourage you to use [`NOTES.md`](./NOTES.md) to document:

- What you would improve given more time.
- Any scope considerations or trade-offs you made.
- Features that were out of scope but worth mentioning.

We don’t expect a finished product in four hours—what matters most is your approach and thought process!

## Project Setup

Follow these steps to set up the project locally:

1. Ensure you have [Node.js LTS](https://nodejs.org/en/) installed.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npx expo start
   ```

You'll then see options to run the app in:

- A [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- An [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- An [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a sandbox for trying out Expo development
