# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: link.spec.ts >> LinkedIn scenarios (use env vars) >> Login with valid credentials
- Location: tests\link.spec.ts:15:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="session_key"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - dialog [ref=e3]:
    - generic [ref=e4]:
      - img [ref=e6]
      - paragraph [ref=e9]: LinkedIn
    - paragraph [ref=e10]: LinkedIn is better on the app
    - paragraph [ref=e11]: Don’t have the app? Get it in the Microsoft Store.
    - link "Open the app" [ref=e12] [cursor=pointer]:
      - /url: ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&mode=mini&cid=guest_desktop_upsell
    - button "Dismiss" [ref=e13]:
      - img [ref=e15]
  - navigation "Primary" [ref=e18]:
    - link "LinkedIn" [ref=e19] [cursor=pointer]:
      - /url: /?trk=guest_homepage-basic_nav-header-logo
      - generic [ref=e20]: LinkedIn
      - img [ref=e22]
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Top Content" [ref=e35] [cursor=pointer]:
          - /url: https://www.linkedin.com/top-content?trk=guest_homepage-basic_guest_nav_menu_topContent
          - img [ref=e37]
          - generic [ref=e39]: Top Content
      - listitem [ref=e40]:
        - link "People" [ref=e41] [cursor=pointer]:
          - /url: https://www.linkedin.com/pub/dir/+/+?trk=guest_homepage-basic_guest_nav_menu_people
          - img [ref=e43]
          - generic [ref=e45]: People
      - listitem [ref=e46]:
        - link "Learning" [ref=e47] [cursor=pointer]:
          - /url: https://www.linkedin.com/learning/search?trk=guest_homepage-basic_guest_nav_menu_learning
          - img [ref=e49]
          - generic [ref=e54]: Learning
      - listitem [ref=e55]:
        - link "Jobs" [ref=e56] [cursor=pointer]:
          - /url: https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs
          - img [ref=e58]
          - generic [ref=e60]: Jobs
      - listitem [ref=e61]:
        - link "Games" [ref=e62] [cursor=pointer]:
          - /url: https://www.linkedin.com/games?trk=guest_homepage-basic_guest_nav_menu_games
          - img [ref=e64]
          - generic [ref=e66]: Games
      - listitem [ref=e67]:
        - link "Get the app" [ref=e68] [cursor=pointer]:
          - /url: ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&mode=mini&cid=guest_nav_upsell&trk=guest_homepage-basic_guest_nav_menu_windows
          - img [ref=e70]
          - generic [ref=e72]: Get the app
    - generic [ref=e73]:
      - link "Sign in" [ref=e74] [cursor=pointer]:
        - /url: https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin
      - link "Join now" [ref=e75] [cursor=pointer]:
        - /url: https://www.linkedin.com/signup?trk=guest_homepage-basic_nav-header-join
  - main [ref=e76]:
    - generic [ref=e77]:
      - generic [ref=e78]:
        - heading "Welcome to your professional community" [level=1] [ref=e79]
        - generic [ref=e80]:
          - button "Continue with google" [ref=e82]:
            - iframe [ref=e84]:
              - button "Continue with Google. Opens in new tab" [ref=f5e3] [cursor=pointer]:
                - generic [ref=f5e5]:
                  - img [ref=f5e8]
                  - generic [ref=f5e15]: Continue with Google
          - iframe [ref=e88] [cursor=pointer]:
            - button "Continue with Microsoft" [ref=f3e4] [cursor=pointer]:
              - generic [ref=f3e5]:
                - img "Microsoft" [ref=f3e7]
                - generic [ref=f3e9]: Continue with Microsoft
          - link "Sign in with email" [ref=e89] [cursor=pointer]:
            - /url: https://www.linkedin.com/login
          - paragraph [ref=e90]:
            - text: By clicking Continue to join or sign in, you agree to LinkedIn’s
            - link "User Agreement" [ref=e91] [cursor=pointer]:
              - /url: /legal/user-agreement?trk=linkedin-tc_auth-button_user-agreement
            - text: ","
            - link "Privacy Policy" [ref=e92] [cursor=pointer]:
              - /url: /legal/privacy-policy?trk=linkedin-tc_auth-button_privacy-policy
            - text: ", and"
            - link "Cookie Policy" [ref=e93] [cursor=pointer]:
              - /url: /legal/cookie-policy?trk=linkedin-tc_auth-button_cookie-policy
            - text: .
        - paragraph [ref=e94]:
          - text: New to LinkedIn?
          - link "Join now" [ref=e95] [cursor=pointer]:
            - /url: https://www.linkedin.com/signup
      - img "Welcome to your professional community" [ref=e96]
    - generic [ref=e97]:
      - generic [ref=e98]:
        - heading "Explore top LinkedIn content" [level=2] [ref=e99]
        - paragraph [ref=e100]: Discover relevant posts and expert insights — curated by topic and in one place.
      - generic [ref=e101]:
        - list:
          - listitem:
            - link "Career" [ref=e102] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/career/
          - listitem:
            - link "Productivity" [ref=e103] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/productivity/
          - listitem:
            - link "Finance" [ref=e104] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/finance/
          - listitem:
            - link "Soft Skills & Emotional Intelligence" [ref=e105] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/soft-skills-emotional-intelligence/
          - listitem:
            - link "Project Management" [ref=e106] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/project-management/
          - listitem:
            - link "Education" [ref=e107] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/education/
          - listitem:
            - link "Technology" [ref=e108] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/technology/
          - listitem:
            - link "Leadership" [ref=e109] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/leadership/
          - listitem:
            - link "Ecommerce" [ref=e110] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/ecommerce/
          - listitem:
            - link "Show all top content" [ref=e111] [cursor=pointer]:
              - /url: https://www.linkedin.com/top-content/
              - text: Show all
    - generic [ref=e112]:
      - heading "Find the right job or internship for you" [level=2] [ref=e114]
      - generic [ref=e116]:
        - list [ref=e117]:
          - listitem:
            - link "Engineering" [ref=e118] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/engineering-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Business Development" [ref=e119] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/business-development-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Finance" [ref=e120] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/finance-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Administrative Assistant" [ref=e121] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/administrative-assistant-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Retail Associate" [ref=e122] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/retail-associate-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Customer Service" [ref=e123] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/customer-service-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Operations" [ref=e124] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/operations-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Information Technology" [ref=e125] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/information-technology-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Marketing" [ref=e126] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/marketing-jobs-lahore?trk=homepage-basic_suggested-search
          - listitem:
            - link "Human Resources" [ref=e127] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/human-resources-jobs-lahore?trk=homepage-basic_suggested-search
        - button "Show more" [ref=e128] [cursor=pointer]: Show more
    - generic [ref=e131]:
      - heading "Post your job for millions of people to see" [level=2] [ref=e132]
      - link "Post a job" [ref=e133] [cursor=pointer]:
        - /url: https://www.linkedin.com/talent/post-a-job?trk=homepage-basic_talent-finder-cta
    - generic [ref=e134]:
      - generic [ref=e135]:
        - heading "Discover the best software tools" [level=2] [ref=e136]
        - paragraph [ref=e137]: Connect with buyers who have first-hand experience to find the best products for you.
      - generic [ref=e138]:
        - list:
          - listitem:
            - link "E-Commerce Platforms" [ref=e139] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/e-commerce-platforms
          - listitem:
            - link "CRM Software" [ref=e140] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/customer-relationship-management-software
          - listitem:
            - link "Human Resources Management Systems" [ref=e141] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/human-resources-management-systems
          - listitem:
            - link "Recruiting Software" [ref=e142] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/recruiting-software
          - listitem:
            - link "Sales Intelligence Software" [ref=e143] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/sales-intelligence-software
          - listitem:
            - link "Project Management Software" [ref=e144] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/project-management-software
          - listitem:
            - link "Help Desk Software" [ref=e145] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/help-desk-software
          - listitem:
            - link "Social Networking Software" [ref=e146] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/social-networking-software
          - listitem:
            - link "Desktop Publishing Software" [ref=e147] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/categories/desktop-publishing-software
          - listitem:
            - link "Show all softwares and platforms" [ref=e148] [cursor=pointer]:
              - /url: https://www.linkedin.com/products/home
              - text: Show all
    - generic [ref=e149]:
      - generic [ref=e150]:
        - heading "Keep your mind sharp with games" [level=2] [ref=e151]
        - paragraph [ref=e152]: Take a break and reconnect with your network through quick daily games.
      - generic [ref=e153]:
        - list:
          - listitem:
            - link "Patches" [ref=e154] [cursor=pointer]:
              - /url: https://www.linkedin.com/games/patches/
          - listitem:
            - link "Zip" [ref=e155] [cursor=pointer]:
              - /url: https://www.linkedin.com/games/zip/
          - listitem:
            - link "Mini Sudoku" [ref=e156] [cursor=pointer]:
              - /url: https://www.linkedin.com/games/mini-sudoku/
          - listitem:
            - link "Queens" [ref=e157] [cursor=pointer]:
              - /url: https://www.linkedin.com/games/queens/
          - listitem:
            - link "Tango" [ref=e158] [cursor=pointer]:
              - /url: https://www.linkedin.com/games/tango/
          - listitem:
            - link "Pinpoint" [ref=e159] [cursor=pointer]:
              - /url: https://www.linkedin.com/games/pinpoint/
          - listitem:
            - link "Crossclimb" [ref=e160] [cursor=pointer]:
              - /url: https://www.linkedin.com/games/crossclimb/
    - generic [ref=e162]:
      - list [ref=e164]:
        - listitem [ref=e165]:
          - generic [ref=e166]:
            - heading "Let the right people know you’re open to work" [level=2] [ref=e167]
            - paragraph [ref=e168]: With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.
        - listitem [ref=e169]:
          - generic [ref=e170]:
            - heading [level=2] [ref=e171]: Conversations today could lead to opportunity tomorrow
            - paragraph [ref=e172]: Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.
        - listitem [ref=e173]:
          - generic [ref=e174]:
            - heading [level=2] [ref=e175]: Stay up to date on your industry
            - paragraph [ref=e176]: From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.
      - button "Next Slide" [ref=e178] [cursor=pointer]
    - generic [ref=e181]:
      - generic [ref=e183]:
        - heading "Connect with people who can help" [level=2] [ref=e184]
        - link "Find people you know" [ref=e187] [cursor=pointer]:
          - /url: https://www.linkedin.com/pub/dir/+/+?trk=homepage-basic
      - generic [ref=e189]:
        - heading "Learn the skills you need to succeed" [level=2] [ref=e190]
        - button "Choose a topic to learn about" [ref=e195] [cursor=pointer]:
          - generic [ref=e196]: Choose a topic to learn about
    - generic [ref=e199]:
      - generic [ref=e200]:
        - heading "Who is LinkedIn for?" [level=2] [ref=e201]
        - paragraph [ref=e202]: Anyone looking to navigate their professional life.
        - list [ref=e204]:
          - listitem [ref=e205]:
            - link "Find a coworker or classmate" [ref=e206] [cursor=pointer]:
              - /url: https://www.linkedin.com/pub/dir/+/+?trk=homepage-basic_brand-discovery_intent-module-firstBtn
          - listitem [ref=e207]:
            - link "Find a new job" [ref=e208] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs/jobs-in-lahore?trk=homepage-basic_brand-discovery_intent-module-secondBtn
          - listitem [ref=e209]:
            - link "Find a course or training" [ref=e210] [cursor=pointer]:
              - /url: https://www.linkedin.com/learning/search?trk=homepage-basic_brand-discovery_intent-module-thirdBtn
      - img "Who is LinkedIn for?" [ref=e211]
    - generic [ref=e213]:
      - heading "Join your colleagues, classmates, and friends on LinkedIn" [level=2] [ref=e214]
      - link "Get started" [ref=e215] [cursor=pointer]:
        - /url: https://www.linkedin.com/signup?trk=homepage-basic_join-cta
    - generic [ref=e218]:
      - generic [ref=e219]:
        - heading "General" [level=3] [ref=e220]
        - list [ref=e221]:
          - listitem [ref=e222]:
            - link "Sign Up" [ref=e223] [cursor=pointer]:
              - /url: https://www.linkedin.com/signup?trk=guest_homepage-basic_directory
          - listitem [ref=e224]:
            - link "Help Center" [ref=e225] [cursor=pointer]:
              - /url: https://www.linkedin.com/help/linkedin?lang=en&trk=homepage-basic_directory_helpCenterUrl
          - listitem [ref=e226]:
            - link "About" [ref=e227] [cursor=pointer]:
              - /url: https://about.linkedin.com/?trk=homepage-basic_directory_aboutUrl
          - listitem [ref=e228]:
            - link "Press" [ref=e229] [cursor=pointer]:
              - /url: https://press.linkedin.com/?trk=homepage-basic_directory_pressMicrositeUrl
          - listitem [ref=e230]:
            - link "Blog" [ref=e231] [cursor=pointer]:
              - /url: https://blog.linkedin.com/?trk=homepage-basic_directory_blogMicrositeUrl
          - listitem [ref=e232]:
            - link "Careers" [ref=e233] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/linkedin/jobs?trk=homepage-basic_directory_careersUrl
          - listitem [ref=e234]:
            - link "Developers" [ref=e235] [cursor=pointer]:
              - /url: https://developer.linkedin.com/?trk=homepage-basic_directory_developerMicrositeUrl
      - generic [ref=e236]:
        - heading "Browse LinkedIn" [level=3] [ref=e237]
        - list [ref=e238]:
          - listitem [ref=e239]:
            - link "Learning" [ref=e240] [cursor=pointer]:
              - /url: https://www.linkedin.com/learning/?trk=homepage-basic_directory_learningHomeUrl
          - listitem [ref=e241]:
            - link "Jobs" [ref=e242] [cursor=pointer]:
              - /url: https://www.linkedin.com/jobs?trk=homepage-basic_directory_jobsHomeUrl
          - listitem [ref=e243]:
            - link "Games" [ref=e244] [cursor=pointer]:
              - /url: https://www.linkedin.com/games?trk=homepage-basic_directory_gameHubUrl
          - listitem [ref=e245]:
            - link "Mobile" [ref=e246] [cursor=pointer]:
              - /url: https://members.linkedin.com/apps?trk=homepage-basic_directory_mobileMicrositeUrl
          - listitem [ref=e247]:
            - link "Services" [ref=e248] [cursor=pointer]:
              - /url: https://www.linkedin.com/services?trk=homepage-basic_directory_servicesHomeUrl
          - listitem [ref=e249]:
            - link "Products" [ref=e250] [cursor=pointer]:
              - /url: https://www.linkedin.com/products?trk=homepage-basic_directory_productsHomeUrl
          - listitem [ref=e251]:
            - link "Top Companies" [ref=e252] [cursor=pointer]:
              - /url: https://www.linkedin.com/hubs/top-companies/?trk=homepage-basic_directory_topCompaniesHubHomeUrl
          - listitem [ref=e253]:
            - link "Top Startups" [ref=e254] [cursor=pointer]:
              - /url: https://www.linkedin.com/hubs/top-startups/?trk=homepage-basic_directory_topStartupsHubHomeUrl
          - listitem [ref=e255]:
            - link "Top Colleges" [ref=e256] [cursor=pointer]:
              - /url: https://www.linkedin.com/hubs/top-colleges/?trk=homepage-basic_directory_topCollegesHubHomeUrl
      - generic [ref=e257]:
        - heading "Business Solutions" [level=3] [ref=e258]
        - list [ref=e259]:
          - listitem [ref=e260]:
            - link "Talent" [ref=e261] [cursor=pointer]:
              - /url: https://business.linkedin.com/talent-solutions?src=li-footer&utm_source=linkedin&utm_medium=footer&trk=homepage-basic_directory_talentSolutionsMicrositeUrl
          - listitem [ref=e262]:
            - link "Marketing" [ref=e263] [cursor=pointer]:
              - /url: https://business.linkedin.com/marketing-solutions?src=li-footer&utm_source=linkedin&utm_medium=footer&trk=homepage-basic_directory_marketingSolutionsMicrositeUrl
          - listitem [ref=e264]:
            - link "Sales" [ref=e265] [cursor=pointer]:
              - /url: https://business.linkedin.com/sales-solutions?src=li-footer&utm_source=linkedin&utm_medium=footer&trk=homepage-basic_directory_salesSolutionsMicrositeUrl
          - listitem [ref=e266]:
            - link "Learning" [ref=e267] [cursor=pointer]:
              - /url: https://learning.linkedin.com/?src=li-footer&trk=homepage-basic_directory_learningMicrositeUrl
      - generic [ref=e268]:
        - heading "Directories" [level=3] [ref=e269]
        - list [ref=e270]:
          - listitem [ref=e271]:
            - link "Members" [ref=e272] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/people?trk=homepage-basic_directory_peopleDirectoryUrl
          - listitem [ref=e273]:
            - link "Jobs" [ref=e274] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/jobs?trk=homepage-basic_directory_jobSearchDirectoryUrl
          - listitem [ref=e275]:
            - link "Companies" [ref=e276] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/companies?trk=homepage-basic_directory_companyDirectoryUrl
          - listitem [ref=e277]:
            - link "Featured" [ref=e278] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/featured?trk=homepage-basic_directory_featuredDirectoryUrl
          - listitem [ref=e279]:
            - link "Learning" [ref=e280] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/learning?trk=homepage-basic_directory_learningDirectoryUrl
          - listitem [ref=e281]:
            - link "Posts" [ref=e282] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/posts?trk=homepage-basic_directory_postsDirectoryUrl
          - listitem [ref=e283]:
            - link "Articles" [ref=e284] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/articles?trk=homepage-basic_directory_articlesDirectoryUrl
          - listitem [ref=e285]:
            - link "Schools" [ref=e286] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/schools?trk=homepage-basic_directory_schoolsDirectoryUrl
          - listitem [ref=e287]:
            - link "News" [ref=e288] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/news?trk=homepage-basic_directory_newsDirectoryUrl
          - listitem [ref=e289]:
            - link "News Letters" [ref=e290] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/newsletters?trk=homepage-basic_directory_newslettersDirectoryUrl
          - listitem [ref=e291]:
            - link "Services" [ref=e292] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/services?trk=homepage-basic_directory_servicesDirectoryUrl
          - listitem [ref=e293]:
            - link "Products" [ref=e294] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/products?trk=homepage-basic_directory_productsDirectoryUrl
          - listitem [ref=e295]:
            - link "Advice" [ref=e296] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/advice?trk=homepage-basic_directory_adviceDirectoryUrl
          - listitem [ref=e297]:
            - link "People Search" [ref=e298] [cursor=pointer]:
              - /url: https://www.linkedin.com/directory/people-search?trk=homepage-basic_directory_peopleSearchDirectoryUrl
  - contentinfo [ref=e299]:
    - list [ref=e300]:
      - generic [ref=e301]: LinkedIn
      - generic [ref=e303]: © 2026
      - listitem [ref=e304]:
        - link "About" [ref=e305] [cursor=pointer]:
          - /url: https://about.linkedin.com?trk=homepage-basic_footer-about
      - listitem [ref=e306]:
        - link "Accessibility" [ref=e307] [cursor=pointer]:
          - /url: https://www.linkedin.com/accessibility?trk=homepage-basic_footer-accessibility
      - listitem [ref=e308]:
        - link "User Agreement" [ref=e309] [cursor=pointer]:
          - /url: https://www.linkedin.com/legal/user-agreement?trk=homepage-basic_footer-user-agreement
      - listitem [ref=e310]:
        - link "Privacy Policy" [ref=e311] [cursor=pointer]:
          - /url: https://www.linkedin.com/legal/privacy-policy?trk=homepage-basic_footer-privacy-policy
      - listitem [ref=e312]:
        - link "Cookie Policy" [ref=e313] [cursor=pointer]:
          - /url: https://www.linkedin.com/legal/cookie-policy?trk=homepage-basic_footer-cookie-policy
      - listitem [ref=e314]:
        - link "Copyright Policy" [ref=e315] [cursor=pointer]:
          - /url: https://www.linkedin.com/legal/copyright-policy?trk=homepage-basic_footer-copyright-policy
      - listitem [ref=e316]:
        - link "Brand Policy" [ref=e317] [cursor=pointer]:
          - /url: https://brand.linkedin.com/policies?trk=homepage-basic_footer-brand-policy
      - listitem [ref=e318]:
        - link "Guest Controls" [ref=e319] [cursor=pointer]:
          - /url: https://www.linkedin.com/psettings/guest-controls?trk=homepage-basic_footer-guest-controls
      - listitem [ref=e320]:
        - link "Community Guidelines" [ref=e321] [cursor=pointer]:
          - /url: https://www.linkedin.com/legal/professional-community-policies?trk=homepage-basic_footer-community-guide
      - listitem [ref=e322]:
        - button "Language" [ref=e324]: Language
  - generic:
    - iframe
```

# Test source

```ts
  1  | // Playwright tests for LinkedIn
  2  | // NOTE: Do NOT hard-code credentials. Set LINKEDIN_EMAIL and LINKEDIN_PASSWORD
  3  | // in your environment before running tests.
  4  | 
  5  | import { test, expect } from '@playwright/test';
  6  | 
  7  | const EMAIL = process.env.LINKEDIN_EMAIL;
  8  | const PASSWORD = process.env.LINKEDIN_PASSWORD;
  9  | 
  10 | test.describe('LinkedIn scenarios (use env vars)', () => {
  11 |   test.beforeEach(async ({ page }) => {
  12 |     await page.goto('https://www.linkedin.com/');
  13 |   });
  14 | 
  15 |   test('Login with valid credentials', async ({ page }) => {
  16 |     test.skip(!EMAIL || !PASSWORD, 'Set LINKEDIN_EMAIL and LINKEDIN_PASSWORD');
> 17 |     await page.fill('input[name="session_key"]', EMAIL!);
     |                ^ Error: page.fill: Test timeout of 30000ms exceeded.
  18 |     await page.fill('input[name="session_password"]', PASSWORD!);
  19 |     await Promise.all([
  20 |       page.waitForNavigation({ waitUntil: 'networkidle' }),
  21 |       page.click('button[type="submit"]'),
  22 |     ]);
  23 |     await expect(page).toHaveURL(/.*feed.*/);
  24 |   });
  25 | 
  26 |   test('Search shows input after login', async ({ page }) => {
  27 |     test.skip(!EMAIL || !PASSWORD, 'Set LINKEDIN_EMAIL and LINKEDIN_PASSWORD');
  28 |     // ensure logged in (quick attempt)
  29 |     if (await page.locator('input[name="session_key"]').count() > 0) {
  30 |       await page.fill('input[name="session_key"]', EMAIL!);
  31 |       await page.fill('input[name="session_password"]', PASSWORD!);
  32 |       await Promise.all([
  33 |         page.waitForNavigation({ waitUntil: 'networkidle' }),
  34 |         page.click('button[type="submit"]'),
  35 |       ]);
  36 |     }
  37 |     const searchInput = page.locator('input[placeholder="Search"]');
  38 |     await expect(searchInput).toBeVisible({ timeout: 10000 });
  39 |     await searchInput.fill('Playwright automation');
  40 |     await page.press('input[placeholder="Search"]', 'Enter');
  41 |     await page.waitForTimeout(2000);
  42 |   });
  43 | 
  44 |   test('Logout by visiting mobile logout endpoint', async ({ page }) => {
  45 |     test.skip(!EMAIL || !PASSWORD, 'Set LINKEDIN_EMAIL and LINKEDIN_PASSWORD');
  46 |     // attempt login if needed
  47 |     if (await page.locator('input[name="session_key"]').count() > 0) {
  48 |       await page.fill('input[name="session_key"]', EMAIL!);
  49 |       await page.fill('input[name="session_password"]', PASSWORD!);
  50 |       await Promise.all([
  51 |         page.waitForNavigation({ waitUntil: 'networkidle' }),
  52 |         page.click('button[type="submit"]'),
  53 |       ]);
  54 |     }
  55 |     // LinkedIn mobile logout endpoint reliably logs out
  56 |     await page.goto('https://www.linkedin.com/m/logout/', { waitUntil: 'networkidle' });
  57 |     await expect(page).toHaveURL(/.*login.*/);
  58 |   });
  59 | });
  60 | 
```