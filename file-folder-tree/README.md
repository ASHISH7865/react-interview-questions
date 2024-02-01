# File Explorer React Component

This React component provides a flexible and interactive file explorer interface with the ability to add folders and files dynamically. It includes features such as expanding/collapsing folders, adding new folders/files, and a visually appealing design.

## Features

- **Folder Expansion/Collapse:** Easily expand or collapse folders by clicking on the folder icon or name. The component utilizes the Lucide React icons to represent folders and files.
- **Add Folders/Files:** Add new folders or files by clicking on the respective icons in the sidebar header. An input field will appear to enter the name of the new folder or file.
- **Interactive Design:** The component is designed with a clean and visually appealing interface. The dark-themed color scheme enhances visibility and reduces eye strain.
- **Debounced Input:** The input for adding folders or files is debounced to improve performance and prevent unnecessary re-renders.

## Usage

1.  **Installation:**

    Install the required dependencies using npm:

    bashCopy code

    `npm install lucide-react nanoid`

2.  **Import Component:**

    Import the `RootLayout` component into your React application:

    jsxCopy code

    `import RootLayout from './path-to-component/RootLayout';`

3.  **Initialize Explorer Data:**

    Set up the initial file explorer data structure and define the structure of folders and files. Modify the `explorerData` object in the provided `explorerData.ts` file.

4.  **Render Component:**

    Use the `RootLayout` component to render the file explorer in your application:

    ```
    const App = () => {
      return (
        <RootLayout>
          {/* Your application content goes here */}
        </RootLayout>
      );
    };

    export default App;
    ```

## Customization

- **Styling:**

  - Adjust the color scheme and styling by modifying the styles in the `RootLayout` and `FolderLayout` components.

- **Icons:**

  - Replace the Lucide React icons (`Folder`, `File`, `ChevronDown`, `ChevronUp`, `FolderPlus`, `FilePlus2`, `CopyMinus`) with your preferred icon library.

## Contributions

Feel free to contribute to the development and improvement of this React file explorer component. Bug reports, feature requests, and pull requests are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Data Structure:

ExplorerData Object:
Each node in the file explorer is represented by an object of type ExplorerData.
Properties:
id: A unique identifier for each node (generated using nanoid).
name: The name of the folder or file.
isFolder: A boolean indicating whether the node is a folder or a file.
items: An array containing child nodes (sub-folders or files).
isExpanded: A boolean indicating whether the folder is expanded or collapsed.

## Algorithms:

### Recursive Initialization:

The initializeIsExpanded function is a recursive algorithm used to initialize the isExpanded property for each node in the tree during the component's initialization.

### Sorting Algorithm:

The sortItemsAlphabetically function is used to sort the child items (folders or files) alphabetically within each folder.

### Recursive Update and Expansion/Collapse:

The updateIsExpanded function is a recursive algorithm used to update the isExpanded property when a folder is clicked, expanding or collapsing the folder and its children.

### Debouncing:

The debounce function is a utility function implementing the debouncing technique. It is used to delay the processing of the input value changes to improve performance and prevent unnecessary re-renders.
