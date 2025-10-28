 // Job data in JSON format
        const jobData = [
           {
            id: "office-admin",
            title: "Office Administrator",
            location: "Kempton Park, Johannesburg",
            type: "Full-time",
            experience: "2+ years’ experience",
            about:
            "We are seeking a highly organized Office Administrator to manage our daily office operations and administrative tasks. The ideal candidate will be a proactive problem-solver with exceptional communication skills and a meticulous attention to detail. This position will provide administrative support to our management team, coordinate office activities, and ensure the smooth running of our Kempton Park office.",
            responsibilities: [
            "Manage office operations and coordinate administrative tasks",
            "Handle correspondence, phone calls, and emails",
            "Maintain office filing and record systems",
            "Coordinate meetings and appointments",
            "Assist with document preparation and reporting",
            "Manage office supplies and inventory",
            "Support HR with onboarding and employee records",
            ],
            requirements: [
            "2+ years of office administration experience",
            "Proficiency in MS Office (Word, Excel, Outlook)",
            "Excellent communication and interpersonal skills",
            "Strong organizational and time management abilities",
            "Attention to detail and problem-solving skills",
            "Ability to handle confidential information with discretion",
            "Relevant qualification in Business Administration or similar field",
            ],
        },
        {
            id: "hr-manager",
            title: "Human Resources Manager",
            location: "Kempton Park, Johannesburg",
            type: "Full-time",
            experience: "3+ years’ experience",
            about:
            "We are looking for an experienced HR Manager to oversee all aspects of human resources practices and processes. The ideal candidate will support business needs and ensure the proper implementation of company strategy and objectives.",
            responsibilities: [
            "Develop and implement HR strategies and initiatives aligned with overall business strategy",
            "Bridge management and employee relations by addressing demands, grievances or other issues",
            "Manage the recruitment and selection process",
            "Support current and future business needs through development, engagement, motivation and preservation of human capital",
            "Develop and monitor overall HR strategies, systems, tactics and procedures across the organization",
            "Oversee and manage a performance appraisal system that drives high performance",
            "Maintain pay plan and benefits program",
            ],
            requirements: [
            "Proven working experience as HR Manager or other HR Executive",
            "People-oriented and results-driven",
            "Demonstrable experience with HR metrics",
            "Knowledge of HR systems and databases",
            "Ability to architect strategy along with leadership skills",
            "Excellent active listening, negotiation and presentation skills",
            "Degree in Human Resources or related field",
            ]
        }
           
        ];

        // Function to render job list items
        function renderJobList() {
            const jobListContainer = document.getElementById('jobList');
            jobListContainer.innerHTML = ''; // Clear existing content
            
            jobData.forEach((job, index) => {
                const jobItem = document.createElement('div');
                jobItem.className = `job-item p-4 rounded-lg border border-gray-200 cursor-pointer ${index === 0 ? 'active' : ''}`;
                jobItem.setAttribute('data-job', job.id);
                
                jobItem.innerHTML = `
                    <h4 class="font-medium">${job.title}</h4>
                `;
                
                jobItem.addEventListener('click', () => {
                    // Remove active class from all job items
                    document.querySelectorAll('.job-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Add active class to clicked job item
                    jobItem.classList.add('active');
                    
                    // Show job details
                    showJobDetails(job.id);
                });
                
                jobListContainer.appendChild(jobItem);
            });
        }

        // Function to show job details
        function showJobDetails(jobId) {
            const job = jobData.find(j => j.id === jobId);
            if (!job) return;
            
            const jobDetailsHTML = `
                <div class="job-details active">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">${job.title}</h3>
                    <p class="text-gray-600 mb-6">${job.location} • ${job.type}</p>
                    
                    <div class="mb-8">
                        <h4 class="font-semibold text-lg mb-3 text-gray-700">About the Role</h4>
                        <p class="text-gray-700">${job.about}</p>
                    </div>
                    
                    <div class="mb-8">
                        <h4 class="font-semibold text-lg mb-3 text-gray-700">Key Responsibilities</h4>
                        <ul class="list-disc pl-5 space-y-2 text-gray-700">
                            ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="mb-8">
                        <h4 class="font-semibold text-lg mb-3 text-gray-900">Requirements</h4>
                        <ul class="list-disc pl-5 space-y-2 text-gray-700">
                            ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <a href="#application" class="btn-primary text-white px-6 py-3 rounded-lg font-semibold inline-block hover:bg-[#fbbf24] transition-colors">
                        Apply for This Position
                    </a>
                </div>
            `;
            
            document.getElementById('jobContent').innerHTML = jobDetailsHTML;
            document.getElementById('default-message')?.remove();
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderJobList();
            
            // Show first job by default
            if (jobData.length > 0) {
                showJobDetails(jobData[0].id);
            }
        });

        function toggleFaq(id) {
  const content = document.getElementById(`faq-content-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);
  
  // Toggle open/close
  if (content.classList.contains("hidden")) {
    // Close all FAQs first (accordion effect)
    document.querySelectorAll('[id^="faq-content-"]').forEach(el => {
      el.classList.add("hidden");
      el.style.maxHeight = null;
    });
    document.querySelectorAll('[id^="faq-icon-"]').forEach(ic => {
      ic.style.transform = "rotate(0deg)";
    });

    // Open the selected one
    content.classList.remove("hidden");
    content.style.maxHeight = content.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
  } else {
    content.classList.add("hidden");
    content.style.maxHeight = null;
    icon.style.transform = "rotate(0deg)";
  }
}

// Setup smooth transitions on load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[id^="faq-content-"]').forEach(el => {
    el.classList.add("hidden");
    el.style.overflow = "hidden";
    el.style.transition = "max-height 0.3s ease";
    el.style.maxHeight = null;
  });
});

document.addEventListener('DOMContentLoaded', function() {
      // Set current year in footer
      document.getElementById('footerYear').textContent = new Date().getFullYear();
      
      // Job selection functionality
      const jobItems = document.querySelectorAll('.job-item');
      const jobDetails = document.querySelectorAll('.job-details');
      
      jobItems.forEach(item => {
        item.addEventListener('click', function() {
          // Remove active class from all items
          jobItems.forEach(i => i.classList.remove('active'));
          // Add active class to clicked item
          this.classList.add('active');
          
          // Hide all job details
          jobDetails.forEach(detail => detail.classList.add('hidden'));
          
          // Show selected job detail
          const jobId = this.getAttribute('data-job');
          document.getElementById(jobId).classList.remove('hidden');
        });
      });
    });
    
    // Application modal functions
    function openApplicationModal(jobTitle) {
      document.getElementById('applicationJobTitle').textContent = jobTitle;
      document.getElementById('applicationModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    function closeApplicationModal() {
      document.getElementById('applicationModal').classList.add('hidden');
      document.body.style.overflow = 'auto'; // Restore background scrolling    
        document.getElementById('applicationForm').reset(); // Reset form fields
    }

    function openGeneralApplication() {
      openApplicationModal('General Application');
    }