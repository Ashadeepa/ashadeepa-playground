# Angular18 Simple Application with Lazy Loading and Route Guards

## About the application 'customer-app'
1. Used lazy loading for the customer feature.
2. Shared data with the customer module via CommunicationService.
3. Used Guard routes dynamically based on customerId.
4. Displayed customerId in the customer components and handle conditional navigation

### How to achieve this in a simple Angular application

1. Create a new Angular application using the Angular CLI.
2. Create a new module for the customer feature.
3. Define routes for the customer feature within the customer module.
4. Use a service to share data between the main app and the customer module.
5. Implement a route guard to check if the customerId is set before accessing certain routes.
6. Display the customerId in the customer components and handle conditional navigation based on the customerId.
7. Use lazy loading to load the customer module only when needed.
8. Test the application by setting the customerId in the root component and navigating to different routes.
9. Verify that the route guard works as expected and displays the customerId in the customer components.
10. Update the application to handle dynamic routing based on the customerId and extraRoute flag.
11. Test the application by navigating to different routes with different customerId values.
12. Verify that the application displays the correct customerId and handles conditional navigation based on the customerId and extraRoute flag.

### Files in the customer-app
1. app.module.ts
The root module that imports AppRoutingModule and CustomerModule (lazy-loaded)

2. app-routing.module.ts
Defines routes for the app and sets up lazy loading for the CustomerModule.

3. communication.service.ts
A service for sharing data (customerId and extraRoute flag) between the main app and lazy-loaded modules.

4. customer.module.ts
The lazy-loaded module for customer-related components and routes.

5. customer-routing.module.ts
Defines routes within CustomerModule, including the CustomerAuthGuard for /customer/extra.

6. customer-auth.guard.ts
A route guard that checks if customerId is set. If not, it redirects to /customer.

7. customer.component.ts
The main customer component that displays the customerId and a link to the extra route if enabled.

8. customer.component.html
The template that displays customerId and a link to /customer/extra if extraRoute is enabled.

9. customer-extra.component.ts
Displays the customerId when the /customer/extra route is accessed.

10. customer-extra.component.html
Template displaying the customerId.

11. app.component.ts (Optional for setting customerId initially)
Optionally, set customerId in the root component for testing.
