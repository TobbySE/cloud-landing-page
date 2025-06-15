const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tobe Umunna - ALT/SOE/024/1550</title>

      <script src="https://cdn.tailwindcss.com"></script>
      <style>
  	@keyframes fadeIn {
    	  from { opacity: 0; transform: translateY(10px); }
    	  to { opacity: 1; transform: translateY(0); }
  	}

  	.animate-fade-in {
    	  animation: fadeIn 0.8s ease-out both;
  	}
  	@keyframes slideInRight {
    	  from {
      	  opacity: 0;
      	  transform: translateX(40px);
    	}
    	to {
      	  opacity: 1;
      	  transform: translateX(0);
    	 }
  	}
  	.animate-slide-in-right {
    	  animation: slideInRight 0.6s ease-out both;
  	}
  	@keyframes bounceIn {
    	  0% {
      	  opacity: 0;
      	  transform: scale(0.3);
    	}
    	  50% {
      	  opacity: 1;
      	  transform: scale(1.05);
	}
	   70% {
	   transform: scale(0.9);
	 }
	   100% {
	   transform: scale(1);
	 } 

  	.animate-bounce-in {
    	  animation: bounceIn 0.8s ease-out both;
  	}
       </style>
      <link rel="stylesheet" href="/public/styles.css">

    </head>

    <body class="bg-[#f8f9fa] text-gray-800 font-sans">
      <div class="container" id="top">
        <h1 class="text-3xl font-bold text-green-700 mb-2" style="animation: bounceIn 0.8s ease-out both 0.2s;"">Tobe Umunna</h1>
	<h2 class="text-xl font-semibold text-gray-600 mb-4 animate-slide-in-right">Aspiring Cloud Engineer<h2>
        <h3 class="text-lg font-semibold text-gray-700 mb-2">The Future of Cloud Engineering</h3>
          <p class="mb-2 text-justify">I'm Tobe — a curious, hands-on backend intern working my way into cloud engineering. Right now, I am learning how to build and deploy applications the right way with tools like Node.js, Linux, and AWS.</p>
          <p class="mb-2 text-justify">I’m actively working on personal projects like deploying Node.js apps on EC2, setting up CI/CD pipelines with GitHub Actions, and containerizing apps with Docker, all aimed at building real-world cloud infrastructure skills. Every day is a chance to learn, build something new, <i>and sometimes break things along the way</i>.</p>
          <p class="mb-8 text-justify">I’m really interested in how automation, scalability, and clean architecture come together to power real-world systems. I hold a BEng. in Chemical Engineering from Covenant University, Nigeria, and while I’m still early in my journey, I’m all in — learning fast, building small, and aiming <strong>BIG</strong>.</p>

	<section class="bg-white shadow-md rounded-lg p-6 mb-10">
	 <h2 class="text-2xl font-bold text-green-800 mb-4">Projects</h2>
	 <div class="space-y-4">
	 <div class="bg-[#e6f4f1] rounded p-4 shadow-sm">
	   <h3 class="text-lg font-semibold">Node.js + EC2 Deployment</h3>
       	   <p>Deployed a basic Node.js app on AWS EC2 with Nginx as a reverse proxy.</p>
	 </div>
	 </div>
	<section/>
      </div>

     <div class="mb-6">
      <p class="text-md">
	Let's Connect on LinkedIn: 
	<a href="https://www.linkedin.com/in/tobe-umunna/" target="_blank">
	    linkedin.com/in/tobe-umunna/
	</a>
      </p>
     </div>

    <div>
     <section class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-green-800 mb-4">Get in Touch:</h2>
        <form id="contact-form" method="POST" class="space-y-4">
	<div>
         <label for="name" class="block font-medium text-gray-700">Name:</label>
         <input type="text" name="name" required class="w-full p-2 border rounded-md" />
	</div>
	<div>
         <label for="email" class="block font-medium text-gray-700">Email:</label>
         <input type="email" name="email" required class="w-full p-2 border rounded-md" />
	</div>
	<div>
         <label for="message" class="block font-medium text-gray-700">Message:</label>
         <textarea name="message" rows="5" required class="w-full p-2 border rounded-md"></textarea>
	</div>
	<button type="submit" class="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:bg-green-800">
	    Send Message
	</button>
        </form>
      </section>
    </div>

     <div id="toast-success" class="toast">Message sent!</div>
     <div id="toast-error" class="toast error">Something went wrong. Let's try again.</div>

      <script>
        const form = document.getElementById('contact-form');
        const toastSuccess = document.getElementById('toast-success');
        const toastError = document.getElementById('toast-error');

	form.addEventListener('submit', async function (e) => {
          e.preventDefault();

          const formData = new FormData(form);
          const payload = new URLSearchParams(formData);

          try {
            const res = await fetch('/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: payload
            });

             const result = await res.json();
 
           if (result.success) {
              form.reset();
              toastSuccess.classList.add('show');
              setTimeout(() => toastSuccess.classList.remove('show'), 3000);
          } else {
              toastError.classList.add('show');
              setTimeout(() => toastError.classList.remove('show'), 3000);
           }
          } catch (err) {
              toastError.classList.add('show');
              setTimeout(() => toastError.classList.remove('show'), 3000);
            console.log("Oops! Network error.");
	      toastSuccess.addEventListener('click', () => {
   	        toastSuccess.classList.remove('show');
	      });

	  toastError.addEventListener('click', () => {
	    toastError.classList.remove('show');
          }
        });
      </script>

     <footer>
     <div class="mt-8 text-sm text-green-600 text-center">
	  <a href="#top" onclick="window.scrollTo({ top: 0, behaviour: 'smooth }); return false;">Too lazy to scroll back up?</a>
     </div>
     </footer>

    </body>
    </html>
    `);
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('📩New contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}`);
});
