# CustomerApp (Angular Version 18.2.5)
## About the application 'customer-app'
1. Used lazy loading for the customer feature.
2. Shared data with the customer module via CommunicationService.
3. Used Guard routes dynamically based on customerId.
4. Displayed customerId in the customer components and handle conditional navigation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


### Files in the customer-app
1. app.module.ts :
   The root module that imports AppRoutingModule and CustomerModule (lazy-loaded)

2. app-routing.module.ts :
   Defines routes for the app and sets up lazy loading for the CustomerModule.

3. communication.service.ts :
   A service for sharing data (customerId and extraRoute flag) between the main app and lazy-loaded modules.

4. customer.module.ts :
   The lazy-loaded module for customer-related components and routes.

5. customer-routing.module.ts :
   Defines routes within CustomerModule, including the CustomerAuthGuard for /customer/extra.

6. customer-auth.guard.ts :
   A route guard that checks if customerId is set. If not, it redirects to /customer.

7. customer.component.ts :
   The main customer component that displays the customerId and a link to the extra route if enabled.

8. customer.component.html :
   The template that displays customerId and a link to /customer/extra if extraRoute is enabled.

9. customer-extra.component.ts :
   Displays the customerId when the /customer/extra route is accessed.

10. customer-extra.component.html :
    Template displaying the customerId.

11. app.component.ts :
    Optionally, set customerId in the root component for testing.

