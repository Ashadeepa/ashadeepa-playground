# Angular18 Simple Application with Lazy Loading and Route Guards

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
