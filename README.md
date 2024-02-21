# Take-Home Assessment for New Developers

Welcome to our take-home assessment designed to evaluate your skills in state management, API integration, and cloud services. This assessment is divided into two main tasks, each focusing on different sets of technologies and challenges. Please read through the tasks carefully and follow the steps outlined. This project uses React Native and Expo.

## Initial Setup: Please fork this repository to start the project.

## Task One: State Management and API Integration

In Task One, you will be working with `providers/root-store.tsx` to demonstrate your ability to manage state and make API calls using MobX and the Amadeus API.

### Objectives

-  **Step 1.** Implement the `queryAmadeusFlightsSearch` action.
-  **Step 2.** Display the desired data results in the Task 1 screen using the queried data. Utilize flights from the `rootStore`.
-  **Step 3.** Implement the `queryAmadeusFlightOffersPrice` action.
-  **Step 4.** Display the desired data results in the Task 1 screen using the confirmed flights data. With an Amadeus test key, this data should match the flight search data.
-  **Step 5.** Implement the `queryAmadeusFlightCreateOrder` action again. Use the first flight from the confirmed flights array in `rootStore`.
-  **Step 6.** Display the desired data results in the Task 1 screen using the selected flight data.

## Task Two: AWS Amplify and DataStore

Task Two focuses on using AWS Amplify and DataStore to manage state and synchronize data with a cloud backend.

### Objectives

-  **Step 1.** Initialize AWS Amplify and configure DataStore.
-  **Step 2.** Use the Amplify CLI to define a data model for your application.
-  **Step 3.** Store confirmed flight data in DataStore using the `rootStore`.
-  **Step 4.** Create a Lambda function and an API Gateway endpoint to retrieve flight data from DataStore.
-  **Step 5.** Implement the Task 2 screen to display data fetched from DataStore.
-  **Step 6.** Grant AWS Amplify Viewer IAM access to mail@anthonynasser.com for backend verification.

## Submission Guidelines

-  Ensure that your code is clean, well-commented, and adheres to best practices.
-  Submit your project through the designated submission link provided: [Submission Form](https://forms.gle/1gVPh6cfHYguRrw48).
-  Include a brief explanation of your approach and any decisions you made to solve the tasks.

Good luck, and we look forward to reviewing your submission!
