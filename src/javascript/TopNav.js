 const mobileBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('header nav');
    mobileBtn.addEventListener('click', () => {
      nav.classList.toggle('hidden');
      nav.classList.toggle('absolute');
      nav.classList.toggle('top-20');
      nav.classList.toggle('left-0');
      nav.classList.toggle('right-0');
      nav.classList.toggle('bg-white');
      nav.classList.toggle('p-6');
      nav.classList.toggle('shadow-lg');
      nav.classList.toggle('flex');
      nav.classList.toggle('flex-col');
      nav.classList.toggle('gap-4');
    });

    // Hide nav when a nav link is clicked (mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.add('hidden');
        nav.classList.remove('absolute', 'top-20', 'left-0', 'right-0', 'bg-white', 'p-6', 'shadow-lg', 'flex', 'flex-col', 'gap-4');
      });
    });

    // FAQ accordion toggle
    document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('hidden');
            const icon = this.querySelector('svg');
            icon.classList.toggle('rotate-180');
        });
    });