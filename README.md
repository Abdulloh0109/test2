# Bookshelf Project

This is a simple bookshelf project built with React. The application allows users to add, view, and search for books in their personal library.

## Features

- Add new books to the bookshelf
- View a list of books
- Search for books by title
- Categorize books into different genres

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/bookshelf-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bookshelf-project
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will open in your default web browser at `http://localhost:3000`.

## Project Structure

src/
├── assets/
│ ├── css/
│ │ ├── app.css
│ │ ├── customTable.module.scss
│ │ └── modal.module.scss
│ ├── icon/
│ └── image/
├── components/
├── data/
├── hook/
├── interfaces/
├── layout/
├── pages/
├── redux/
├── App.tsx
├── index.tsx
├── react-app-env.d.tsx
├── servicesWorker.tsx
.env

## Features

- **Add new books** to the bookshelf
- **View a list of books**
- **Search for books** by title
- **Categorize books** into different genres
- **State management** using Redux
- **TypeScript** for type safety

## Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/bookshelf-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bookshelf-project
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add any necessary environment variables.

5. Start the development server:

   ```bash
   npm start
   ```

   The application will open in your default web browser at `http://localhost:3000`.

## Project Details

### Assets

- **css/**: Contains global CSS and SCSS modules for styling the application.
- **icon/**: Stores icon assets used in the application.
- **image/**: Stores image assets used in the application.

### Components

Contains reusable React components used throughout the application.

### Data

Contains static data and configuration files.

### Hook

Custom React hooks for handling specific logic.

### Interfaces

TypeScript interfaces and types used for type checking.

### Layout

Components that define the layout of the application.

### Pages

Page components representing different views in the application.

### Redux

Redux store configuration, actions, and reducers.

### Main Files

- **App.tsx**: The root component that defines the main structure of the application.
- **index.tsx**: The entry point of the React application.
- **react-app-env.d.tsx**: TypeScript declaration file.
- **servicesWorker.tsx**: Service worker file for enabling PWA features.

## Usage

### Adding a Book

1. Navigate to the Add Book page.
2. Fill in the book details such as title, author, and genre.
3. Click the "Add Book" button to add the book to the bookshelf.

### Searching for a Book

1. Use the search bar at the top of the page.
2. Enter the book title or keywords.
3. The list of books will be filtered based on the search term.

### Viewing Books by Category

Books are categorized by genres such as Fiction, Non-Fiction, Science Fiction, Fantasy, and Biography. Navigate to different categories to view books within that genre.

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by various online bookshelf applications.
- Built with love using React, TypeScript, and Redux.
