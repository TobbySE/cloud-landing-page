Cloud Landing Page

This project is a dynamic prototype of a landing page, built to demonstrate my ability to provision cloud infrastructure, set up a production-ready web server, and deploy an interactive web application — all hosted on AWS EC2.

Hosted Site

Public IP: http://63.35.201.82

Screenshot of the rendered page:

<img width="1507" alt="Image" src="https://github.com/user-attachments/assets/8499f3a1-df31-4c15-bf57-c0404c2ba90f" />


Steps I Took to Achieve This Project

1. Provisioned a Server (AWS EC2)
- Created an EC2 instance running Ubuntu 22.04
- Connected via SSH
- Opened ports 80 (HTTP) and 443 (HTTPS) in the security group

2. Installed Web Server (Nginx)
- Installed Nginx via `sudo apt install nginx`
- Enabled and started the service
- Set up a reverse proxy from Nginx to a Node.js server running on port 8080

3. Set Up the Dynamic Landing Page
- Built a custom Node.js + Express server
- Rendered the entire HTML page directly via `res.send()`
- Created an interactive contact form with:
  - JavaScript `fetch()` POST request to `/contact`
  - Toast messages for feedback (success/error)
  - Dismissable toasts on click

4. Added Styling and Feedback
- Wrote custom CSS (in `public/styles.css`)
- Centered layout and applied spacing for responsiveness
- Used colors: off-white background + sea/dark olive green highlights
- Added toast messages for form validation and response

5. Networking & Security
- Allowed traffic on HTTP (80) and HTTPS (443)
- Installed Certbot in bash for future SSL encryption (waiting on domain)
- Currently hosted on public IP only

6. Git & GitHub Version Control
- Initialized Git in the project directory
- Set up SSH key authentication from EC2 to GitHub
- Created GitHub repo [`cloud-landing-page`](https://github.com/TobbySE/cloud-landing-page)
- Pushed entire project with:
  - `server.js`
  - `public/styles.css`
  - `README.md`
  - Screenshot image


