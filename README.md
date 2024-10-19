
---

# Team Portfolio Website

## Project Overview

This project is a web-based platform designed to showcase the profiles of team members, with varying access levels for users, team members, and admins. The platform enables users to view limited team member details, team members to add or update their own profiles (upon admin approval), and admins to manage all team member data.

## Features

### 1. User Login
- Users can sign up and log in to access basic team information.
- Limited details (pictures, name, email, and bio) are displayed to users.
- Users cannot edit any data or add team members.

### 2. Team Member Login
- Team members can log in to manage their profiles, submit their details, and have them stored in the database.
- Newly submitted profiles require admin approval before being visible to users.
- Team members can view their own profiles and the profiles of other team members, with some restrictions.

### 3. Admin Login
- Admins have full control over all data stored in the system.
- Admins can approve or reject team member profile submissions.
- They can view, add, edit, and delete team members' data.
- Admins can access a spreadsheet-like view of all team members and their full profiles.
- Additional features include managing team settings, member roles, and viewing detailed information.

## Data Structure
- **Database**: The data is stored in a database where team member profiles, including personal information, images, and bio, are saved.
- **Access Levels**:
  - Users have read-only access to basic team information.
  - Team members can manage their profiles but need admin approval.
  - Admins have full access to manage all team data.

## Pages
1. **Home Page**: Introduction to the platform and team overview.
2. **Members Page**: Displays a list of team members with limited info. Clicking on a member's name shows more details in a portfolio-style view.
3. **Profile Page**: Team members can view and update their profiles here (admin approval required).
4. **Admin Dashboard**: Contains tools for managing the team, viewing member data, and handling submissions.
5. **Settings Page**: Allows admins to manage team roles, view options, and other system configurations.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Lavarel
- **Database**: MySQL
- **Version Control**: Git
- **Hosting**: Vercel

## Getting Started
To get the project running on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/Tresh-Tech/Tresh-Team-Portfolio.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up the database:
   - Ensure MySQL is installed.
   - Import the database schema from the `schema.sql` file.
   - Update the `.env` file with your database credentials.

4. Run the project:
   ```
   npm start
   ```

## Contribution Guidelines
We welcome contributions from team members. Please follow the guidelines below:

- Create a feature branch from `main`:
   ```
   git checkout -b feature-branch
   ```
- Once you are done, push your changes and create a pull request.
- Ensure your code is properly commented and tested.

## Contact
For any questions or suggestions, feel free to reach out to the team:

- WhatsApp: [Community Link](https://chat.whatsapp.com/BDmxomcHFGbHG7MWzAfkdg)
- Email: treshtechcohort@gmail.com

---

Happy Coding