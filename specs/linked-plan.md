# LinkedIn SQA Job Application Plan

## Application Overview

Test plan for validating the LinkedIn job search and application flow for Software Quality Assurance (SQA) roles. The plan covers login, job search, filter usage, job details review, save/apply actions, and validation of SQA-related job content.

## Test Scenarios

### 1. Search and review SQA jobs

**Seed:** `tests/seed.spec.ts`

**File:** `specs/linked-plan.md`

**Steps:**
  1. Start on `https://www.linkedin.com/`.
    - expect: The LinkedIn homepage loads and the sign in link is visible.
  2. Click the `Sign in` link.
    - expect: The LinkedIn login page loads.
  3. Enter a valid email or phone and password.
    - expect: Credentials fields accept input.
  4. Click the `Sign in` button.
    - expect: The user is logged in and the LinkedIn authenticated homepage or feed appears.
  5. Click the `Jobs` link from the navigation menu.
    - expect: The Jobs page loads successfully.
  6. Search for `SQA` or `Software Quality Assurance` in the job search field.
    - expect: The search field accepts input and relevant search results appear.
  7. Apply filters for job location, experience level, and job type if available.
    - expect: Filters update the search results.
  8. Verify search results include SQA-related job titles such as `Software Quality Assurance Engineer`, `Quality Assurance Analyst`, or `Test Automation Engineer`.
    - expect: At least one result contains SQA-relevant keywords.
  9. Open a relevant job posting from the results.
    - expect: The job posting details page loads.
  10. Verify the job description contains responsibilities or qualifications relevant to QA testing and software quality.
    - expect: SQA-related keywords such as `quality assurance`, `testing`, `test automation`, `manual testing`, or `defect tracking` are present.
  11. If `Easy Apply` is available, click it and verify the application flow begins.
    - expect: The application form or prompt appears.
  12. Save the job posting if the save action is available.
    - expect: The job is saved and confirmation appears.

### 2. Save or bookmark relevant SQA jobs

**Seed:** `tests/seed.spec.ts`

**Steps:**
  1. Start on the LinkedIn Jobs results page for SQA roles.
    - expect: Search results are visible.
  2. Click the save/bookmark icon for a relevant SQA job.
    - expect: The job is marked as saved.
  3. Open the saved jobs list from the user menu or Jobs page.
    - expect: The saved SQA job appears in the saved jobs list.

### 3. Validate SQA job alert and notification workflow

**Seed:** `tests/seed.spec.ts`

**Steps:**
  1. From the Jobs search page, enable a job alert for the current SQA search.
    - expect: Job alert setup is available.
  2. Confirm the alert is active and displayed in the job alerts section.
    - expect: The SQA job alert appears under active alerts.

## Notes

- Use test data that is appropriate and secure for the environment.
- Avoid sharing actual personal credentials in plain text when automating job application flows.
- Focus on verifying the workflow for SQA-related job search and application behavior rather than completing an actual job submission.
