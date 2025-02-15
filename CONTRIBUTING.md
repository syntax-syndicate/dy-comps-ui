# Contributing to DY Comps

Thank you for considering contributing to DY Comps! We appreciate your support and effort in making this project better.

## Add a New Template (Block)

1. Fork the Repository
2. Clone Your Fork
3. Create a New Branch
4. Install Dependencies `pnpm i`
5. Create a new folder inside `src/templates/blocks`.
6. Add the following two files: (both files are required)
   - `metadata.ts`: Contains data about this template. You can view other examples or refer to `type.d.ts` for more details. [more](#updating-metadata)
   - `index.tsx`: The template's main component. (component must be `default export`)
7. Commit & Push Your Changes
8. Create a Pull Request (PR)

### Updating Metadata

- If you change the `metadata.ts` file or change template folder-name, then run the following command:
  ```sh
  pnpm gen:data
  ```
   > [!NOTE]
   > This command generates the `public/data/templatesStructure.json` file, which contains metadata about the templates.

   <!-- Debug -->
   > [!IMPORTANT]
   > After running `pnpm gen:data`, open a new tab in your browser to view the updates.

## Contribution Guidelines

- Follow the coding style used in the project.
- Write meaningful commit messages.
- Ensure your changes do not break existing functionality.

## Reporting Issues

If you encounter a bug or have a feature request, please create an issue:

1. Navigate to the **Issues** tab.
2. Click **New Issue**.
3. Provide a clear and concise description of the problem.

## Contact

For any questions, feel free to reach out by opening an issue or contacting the maintainers.

Happy Coding! 🚀
