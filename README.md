Background
A consumer goods manufacturing company has stocks in its product
inventory. whenever it sells it to retailers or distributors, it needs to
generate a sale order for record-keeping and compliance purposes. As a
part of the assignment, you are required to build only the frontend part of
the simple sale order management application. Below are all the
specifications -
1. Single Page Application with a Login Page (dummy username and
password). An unauthenticated user should be redirected to the
login page
2. Dark Theme Toggle Switch. (The theme should persist on reloads)
3. One tab for the Active Sale Orders. Another For the Completed
Sale Orders.
4. Below in the image, + Sale order button is a modal trigger. The
content inside the modal should be the form to create a sale
order.
5. Below in the image, the active sale order row contains (triple
horizontal dots icon/ … ), which is another modal trigger, for
editing that active sale order. ( Initially, the Form must be prefilled
with the details). A similar pattern should be followed in the
Completed Sale Order table, but the form will be Read-Only.
Wireframe for page(s)
Product Multi select Snippet of sale order form


Required tech stack:
1. React 18+ (with optimization hooks)
2. React Router DOM (latest version) for routing purposes.
3. Tanstack react query for managing server state. For all the events,
the api calls should be mimicked.
4. React Hook Form for managing form state
5. Chakra-UI (component UI Library) for styling
6. Chakra MultiSelect (or any other that’s compatible with Chakra-UI)
