document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        // Mencegah form dikirim sebelum validasi
        event.preventDefault();

        // Ambil nilai dari input
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Panggil fungsi validasi
        if (validateForm(name, email, message)) {
            alert('Form berhasil dikirim!');
            form.submit(); // Mengirim form setelah validasi berhasil
        }
    });

    function validateForm(name, email, message) {
        // Cek jika semua field terisi
        if (name === '' || email === '' || message === '') {
            alert('Semua field harus diisi.');
            return false;
        }

        // Cek format email
        if (!validateEmail(email)) {
            alert('Format email tidak valid.');
            return false;
        }

        return true; // Jika semua validasi berhasil
    }

    function validateEmail(email) {
        // Regular expression untuk memeriksa format email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
