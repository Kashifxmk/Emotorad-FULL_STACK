#Mohammed Kashif

EMotorad Dashboard
The EMotorad Dashboard is an interactive and responsive web application that provides a detailed view of various metrics related to EMotorad's platform. The dashboard allows users to monitor key performance indicators (KPIs) like total revenue, transactions, user activity, and top profiles, all in a visually appealing and user-friendly layout. This project is built using React.js and utilizes Vite for optimized development and build processes.

Features
Summary Cards: Displays key metrics such as total revenue, transactions, likes, and users with dynamic data representation.
Activity Section: Shows various activities on the platform, including a visual representation of guest and user data over specific time frames (e.g., May-June 2021).
Product Profiles: Displays top-performing profiles and products with percentage representation for each.
Add Profile Modal: Provides an option to add new profiles directly from the dashboard.
Search Bar: Allows users to search through dashboard data efficiently.
Logout Functionality: Users can log out of the dashboard and be redirected to the login page. The logout process clears stored authentication tokens.
Tech Stack
Frontend:
React.js (for component-based architecture)
Vite (for fast build and development)
CSS for styling
Icons: FontAwesome icons for various UI elements
Assets: Static assets for charts and images (e.g., bar-chart, pie-chart)
Prerequisites
Node.js (version 16 or higher)
npm or yarn for package management
Getting Started
1. Clone the repository
To get started with the project, clone this repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/EMotorad-Dashboard.git
2. Install Dependencies
Navigate to the project directory and install the required dependencies using npm or yarn:

bash
Copy code
cd EMotorad-Dashboard
npm install
# OR
yarn install
3. Run the Development Server
To start the development server and view the application in your browser, run:

bash
Copy code
npm run dev
# OR
yarn dev
Visit http://localhost:3000 (or another specified port) to see the dashboard in action.

4. Build for Production
To create an optimized production build, run:

bash
Copy code
npm run build
# OR
yarn build
The production build will be located in the /dist folder.

Key Components
Dashboard
The Dashboard component serves as the main view, containing all the primary elements such as:

Summary cards for key statistics
Activity section with dynamic charts and labels
Product profiles and their percentage distribution
Modal for adding new profiles
Logout button with user redirection to the login page
AddProfileModal
A reusable modal component that displays a form for adding new profiles. The modal is shown when the "Add Profile" button is clicked.

CSS Styling
The application uses standard CSS along with some utility-based styling to ensure responsiveness and modern UI elements.

How to Contribute
If you want to contribute to this project:

Fork the repository
Create a new branch (git checkout -b feature-branch)
Make your changes and commit them (git commit -am 'Add new feature')
Push to the branch (git push origin feature-branch)
Open a pull request with a description of the changes#   E m o t o r a d - F U L L _ S T A C K  
 