# Playwright-Test-Automation-Project-Testing-Practice

# Playwright Login Test Suite

## 📌 Overview

This project contains an automated test suite for validating the login functionality of a web application using **Playwright with TypeScript**.

The tests cover both **successful and unsuccessful login scenarios**, ensuring correct system behaviour for valid and invalid user inputs.

---

## 🧪 Test Coverage

### ✅ Successful Login

* Enters valid username and password
* Verifies successful login message
* Confirms access to secure area
* Verifies logout functionality

---

### ❌ Unsuccessful Login – Invalid Credentials

* Enters incorrect username/password
* Verifies error message is displayed
* Confirms user remains on login page

---

### ❌ Unsuccessful Login – Empty Credentials

* Submits login form with empty fields
* Verifies validation/error message
* Confirms login is not successful

---

## 🛠️ Tech Stack

* **Playwright**
* **TypeScript**
* **Node.js**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Run tests

```bash
npx playwright test
```

---

## 📂 Project Structure

```
tests/
  └── Login.spec.ts
```

---

## 🎯 Purpose

This project demonstrates:

* Basic UI test automation using Playwright
* Writing clear and maintainable test cases
* Handling positive and negative test scenarios
* Using modern locator strategies (`getByRole`)

---

## 📈 Future Improvements

* Implement Page Object Model (POM)
* Add more edge case scenarios
* Introduce test data management
* Integrate CI pipeline (e.g. GitHub Actions)

---

## 👤 Author

* Automated testing practice project for learning and portfolio development
