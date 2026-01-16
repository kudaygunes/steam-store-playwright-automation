# 🎮 Steam Store Playwright Testing Suite

A comprehensive end-to-end (E2E) testing automation project for the **Steam Store** website using **Playwright**. This project validates the functionality of the Steam Store's homepage, search functionality, game detail pages, and user interactions across multiple browsers.

---

## 📚 Table of Contents

- [What is This Project?](#what-is-this-project)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running Tests](#running-tests)
- [Available Commands](#available-commands)
- [Test Coverage](#test-coverage)
- [Configuration Details](#configuration-details)
- [Technologies & Plugins](#technologies--plugins)
- [Project Architecture](#project-architecture)

---

## 🎯 What is This Project?

### For Beginners

Think of this project as an **automated quality checker** for the Steam Store website. Imagine a robot that can:

- **Surf the web like you do** - Click buttons, fill in search boxes, navigate between pages
- **Verify everything works** - Check if links point to the right places, if buttons are clickable, if content displays correctly
- **Do it repeatedly** - Run the same tests over and over, in multiple browsers, ensuring consistent quality
- **Report results** - Tell you what passed and what failed with detailed HTML reports

### What It Tests

This Playwright automation suite tests the following **Steam Store functionalities**:

#### 🏠 **Homepage Tests** (`steamHomepageTests.spec.ts`)

- ✅ **Top Sellers Section** - Validates that the top sellers section is visible and can be activated
- ✅ **Special Offers Section** - Checks if special offers can be displayed and selected
- ✅ **Steam Client Download** - Ensures the "Install Steam" button redirects correctly
- ✅ **Sign-In Navigation** - Verifies sign-in link functionality
- ✅ **Language Switching** - Tests language changing capabilities (Turkish language example) and UI updates accordingly

#### 🔍 **Search Functionality** (`steamSearchpageTests.spec.ts`)

- ✅ **Game Search** - Validates searching for games by name
- ✅ **Search Results Display** - Confirms search results appear correctly with game names

#### 📄 **Game Detail Pages** (`steamGameDetailPage.spec.ts`)

- ✅ **Game Title Verification** - Checks if the correct game title displays on detail pages
- ✅ **Add to Cart Button** - Ensures the purchase/cart button is visible and functional
- ✅ **Customer Reviews** - Validates that customer review sections load properly

#### 💨 **Smoke Tests** (`steamSmokeTests.spec.ts`)

- 🚀 Quick critical tests to verify the application's basic functionality hasn't broken

---

## 📁 Project Structure

```
steam-store-playwright/
├── tests/
│   ├── steamHomepageTests.spec.ts        # Homepage functionality tests
│   ├── steamSearchpageTests.spec.ts      # Search feature tests
│   ├── steamGameDetailPage.spec.ts       # Game detail page tests
│   ├── pages/
│   │   ├── steamHomepage.ts              # Page Object Model for homepage
│   │   ├── steamSearchResultPage.ts      # Page Object Model for search results
│   │   └── steamGameDetailPage.ts        # Page Object Model for game detail pages
│   ├── helpers/
│   │   └── steamHelpers.ts               # Reusable test helper functions
│   └── testing-types/
│       └── steamSmokeTests.spec.ts       # Quick smoke tests
├── playwright.config.ts                  # Playwright configuration
├── package.json                          # Project dependencies and scripts
├── playwright-report/                    # Generated HTML test reports
├── test-results/                         # Raw test result data
└── README.md                             # This file
```

### Key Folders Explained

| Folder                 | Purpose                                                                    |
| ---------------------- | -------------------------------------------------------------------------- |
| `tests/`               | Contains all test files (.spec.ts files)                                   |
| `tests/pages/`         | **Page Object Model** - Classes representing web pages with their elements |
| `tests/helpers/`       | **Helper utilities** - Reusable functions to avoid code repetition         |
| `tests/testing-types/` | **Smoke tests** - Fast, critical path tests                                |
| `playwright-report/`   | Generated HTML reports after test runs                                     |
| `test-results/`        | Test execution logs and metadata                                           |

---

## 📋 Prerequisites

Before setting up this project, ensure you have:

### Required Software

1. **Node.js** (v14 or higher)

   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (Node Package Manager - comes with Node.js)

   - Verify installation: `npm --version`

3. **Git** (optional, for cloning the repository)
   - Download from: https://git-scm.com/

### System Requirements

- **OS**: Windows, macOS, or Linux
- **RAM**: Minimum 2GB (4GB recommended)
- **Disk Space**: ~500MB
- **Internet Connection**: Required (to download dependencies and access Steam Store)

---

## 🚀 Installation & Setup

Follow these step-by-step instructions to set up the project on your machine:

### Step 1: Clone or Download the Project

**Option A: Using Git (Recommended)**

```bash
git clone https://github.com/kudaygunes/steam-store-playwright-automation.git
cd steam-store-playwright
```

**Option B: Download ZIP**

- Click the green "Code" button on GitHub
- Select "Download ZIP"
- Extract the folder
- Open Command Prompt/Terminal and navigate to the extracted folder

### Step 2: Navigate to Project Directory

```bash
cd steam-store-playwright
```

### Step 3: Install Dependencies

This command downloads all necessary packages (Playwright, testing libraries, etc.)

```bash
npm install
```

**What this does:**

- Reads `package.json`
- Downloads all dependencies into `node_modules/` folder
- Installs Playwright browsers (Chrome, Firefox, Safari)
- Creates `package-lock.json` for version consistency

**Expected output:** You should see messages about installing packages. This may take 2-5 minutes on first run.

### Step 4: Verify Installation

Test that everything is installed correctly:

```bash
npx playwright --version
```

Should output something like: `Version 1.57.0` (or similar)

---

## 🧪 Running Tests

### Quick Start: Run All Tests

```bash
npm test
```

This will:

- Clean previous test reports
- Run all tests in Chrome, Firefox, and Safari
- Generate an HTML report

### Run Tests with Interactive UI (Recommended for Learning)

```bash
npm run test:ui
```

This opens Playwright's **Test UI** where you can:

- 👀 Watch tests run in real-time
- ⏸️ Pause execution mid-test
- 🔄 Re-run individual tests
- 📊 See detailed results immediately

### Run Specific Test Files

```bash
# Run only homepage tests
npx playwright test steamHomepageTests.spec.ts

# Run only search tests
npx playwright test steamSearchpageTests.spec.ts

# Run only game detail page tests
npx playwright test steamGameDetailPage.spec.ts

# Run only smoke tests
npx playwright test steamSmokeTests.spec.ts
```

### Run Specific Single Test

```bash
# Run a specific test by name
npx playwright test -g "Display Top Sellers section"
```

### Run with Debug Mode

Debug individual tests step-by-step:

```bash
npx playwright test --debug
```

This opens **Inspector Mode** where you can:

- Step through code line by line
- Inspect browser state
- Execute JavaScript in the console
- Set breakpoints

### Run Tests in Headed Mode (See Browser)

By default, Playwright runs in headless mode (invisible). To see the browser:

```bash
npx playwright test --headed
```

### View Test Report

After running tests, view the HTML report:

```bash
npx playwright show-report
```

This opens an interactive HTML report showing:

- ✅ Passed tests (green)
- ❌ Failed tests (red)
- 📸 Screenshots
- 🎥 Video recordings
- 📋 Test details and timings

---

## 📝 Available Commands

| Command                                          | Description                                                |
| ------------------------------------------------ | ---------------------------------------------------------- |
| `npm test`                                       | Run all tests and generate report                          |
| `npm run test:ui`                                | Run tests with interactive Playwright UI                   |
| `npm run clean:reports`                          | Delete previous test reports and results                   |
| `npx playwright test --debug`                    | Run tests in debug/inspector mode                          |
| `npx playwright test --headed`                   | Run tests with visible browser window                      |
| `npx playwright test --workers=1`                | Run tests sequentially (one at a time) instead of parallel |
| `npx playwright show-report`                     | Open the latest test report in browser                     |
| `npx playwright test steamHomepageTests.spec.ts` | Run specific test file                                     |
| `npx playwright test -g "test name"`             | Run test matching the pattern                              |

---

## ✅ Test Coverage

### Testing Categories

#### 🚀 **Smoke Tests** - Basic Functionality (Quick, ~2-3 minutes)

- Tests critical paths that must always work
- Quick validation that the application is functional
- Run these first before detailed regression tests

**Location:** `tests/testing-types/steamSmokeTests.spec.ts`

#### 🔄 **Regression Tests** - Detailed Functionality (Complete, ~10-15 minutes)

- Comprehensive testing of all features
- Multiple browser validation (Chrome, Firefox, Safari)
- Detailed verification of each component

**Locations:**

- `steamHomepageTests.spec.ts` (5 tests)
- `steamSearchpageTests.spec.ts` (1 test)
- `steamGameDetailPage.spec.ts` (3 tests)

### Test Summary

| Category     | Tests | File(s)                      | Purpose                            |
| ------------ | ----- | ---------------------------- | ---------------------------------- |
| Homepage     | 5     | steamHomepageTests.spec.ts   | UI, Navigation, Language switching |
| Search       | 1     | steamSearchpageTests.spec.ts | Search functionality               |
| Game Details | 3     | steamGameDetailPage.spec.ts  | Game pages, Cart, Reviews          |
| **Total**    | **9** | -                            | -                                  |

---

## ⚙️ Configuration Details

### Playwright Configuration (`playwright.config.ts`)

Key configuration settings:

```typescript
{
  testDir: "./tests",              // Where to find test files
  fullyParallel: true,             // Run multiple tests simultaneously
  retries: 0,                      // Retries (2 on CI, 0 locally)
  reporter: "html",               // Generate HTML reports
  trace: "on-first-retry",        // Record traces for failed tests
  projects: [...]                 // Browser configurations
}
```

### Browser Configurations

Tests run on multiple browsers for maximum compatibility:

| Browser     | Configuration    | Purpose                     |
| ----------- | ---------------- | --------------------------- |
| **Chrome**  | Smoke tests      | Quick validation            |
| **Firefox** | Regression tests | Alternative browser testing |
| **Safari**  | Regression tests | Webkit/Safari compatibility |

---

## 🛠️ Technologies & Plugins

### Core Dependencies

| Technology           | Version | Purpose               |
| -------------------- | ------- | --------------------- |
| **@playwright/test** | ^1.57.0 | E2E testing framework |
| **Node.js**          | 14+     | JavaScript runtime    |

### What is Playwright?

**Playwright** is a modern automation library for:

- 🌐 Testing web applications across browsers
- 🤖 Web scraping and automation
- 📸 Screenshot and video capture
- 🔍 DOM inspection and debugging

### Key Playwright Features Used in This Project

| Feature                | Usage                                             |
| ---------------------- | ------------------------------------------------- |
| **Page Navigation**    | Navigate to Steam Store website                   |
| **Locators**           | Find elements by role, text, CSS selectors        |
| **Interactions**       | Click, fill, type, hover, press keys              |
| **Assertions**         | Verify element visibility, text, attributes, URLs |
| **Screenshots/Videos** | Capture failures for debugging                    |
| **Trace Viewer**       | Replay test execution step-by-step                |

### Testing Patterns Used

#### 🎭 Page Object Model (POM)

- **What**: Classes representing web pages with their elements
- **Files**: `tests/pages/*.ts`
- **Benefit**: Maintainable, reusable code; easy to update selectors

**Example:**

```typescript
// SteamHomePage.ts - Encapsulates homepage elements
export class SteamHomePage {
  topSellersSection = page.locator("button.home_tab", {
    hasText: "Top Sellers",
  });
  specialOffersSection = page.locator("button.home_tab", {
    hasText: "Specials",
  });
}
```

#### 🔧 Helper Functions

- **What**: Reusable utility functions to avoid code duplication
- **File**: `tests/helpers/steamHelpers.ts`
- **Benefit**: DRY principle (Don't Repeat Yourself)

**Example:**

```typescript
// steamHelpers.ts
async searchGame(gameName: string) {
  await this.searchInput.fill(gameName);
  await this.searchInput.press("Enter");
}
```

---

## 🏗️ Project Architecture

### How Tests Work

```
User Runs Test
    ↓
Playwright Launches Browser
    ↓
Test Navigates to Steam Store
    ↓
Test Performs Actions (clicks, searches, etc.)
    ↓
Test Makes Assertions (checks results)
    ↓
Browser Closes
    ↓
Report Generated (HTML/JSON)
```

### File Relationships

```
Test Spec File (steamHomepageTests.spec.ts)
    ├── Uses → Page Object (SteamHomepage.ts)
    ├── Uses → Helper Functions (steamHelpers.ts)
    └── Uses → Playwright assertions
```

### Data Flow Example

**Scenario: Search for a game**

```
1. Test calls: steamHelper.searchGame("Terraria")
   ↓
2. Helper fills search input and presses Enter
   ↓
3. Test gets results via: steamSearchResultPage.searchFirstResult
   ↓
4. Test asserts: expect(result).toHaveText("Terraria")
   ↓
5. Result: ✅ PASS or ❌ FAIL
```

---

## 🐛 Troubleshooting

### Common Issues

**Q: "npm: command not found"**

- Node.js not installed. Download from https://nodejs.org/

**Q: "Playwright installation failed"**

```bash
# Clean and reinstall
npm ci
npx playwright install
```

**Q: Tests timeout or fail**

- Check internet connection
- Steam website may be slow
- Try running single test: `npx playwright test -g "test name"`

**Q: Port already in use**

- Edit `playwright.config.ts` to use different port

---

## 📊 Viewing Test Results

After running tests, results are available in three ways:

### 1. HTML Report (Recommended)

```bash
npm test
npx playwright show-report
```

- Interactive, detailed, with screenshots/videos
- Best for debugging

### 2. Terminal Output

```bash
npm test
```

- Quick summary
- Shows PASS/FAIL count

### 3. JSON Report

- Located in `test-results/` folder
- Machine-readable format
- For CI/CD integration

---

## 📈 Next Steps

### Extend the Test Suite

1. **Add new page objects** in `tests/pages/`
2. **Create new test files** following naming pattern: `*.spec.ts`
3. **Add helper functions** to `tests/helpers/steamHelpers.ts`

### Example: Adding a New Test

```typescript
test("New feature test", async ({ page }) => {
  // Setup
  await homePage.elementYouWantToTest.click();

  // Assert
  await expect(homePage.expectedResult).toBeVisible();
});
```

### Learn More

- 📖 **Playwright Docs**: https://playwright.dev/
- 🎓 **Best Practices**: https://playwright.dev/docs/best-practices
- 🔗 **Page Object Model**: https://playwright.dev/docs/pom

---

## 📝 Notes

- Tests run against the **live Steam Store** website (no mocking)
- Tests are **independent** - can run in any order
- Tests clean up after themselves (no data pollution)
- Parallel execution can be disabled if issues arise

---

## 📄 License

ISC

---

## 👨‍💻 Contributing

Feel free to:

- Add more test scenarios
- Improve existing tests
- Enhance helper functions
- Update documentation

---

**Happy Testing! 🎮✨**
