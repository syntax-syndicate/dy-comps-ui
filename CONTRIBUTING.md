# Contributing to DY Comps

Thank you for considering contributing to DY Comps! We appreciate your support and effort in making this project better.

## Add a New Template

1. **Install Dependencies**
   ```sh
   pnpm i
   ```
2. **Fork the Repository**
3. **Clone Your Fork**
   ```sh
   git clone https://github.com/your-username/DY-Comps.git
   cd DY-Comps
   ```
4. **Create a New Branch**
   ```sh
   git checkout -b feature/template-branch
   ```
5. **Create a new folder inside `src/templates/`.**
6. **Add the following two files:**
   - `metadata.ts`: Contains data about this template. You can view other examples or refer to `type.d.ts` for more details.
   - `index.tsx`: The template's main component.

### Updating Metadata

- If you change the `metadata.ts` file, run the following command:
  ```sh
  pnpm gen:data
  ```
- Open a new tab in your browser to see the updates.
- After making all changes, run:
  ```sh
  pnpm gen:data
  ```

7. **Commit & Push Your Changes**
   ```sh
   git add .
   git commit -m "Add new template"
   git push origin feature/template-branch
   ```
8. **Create a Pull Request (PR)**

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
